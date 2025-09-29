#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

interface TokenValue {
  value: string;
  type: string;
  description?: string;
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface TokenRoot {
  [key: string]: TokenGroup;
}

type TokenDict = Record<string, any>;

const TOKENS_DIR = path.join(process.cwd(), 'theme/tokens');
const OUTPUT_DIR = path.join(process.cwd(), 'src/styles');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'tokens.css');

/**
 * Load and parse a JSON token file
 */
function loadTokenFile(filePath: string): TokenRoot {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading token file ${filePath}:`, error);
    return {};
  }
}

/**
 * Flatten nested token object into dot notation
 */
function flattenTokens(obj: any, prefix = '', result: TokenDict = {}): TokenDict {
  for (const key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    
    if (obj[key] && typeof obj[key] === 'object') {
      if (obj[key].value !== undefined && obj[key].type !== undefined) {
        // This is a token value
        result[newKey] = obj[key].value;
      } else {
        // This is a nested group
        flattenTokens(obj[key], newKey, result);
      }
    }
  }
  
  return result;
}

/**
 * Resolve placeholder references like {Palette.Grey.80} in token values
 */
function resolveReferences(tokens: TokenDict, currentBrand = 'adobe'): TokenDict {
  const resolved: TokenDict = { ...tokens };
  const maxIterations = 10; // Prevent infinite loops
  
  for (let iteration = 0; iteration < maxIterations; iteration++) {
    let hasChanges = false;
    
    for (const key in resolved) {
      const value = resolved[key];
      if (typeof value === 'string' && value.includes('{')) {
        const newValue = value.replace(/\{([^}]+)\}/g, (match, reference) => {
          // Handle different reference patterns
          let resolveKey = reference;
          
          // Handle Palette.* references -> Global.Palette.*
          if (reference.startsWith('Palette.')) {
            resolveKey = `Global.${reference}`;
          }
          
          // Handle Colors.Brand.* references -> Brand.<currentBrand>.Colors.Brand.*
          if (reference.startsWith('Colors.Brand.')) {
            resolveKey = `Brand.${currentBrand}.${reference}`;
            
            // If the full brand reference doesn't exist, try the simple reference within current brand
            if (!resolved[resolveKey]) {
              const simpleBrandRef = reference.replace('Colors.Brand.', '');
              const alternateBrandKey = `Brand.${currentBrand}.Colors.Brand.${simpleBrandRef}`;
              if (resolved[alternateBrandKey]) {
                resolveKey = alternateBrandKey;
              }
            }
          }
          
          // Handle Typography.* references -> Global.Typography.*
          if (reference.startsWith('Typography.')) {
            resolveKey = `Global.${reference}`;
          }
          
          const resolvedValue = resolved[resolveKey];
          if (resolvedValue !== undefined) {
            hasChanges = true;
            return resolvedValue;
          } else {
            console.warn(`Missing token: ${reference} (resolved as ${resolveKey})`);
            return match; // Keep original if not found
          }
        });
        
        if (newValue !== value) {
          resolved[key] = newValue;
          hasChanges = true;
        }
      }
    }
    
    if (!hasChanges) break;
  }
  
  return resolved;
}

/**
 * Convert a token key to CSS variable name
 */
function toCSSVariableName(key: string, forSemanticRoot: boolean = false): string {
  if (forSemanticRoot) {
    // For semantic root variables, remove all scope prefixes and create flat names
    return key
      .replace(/^(Global|Theme\.(light|dark)|Brand\.(adobe|fio))\./i, '') // Remove scope prefixes
      .replace(/^Colors\./, 'color-') // Colors.* -> color-*
      .replace(/^FontSizes\./, 'font-sizes-') // FontSizes.* -> font-sizes-*
      .replace(/^LineHeights\./, 'line-heights-') // LineHeights.* -> line-heights-*
      .replace(/^FontWeights\./, 'font-weights-') // FontWeights.* -> font-weights-*
      .replace(/^Fonts\./, 'fonts-') // Fonts.* -> fonts-*
      .replace(/^ComponentSizes\./, 'component-sizes-') // ComponentSizes.* -> component-sizes-*
      .replace(/^Icons\./, 'icons-') // Icons.* -> icons-*
      .replace(/^Spaces\./, 'spaces-') // Spaces.* -> spaces-*
      .replace(/^Radii\./, 'radii-') // Radii.* -> radii-*
      .replace(/^Shadows\./, 'shadows-') // Shadows.* -> shadows-*
      .replace(/^ZIndices\./, 'z-indices-') // ZIndices.* -> z-indices-*
      .replace(/^Breakpoints\./, 'breakpoints-') // Breakpoints.* -> breakpoints-*
      .replace(/^Transitions\./, 'transitions-') // Transitions.* -> transitions-*
      .replace(/^Palette\./, 'palette-') // Palette.* -> palette-*
      .replace(/^Typography\./, 'typography-') // Typography.* -> typography-*
      .replace(/\./g, '-') // Replace dots with hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/([A-Z])/g, (match, letter) => `-${letter.toLowerCase()}`) // Convert camelCase
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-/, '') // Remove leading hyphen
      .toLowerCase();
  } else {
    // For scoped variables, keep a shortened scope prefix
    return key
      .replace(/^(Global|Theme|Brand)\./i, '') // Remove top-level prefixes
      .replace(/\./g, '-') // Replace dots with hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/([A-Z])/g, (match, letter) => `-${letter.toLowerCase()}`) // Convert camelCase
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-/, '') // Remove leading hyphen
      .toLowerCase();
  }
}

/**
 * Generate CSS from resolved tokens
 */
function generateCSS(tokens: TokenDict): string {
  const css: string[] = [];
  
  // Helper to group tokens by scope
  const themeLight: string[] = [];
  const themeDark: string[] = [];
  const brandAdobe: string[] = [];
  const brandFio: string[] = [];
  const globalTokens: string[] = [];
  
  for (const key in tokens) {
    const value = tokens[key];
    
    if (key.startsWith('Theme.light.')) {
      // Add semantic variables to root scope for light theme (default)
      const semanticVar = toCSSVariableName(key, true);
      const semanticDeclaration = `  --${semanticVar}: ${value};`;
      themeLight.push(semanticDeclaration);
      
      // Also add scoped variable for explicit theme override
      const scopedVar = toCSSVariableName(key);
      const scopedDeclaration = `  --light--${scopedVar}: ${value};`;
      themeLight.push(scopedDeclaration);
    } else if (key.startsWith('Theme.dark.')) {
      // Add semantic variables to dark theme override
      const semanticVar = toCSSVariableName(key, true);
      const semanticDeclaration = `  --${semanticVar}: ${value};`;
      themeDark.push(semanticDeclaration);
      
      // Also add scoped variable
      const scopedVar = toCSSVariableName(key);
      const scopedDeclaration = `  --dark--${scopedVar}: ${value};`;
      themeDark.push(scopedDeclaration);
    } else if (key.startsWith('Brand.adobe.')) {
      // Add semantic variables to root scope for adobe brand (default)
      const semanticVar = toCSSVariableName(key, true);
      const semanticDeclaration = `  --${semanticVar}: ${value};`;
      brandAdobe.push(semanticDeclaration);
      
      // Also add scoped variable
      const scopedVar = toCSSVariableName(key);
      const scopedDeclaration = `  --adobe--${scopedVar}: ${value};`;
      brandAdobe.push(scopedDeclaration);
    } else if (key.startsWith('Brand.fio.')) {
      // Add semantic variables to fio brand override
      const semanticVar = toCSSVariableName(key, true);
      const semanticDeclaration = `  --${semanticVar}: ${value};`;
      brandFio.push(semanticDeclaration);
      
      // Also add scoped variable
      const scopedVar = toCSSVariableName(key);
      const scopedDeclaration = `  --fio--${scopedVar}: ${value};`;
      brandFio.push(scopedDeclaration);
    } else if (key.startsWith('Global.')) {
      const cssVar = toCSSVariableName(key, true);
      const cssDeclaration = `  --${cssVar}: ${value};`;
      globalTokens.push(cssDeclaration);
    }
  }
  
  // Generate CSS with proper scoping
  css.push('/* Auto-generated CSS variables from Tokens Studio */');
  css.push('/* Light theme (default) + Adobe brand (default) + Global tokens */');
  css.push(':root {');
  css.push(...globalTokens);
  css.push(...themeLight);
  css.push(...brandAdobe);
  css.push('}');
  css.push('');
  
  if (themeDark.length > 0) {
    css.push('/* Dark theme overrides */');
    css.push('[data-theme="dark"] {');
    css.push(...themeDark);
    css.push('}');
    css.push('');
  }
  
  if (brandFio.length > 0) {
    css.push('/* FIO brand overrides */');
    css.push('[data-brand="fio"] {');
    css.push(...brandFio);
    css.push('}');
    css.push('');
  }
  
  if (brandAdobe.length > 0) {
    css.push('/* Adobe brand (explicit) */');
    css.push('[data-brand="adobe"] {');
    css.push(...brandAdobe);
    css.push('}');
  }
  
  return css.join('\n');
}

/**
 * Build tokens and generate CSS
 */
function buildTokens(): void {
  console.log('🏗️  Building tokens...');
  
  // Load all token files
  const globalTokens = loadTokenFile(path.join(TOKENS_DIR, 'global.json'));
  const lightThemeTokens = loadTokenFile(path.join(TOKENS_DIR, 'theme.light.json'));
  const darkThemeTokens = loadTokenFile(path.join(TOKENS_DIR, 'theme.dark.json'));
  const adobeBrandTokens = loadTokenFile(path.join(TOKENS_DIR, 'brand.adobe.json'));
  const fioBrandTokens = loadTokenFile(path.join(TOKENS_DIR, 'brand.fio.json'));
  
  // Merge all tokens with proper prefixes
  const allTokens: TokenDict = {
    ...flattenTokens(globalTokens, 'Global'),
    ...flattenTokens(lightThemeTokens, 'Theme.light'),
    ...flattenTokens(darkThemeTokens, 'Theme.dark'),
    ...flattenTokens(adobeBrandTokens, 'Brand.adobe'),
    ...flattenTokens(fioBrandTokens, 'Brand.fio'),
  };
  
  // Create separate token sets for each brand to resolve properly
  const adobeTokens = { ...allTokens };
  const fioTokens = { ...allTokens };
  
  // Resolve references for each brand separately
  const resolvedAdobeTokens = resolveReferences(adobeTokens, 'adobe');
  const resolvedFioTokens = resolveReferences(fioTokens, 'fio');
  
  // Merge both resolved sets preserving brand-specific tokens
  const finalTokens = { ...resolvedAdobeTokens };
  
  // Add FIO-specific tokens
  Object.keys(resolvedFioTokens).forEach(key => {
    if (key.startsWith('Brand.fio.')) {
      finalTokens[key] = resolvedFioTokens[key];
    }
  });
  
  // Generate CSS
  const css = generateCSS(finalTokens);
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Write CSS file
  fs.writeFileSync(OUTPUT_FILE, css, 'utf-8');
  
  console.log(`✅ Tokens built successfully! Generated ${Object.keys(finalTokens).length} variables.`);
  console.log(`📄 Output: ${OUTPUT_FILE}`);
}

/**
 * Watch for changes in token files
 */
function watchTokens(): void {
  console.log('👀 Watching for token changes...');
  
  const watcher = chokidar.watch(path.join(TOKENS_DIR, '*.json'), {
    persistent: true,
    ignoreInitial: false,
  });
  
  let debounceTimer: NodeJS.Timeout;
  
  watcher.on('all', (event, filePath) => {
    if (event === 'add' || event === 'change') {
      console.log(`📝 Token file changed: ${path.basename(filePath)}`);
      
      // Debounce builds to avoid multiple rapid builds
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        buildTokens();
      }, 100);
    }
  });
  
  watcher.on('error', (error) => {
    console.error('Watcher error:', error);
  });
}

// Main execution
function main(): void {
  const isWatch = process.argv.includes('--watch');
  
  if (isWatch) {
    watchTokens();
  } else {
    buildTokens();
  }
}

main();

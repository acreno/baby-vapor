#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

const ICONS_DIR = path.join(process.cwd(), 'theme/icons');
const OUTPUT_DIR = path.join(process.cwd(), 'src/icons');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.tsx');

/**
 * Convert kebab-case to PascalCase for component names
 */
function toPascalCase(str: string): string {
  return str
    .split(/[-._]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

/**
 * Convert file name to icon name (remove size prefix if exists)
 */
function getIconName(fileName: string): string {
  const baseName = fileName.replace(/\.svg$/, '');
  // Remove size prefix if it exists (e.g., "16.fill.archive" -> "fill.archive")
  // Also remove " copy" suffixes to avoid duplicate names
  return baseName.replace(/^\d+\./, '').replace(/\s+copy$/i, '');
}

/**
 * Generate React component from SVG
 */
function generateComponent(svgContent: string, componentName: string, iconName: string): string {
  // Extract viewBox and paths from SVG
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Extract all paths and other elements
  const pathsMatch = svgContent.match(/<path[^>]*>/g) || [];
  const circlesMatch = svgContent.match(/<circle[^>]*>/g) || [];
  const rectsMatch = svgContent.match(/<rect[^>]*>/g) || [];
  const linesMatch = svgContent.match(/<line[^>]*>/g) || [];
  
  const allElements = [...pathsMatch, ...circlesMatch, ...rectsMatch, ...linesMatch];
  
  // Clean up elements - remove hardcoded fill colors and add currentColor
  const cleanedElements = allElements.map(element => {
    return element
      .replace(/fill="[^"]*"/g, '') // Remove existing fill
      .replace(/stroke="[^"]*"/g, '') // Remove existing stroke
      .replace(/(<\w+)/, '$1 fill="currentColor"'); // Add currentColor
  });
  
  return `import React from 'react';

export interface ${componentName}Props {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    ${cleanedElements.join('\n    ')}
  </svg>
);

${componentName}.displayName = '${componentName}';

export default ${componentName};`;
}

/**
 * Build icon registry for the Icon component
 */
function generateIconRegistry(iconNames: string[]): string {
  const imports = iconNames.map(name => {
    const componentName = toPascalCase(name);
    return `import ${componentName} from './${componentName}';`;
  }).join('\n');
  
  const registryEntries = iconNames.map(name => {
    const componentName = toPascalCase(name);
    return `  '${name}': ${componentName},`;
  }).join('\n');
  
  const exportStatements = iconNames.map(name => {
    const componentName = toPascalCase(name);
    return `export { default as ${componentName} } from './${componentName}';`;
  }).join('\n');
  
  return `// Auto-generated icon components and registry
import React from 'react';

${imports}

// Icon registry for the Icon component
export const iconRegistry = {
${registryEntries}
} as const;

export type IconName = keyof typeof iconRegistry;

export interface IconProps {
  name: IconName;
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = iconRegistry[name];
  
  if (!IconComponent) {
    console.warn(\`Icon "\${name}" not found in registry\`);
    return null;
  }
  
  return <IconComponent {...props} />;
};

Icon.displayName = 'Icon';

// Export all individual icon components
${exportStatements}

export default Icon;`;
}

/**
 * Process a single SVG file
 */
function processIcon(filePath: string): { iconName: string; componentName: string } | null {
  try {
    const fileName = path.basename(filePath);
    const iconName = getIconName(fileName);
    const componentName = toPascalCase(iconName);
    
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    const componentCode = generateComponent(svgContent, componentName, iconName);
    
    const outputPath = path.join(OUTPUT_DIR, `${componentName}.tsx`);
    fs.writeFileSync(outputPath, componentCode, 'utf-8');
    
    return { iconName, componentName };
  } catch (error) {
    console.error(`Error processing icon ${filePath}:`, error);
    return null;
  }
}

/**
 * Build all icons and generate registry
 */
function buildIcons(): void {
  console.log('🎨 Building icons...');
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Get all SVG files and filter out problematic ones
  const allSvgFiles = fs.readdirSync(ICONS_DIR)
    .filter(file => 
      file.endsWith('.svg') && 
      !file.includes(' copy') && // Exclude files with ' copy' in name
      !file.includes('undefined') // Exclude files with 'undefined' in name
    );
  
  // Remove duplicate naming conflicts (prefer dot notation over hyphens)
  const uniqueFiles = new Set<string>();
  const filesByIconName = new Map<string, string[]>();
  
  // Group files by their icon name
  allSvgFiles.forEach(file => {
    const iconName = getIconName(file);
    if (!filesByIconName.has(iconName)) {
      filesByIconName.set(iconName, []);
    }
    filesByIconName.get(iconName)!.push(file);
  });
  
  // For each icon name, prefer files with dots over hyphens
  filesByIconName.forEach((files, iconName) => {
    if (files.length === 1) {
      uniqueFiles.add(files[0]);
    } else {
      // Prefer dot notation over hyphen notation
      const dotFile = files.find(f => !f.includes('-') || f.split('-').length < f.split('.').length);
      const selectedFile = dotFile || files[0];
      uniqueFiles.add(selectedFile);
      console.log(`⚠️  Duplicate icon names detected for "${iconName}". Selected: ${selectedFile}`);
    }
  });
  
  const svgFiles = Array.from(uniqueFiles)
    .map(file => path.join(ICONS_DIR, file));
  
  if (svgFiles.length === 0) {
    console.warn('⚠️  No SVG files found in', ICONS_DIR);
    return;
  }
  
  // Process each icon with component name deduplication
  const processedIcons: Array<{ iconName: string; componentName: string }> = [];
  const usedComponentNames = new Set<string>();
  
  for (const filePath of svgFiles) {
    const fileName = path.basename(filePath);
    const iconName = getIconName(fileName);
    const componentName = toPascalCase(iconName);
    
    // Skip if component name already used
    if (usedComponentNames.has(componentName)) {
      console.log(`⚠️  Skipping duplicate component name: ${componentName} (from ${fileName})`);
      continue;
    }
    
    const result = processIcon(filePath);
    if (result) {
      processedIcons.push(result);
      usedComponentNames.add(componentName);
    }
  }
  
  // Generate index file with registry
  // Remove duplicates using Set
  const uniqueIconNames = Array.from(new Set(processedIcons.map(icon => icon.iconName)));
  const indexContent = generateIconRegistry(uniqueIconNames);
  fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');
  
  console.log(`✅ Icons built successfully! Generated ${processedIcons.length} components.`);
  console.log(`📄 Output: ${OUTPUT_DIR}`);
  console.log(`📋 Available icons: ${uniqueIconNames.join(', ')}`);
}

/**
 * Watch for changes in icon files
 */
function watchIcons(): void {
  console.log('👀 Watching for icon changes...');
  
  const watcher = chokidar.watch(path.join(ICONS_DIR, '*.svg'), {
    persistent: true,
    ignoreInitial: false,
  });
  
  let debounceTimer: NodeJS.Timeout;
  
  watcher.on('all', (event, filePath) => {
    if (event === 'add' || event === 'change' || event === 'unlink') {
      console.log(`🎨 Icon file ${event}: ${path.basename(filePath)}`);
      
      // Debounce builds to avoid multiple rapid builds
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        buildIcons();
      }, 100);
    }
  });
  
  watcher.on('error', (error) => {
    console.error('Watcher error:', error);
  });
}

/**
 * Main execution
 */
function main(): void {
  const isWatch = process.argv.includes('--watch');
  
  if (isWatch) {
    watchIcons();
  } else {
    buildIcons();
  }
}

main();

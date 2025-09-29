# Baby Vapor - Design System Playground

A small React + TypeScript + Tailwind repo that demonstrates a complete design system workflow with:

- **Token Studio JSON parsing** with `{...}` reference resolution
- **CSS variables generation** for light/dark themes and adobe/fio brands  
- **SVG to React component generation** with TypeScript
- **Live playground** for testing theme + brand switching

## 🏗️ Project Structure

```
baby-vapor/
├── theme/                    # Input design tokens & assets
│   ├── tokens/              # Tokens Studio JSON files
│   │   ├── global.json      # Base scales (colors, typography, spacing)
│   │   ├── theme.light.json # Light theme semantic tokens
│   │   ├── theme.dark.json  # Dark theme semantic tokens
│   │   ├── brand.adobe.json # Adobe brand tokens
│   │   └── brand.fio.json   # FIO brand tokens
│   └── icons/               # SVG icon source files
├── scripts/                 # Build automation
│   ├── build-tokens.ts      # Parse tokens → CSS variables
│   └── build-icons.ts       # SVG → React components
├── src/
│   ├── styles/
│   │   ├── tokens.css       # Generated CSS variables
│   │   └── index.css        # Global styles + Tailwind
│   ├── icons/               # Generated React icon components
│   ├── components/
│   │   └── ThemeBrandProvider.tsx # Theme/brand context
│   ├── App.tsx              # Playground demo
│   └── main.tsx
└── tailwind.config.ts       # CSS variables mapped to Tailwind
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Build Assets & Start Dev Server

```bash
pnpm dev
```

This runs:
- Token build in watch mode
- Icon build in watch mode  
- Vite dev server

### 3. View the Playground

Open [http://localhost:3000](http://localhost:3000) to see the live playground with:

- Theme switcher (light/dark)
- Brand switcher (adobe/fio)
- Color swatches showing live CSS variables
- Typography scale examples
- Icon showcase
- Interactive button components

## 📝 Available Scripts

```bash
pnpm dev           # Start dev server with watchers
pnpm build         # Production build
pnpm build:tokens  # Build tokens once
pnpm watch:tokens  # Watch tokens for changes
pnpm build:icons   # Build icons once
```

## 🎨 How It Works

### Token Processing

1. **Load JSON files** from `theme/tokens/`
2. **Merge with prefixes**: `Global.*`, `Theme.light.*`, `Theme.dark.*`, `Brand.adobe.*`, `Brand.fio.*`
3. **Resolve references** like `{Palette.Grey.80}` and `{Colors.Brand.Primary}`
4. **Generate CSS variables** with proper scoping:
   - `:root` - Global + Light theme + Adobe brand (defaults)
   - `[data-theme="dark"]` - Dark theme overrides
   - `[data-brand="fio"]` - FIO brand overrides

### Icon Processing

1. **Scan SVG files** in `theme/icons/`
2. **Generate React components** with TypeScript props
3. **Create registry** for `<Icon name="..." />` usage
4. **Export individual components** for direct import

### Theme/Brand Switching

- **Data attributes** on `<html>`: `data-theme="dark"` `data-brand="fio"`
- **CSS cascading** automatically applies the right variables
- **localStorage persistence** remembers user preferences
- **System preference detection** for initial theme

## 🎯 Key Features

### ✅ Token Resolution
- Handles nested references like `{Colors.Brand.Primary}` → `{Palette.TintAlpha.Blue.100}`
- Supports cross-references between token files
- Logs warnings for missing tokens

### ✅ CSS Variable Generation
- Semantic naming: `--color-bg-base`, `--font-sizes-90`
- Proper scoping with data attributes
- Preserves complex values like gradients

### ✅ Icon Components
- Type-safe icon names with autocomplete
- Consistent props interface (`size`, `color`, `className`)
- `currentColor` support for theme-aware icons

### ✅ Live Hot Reloading
- Token changes update CSS instantly
- Icon changes regenerate components
- React Fast Refresh for UI changes

## 🧩 Usage Examples

### Using Tokens in Components

```tsx
// Via Tailwind utilities
<div className="bg-bg-base text-text-primary border-border-secondary">

// Via CSS variables
<div style={{ backgroundColor: 'var(--color-brand-primary)' }}>
```

### Using Icons

```tsx
import { Icon } from './icons';

// Via registry
<Icon name="fill.archive" size={24} className="text-icon-primary" />

// Direct import
import { FillArchive } from './icons';
<FillArchive size={24} color="currentColor" />
```

### Theme/Brand Switching

```tsx
import { useThemeBrand } from './components/ThemeBrandProvider';

const { theme, brand, setTheme, setBrand } = useThemeBrand();

<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
  Switch Theme
</button>
```

## 🔧 Configuration

### Adding New Tokens

1. Add to appropriate JSON file in `theme/tokens/`
2. Use `{Reference.Syntax}` for token references
3. Run `pnpm build:tokens` or save during `pnpm dev`

### Adding New Icons

1. Drop SVG files into `theme/icons/`
2. Run `pnpm build:icons` or save during `pnpm dev`
3. Use `<Icon name="your-icon-name" />` in components

### Customizing Tailwind

Edit `tailwind.config.ts` to:
- Map more CSS variables to utilities
- Add custom component classes
- Extend the design system

## 🎨 Design System Philosophy

This setup demonstrates a **token-first approach** where:

- **Design decisions live in JSON** (easy for designers to edit)
- **Code consumes tokens** via CSS variables (consistent & maintainable)  
- **Build process bridges the gap** (automated & reliable)
- **Runtime switching works seamlessly** (great UX)

Perfect for design systems that need to support multiple themes, brands, or customization levels while maintaining a single codebase.


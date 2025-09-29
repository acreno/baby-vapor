import React from 'react';
import { ThemeBrandProvider, useThemeBrand, Theme, Brand } from './components/ThemeBrandProvider';
import { Icon } from './icons/index';

// Color swatch component
interface ColorSwatchProps {
  name: string;
  variable: string;
  className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, variable, className = '' }) => {
  const style = { backgroundColor: `var(${variable})` };
  
  return (
    <div className={`flex items-center gap-3 ${className}`} title={`${name}: ${variable}`}>
      <div 
        className="w-8 h-8 rounded-full flex-shrink-0" 
        style={style}
      />
      <span className="text-sm font-medium text-text-primary">
        {name}
      </span>
    </div>
  );
};

// Button component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'secondary', 
  children, 
  onClick,
  className = '' 
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    destructive: 'btn-destructive',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Theme and brand controls
const ThemeControls: React.FC = () => {
  const { theme, brand, setTheme, setBrand } = useThemeBrand();
  
  return (
    <div className="card">
      <div className="flex gap-8">
        <div>
          <label className="block text-90 font-medium mb-2">Theme</label>
          <div className="flex gap-2">
            <Button
              variant={theme === 'light' ? 'primary' : 'secondary'}
              onClick={() => setTheme('light')}
            >
              Light
            </Button>
            <Button
              variant={theme === 'dark' ? 'primary' : 'secondary'}
              onClick={() => setTheme('dark')}
            >
              Dark
            </Button>
          </div>
        </div>
        
        <div>
          <label className="block text-90 font-medium mb-2">Brand</label>
          <div className="flex gap-2">
            <Button
              variant={brand === 'adobe' ? 'primary' : 'secondary'}
              onClick={() => setBrand('adobe')}
            >
              Adobe
            </Button>
            <Button
              variant={brand === 'fio' ? 'primary' : 'secondary'}
              onClick={() => setBrand('fio')}
            >
              FIO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Color swatches demo
const ColorSwatches: React.FC = () => {
  const swatchCategories = {
    background: [
      { name: 'primary', variable: '--color-background-primary' },
      { name: 'secondary', variable: '--color-background-secondary' },
      { name: 'tertiary', variable: '--color-background-tertiary' },
      { name: 'elevated', variable: '--color-background-elevated' },
      { name: 'inverse', variable: '--color-background-inverse' },
    ],
    text: [
      { name: 'primary', variable: '--color-text-primary' },
      { name: 'secondary', variable: '--color-text-secondary' },
      { name: 'tertiary', variable: '--color-text-tertiary' },
      { name: 'inverse', variable: '--color-text-inverse' },
      { name: 'link', variable: '--color-brand-enabled' },
      { name: 'link-hover', variable: '--color-brand-light' },
    ],
    border: [
      { name: 'subtle', variable: '--color-border-subtle' },
      { name: 'default', variable: '--color-border-default' },
      { name: 'strong', variable: '--color-border-strong' },
      { name: 'inverse', variable: '--color-border-inverse' },
      { name: 'focus', variable: '--color-border-focus' },
    ],
    icon: [
      { name: 'primary', variable: '--color-icon-primary' },
      { name: 'secondary', variable: '--color-icon-secondary' },
      { name: 'inverse', variable: '--color-icon-inverse' },
      { name: 'accent', variable: '--color-brand-enabled' },
    ],
  };
  
  return (
    <div className="card">
      <div className="grid grid-cols-4 gap-8">
        {Object.entries(swatchCategories).map(([category, swatches]) => (
          <div key={category}>
            <h3 className="text-80 font-medium text-text-secondary mb-4 capitalize">{category}</h3>
            <div className="space-y-3">
              {swatches.map((swatch) => (
                <ColorSwatch
                  key={swatch.variable}
                  name={swatch.name}
                  variable={swatch.variable}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Button showcase
const ButtonShowcase: React.FC = () => {
  return (
    <div className="card">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
    </div>
  );
};

// Icons showcase
const IconsShowcase: React.FC = () => {
  // Sample of available icon names - showing a diverse selection
  const iconNames = [
    'fill.archive',
    'fill.heart',
    'fill.star',
    'fill.lightbulb',
    'fill.camera',
    'fill.folder.closed',
    'fill.person.circle',
    'fill.magnifyingglass',
    'outline.check.circle',
    'outline.chevron.right',
    'outline.cog',
    'outline.play',
    'outline.pause',
    'outline.share',
    'outline.edit',
    'outline.trash'
  ] as const;
  
  return (
    <div className="card">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
        {iconNames.map((name) => (
          <div key={name} className="flex flex-col items-center gap-2 p-2">
            <div className="w-comp-48 h-comp-48 flex items-center justify-center bg-bg-component rounded-4 border border-border-secondary">
              <Icon 
                name={name}
                size={24}
                className="text-icon-primary"
              />
            </div>
            <span className="text-60 text-center text-text-secondary">{name}</span>
          </div>
        ))}
      </div>
      
      {iconNames.length === 0 && (
        <div className="text-center py-8 text-text-secondary">
          <Icon name="fill.archive" size={48} className="mx-auto mb-2 opacity-50" />
          <p>No icons available yet. Run the build:icons script to generate them.</p>
        </div>
      )}
    </div>
  );
};

// Typography showcase
const TypographyShowcase: React.FC = () => {
  return (
    <div className="card">
      <div className="space-y-6">
        <div>
          <h1 className="text-400 font-semibold">Heading 400 - Semibold</h1>
          <h2 className="text-300 font-medium">Heading 300 - Medium</h2>
          <h3 className="text-200 font-regular">Heading 200 - Regular</h3>
        </div>
        
        <div className="space-y-2">
          <p className="text-90 font-regular text-text-body">
            Body text (90) - This is regular body text using the body font family.
          </p>
          <p className="text-80 font-regular text-text-secondary">
            Secondary text (80) - This is secondary text with reduced emphasis.
          </p>
          <p className="text-70 font-regular text-text-tertiary">
            Tertiary text (70) - This is tertiary text with minimal emphasis.
          </p>
        </div>
        
        <div>
          <a href="#" className="text-80 text-brand hover:text-brand-light transition-colors">
            Link example
          </a>
        </div>
      </div>
    </div>
  );
};

// Main playground component
const Playground: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-base p-8 pt-16">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="grid gap-6">
          <ThemeControls />
          <ColorSwatches />
          <ButtonShowcase />
          <TypographyShowcase />
          <IconsShowcase />
        </div>
        
        <footer className="text-center text-70 text-text-tertiary pt-8">
          <p>Built with Vite + React + TypeScript + Tailwind CSS</p>
          <p>Design tokens from Tokens Studio • Icons auto-generated from SVG</p>
        </footer>
      </div>
    </div>
  );
};

// Root App component
const App: React.FC = () => {
  return (
    <ThemeBrandProvider defaultTheme="light" defaultBrand="adobe">
      <Playground />
    </ThemeBrandProvider>
  );
};

export default App;

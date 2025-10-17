import React, { useState } from 'react';
import { ThemeBrandProvider, useThemeBrand } from './components/ThemeBrandProvider';
import { Icon } from './icons/index';
import { Button } from './components/Button';
import { Link } from './components/Link';
import { Checkbox } from './components/Checkbox';
import { Chip } from './components/Chip';
import { Tooltip } from './components/Tooltip';
import { Switch } from './components/Switch';
import { Slider } from './components/Slider';
import { TextField } from './components/TextField';
import ConcentricCornersPlayground from './pages/ConcentricCornersPlayground';

// Theme and brand controls
const ThemeControls: React.FC = () => {
  const { theme, brand, setTheme, setBrand } = useThemeBrand();
  
  return (
    <div className="card">
      <div className="flex items-center justify-between">
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
        
        <div className="text-70 font-normal text-text-secondary">
          Baby Vapor
        </div>
      </div>
    </div>
  );
};

// Button showcase - demonstrating all Figma variants
const ButtonShowcase: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">Button</h3>
      <div className="space-y-3">
        {/* First row */}
        <div className="flex items-center gap-3">
          <Button variant="primary" size="regular" shape="rectangular">
            Primary
          </Button>
          <Button variant="secondary" size="regular" shape="rectangular">
            Secondary
          </Button>
          <Button variant="tertiary" size="regular" shape="rectangular">
            Tertiary
          </Button>
          <Button variant="secure" size="regular" shape="rectangular">
            Secure
          </Button>
          <Button variant="destructive" size="regular" shape="rectangular">
            Destructive
          </Button>
        </div>

        {/* Second row */}
        <div className="flex items-center gap-3">
          <Button 
            variant="primary" 
            size="regular" 
            shape="rectangular"
            leftIcon="fill.star"
          >
            Primary
          </Button>
          <Button variant="primary" size="regular" shape="rectangular" disabled>
            Disabled
          </Button>
          <Button variant="secondary" size="regular" shape="rectangular" loading>
            Loading
          </Button>
          <Button variant="secondary" size="small" shape="rectangular">
            Small
          </Button>
          <Button 
            variant="destructive" 
            size="small" 
            shape="rounded"
            leftIcon="outline.trash"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

// Link showcase - demonstrating all Figma variants
const LinkShowcase: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">Link</h3>
      <div className="flex items-center gap-3">
        <Link href="#" size="default">
          Default Link
        </Link>
        <Link href="#" size="default" rightIcon="outline.arrow.right">
          Continue
        </Link>
        <Link href="#" size="small">
          Small Link
        </Link>
      </div>
    </div>
  );
};

// Checkbox showcase - demonstrating all Figma variants
const CheckboxShowcase: React.FC = () => {
  const [checked, setChecked] = useState(true);
  
  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">Checkbox</h3>
      <div className="flex items-center gap-3">
        <Checkbox 
          labelPosition="none"
        />
        <Checkbox 
          label="Checked option" 
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Checkbox 
          label="Disabled" 
          disabled
        />
      </div>
    </div>
  );
};

// Chip showcase - demonstrating all Figma variants
const ChipShowcase: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">Chip</h3>
      <div className="space-y-3">
        {/* Fill style */}
        <div className="flex items-center gap-3 flex-wrap">
          <Chip variant="fill" color="default">Default</Chip>
          <Chip variant="fill" color="blue">Blue</Chip>
          <Chip variant="fill" color="green">Green</Chip>
          <Chip variant="fill" color="purple">Purple</Chip>
          <Chip variant="fill" color="red">Red</Chip>
          <Chip variant="fill" color="orange">Orange</Chip>
        </div>
        
        {/* Outline style */}
        <div className="flex items-center gap-3 flex-wrap">
          <Chip variant="outline" color="default">Default</Chip>
          <Chip variant="outline" color="blue">Blue</Chip>
          <Chip variant="outline" color="green">Green</Chip>
          <Chip variant="outline" color="purple">Purple</Chip>
          <Chip variant="outline" color="red">Red</Chip>
          <Chip variant="outline" color="orange">Orange</Chip>
        </div>
        
        {/* With icons and sizes */}
        <div className="flex items-center gap-3 flex-wrap">
          <Chip variant="fill" color="blue" leftIcon="fill.star">With Icon</Chip>
          <Chip variant="outline" color="green" size="small">Small</Chip>
          <Chip variant="fill" color="default" disabled>Disabled</Chip>
        </div>
      </div>
    </div>
  );
};

// Tooltip showcase - demonstrating all Figma variants
const TooltipShowcase: React.FC = () => {
  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">Tooltip</h3>
      <div className="flex items-center gap-3">
        <Tooltip content="This is a tooltip" position="top">
          <Button variant="secondary" size="small">Hover me (top)</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <Button variant="secondary" size="small">Hover me (bottom)</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <Button variant="secondary" size="small">Hover me (left)</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <Button variant="secondary" size="small">Hover me (right)</Button>
        </Tooltip>
      </div>
    </div>
  );
};

// Switch showcase - demonstrating all Figma variants
const SwitchShowcase: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">Switch</h3>
      <div className="flex items-center gap-3">
        <Switch 
          label="Unchecked" 
          labelPosition="left"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
        />
        <Switch 
          label="Checked" 
          labelPosition="left"
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
        />
        <Switch 
          labelPosition="none"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
        />
        <Switch 
          label="Disabled" 
          labelPosition="left"
          disabled
        />
      </div>
    </div>
  );
};

// Slider showcase - demonstrating all Figma variants
const SliderShowcase: React.FC = () => {
  const [value1, setValue1] = useState(44);
  const [value2, setValue2] = useState(75);
  const [value3, setValue3] = useState(95);
  const [value4, setValue4] = useState(20);
  const [value5, setValue5] = useState(50);
  const [value6, setValue6] = useState(75);

  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">Slider</h3>
      <div className="space-y-6">
        {/* Default slider with icons and input */}
        <div className="max-w-md">
          <p className="text-60 text-text-secondary mb-2">Default</p>
          <Slider 
            value={value1}
            onChange={setValue1}
            showIconBefore={true}
            showIconAfter={true}
            iconBefore="fill.magnifyingglass"
            iconAfter="fill.magnifyingglass"
            showInput={true}
          />
        </div>
        
        {/* Slider with different value */}
        <div className="max-w-md">
          <p className="text-60 text-text-secondary mb-2">With Icons</p>
          <Slider 
            value={value2}
            onChange={setValue2}
            showIconBefore={true}
            showIconAfter={true}
            iconBefore="fill.magnifyingglass"
            iconAfter="fill.magnifyingglass"
            showInput={true}
          />
        </div>
        
        {/* High value */}
        <div className="max-w-md">
          <p className="text-60 text-text-secondary mb-2">High Value</p>
          <Slider 
            value={value3}
            onChange={setValue3}
            showIconBefore={true}
            showIconAfter={true}
            iconBefore="fill.magnifyingglass"
            iconAfter="fill.magnifyingglass"
            showInput={true}
          />
        </div>
        
        {/* Disabled */}
        <div className="max-w-md">
          <p className="text-60 text-text-secondary mb-2">Disabled</p>
          <Slider 
            value={value4}
            onChange={setValue4}
            showIconBefore={true}
            showIconAfter={true}
            iconBefore="fill.magnifyingglass"
            iconAfter="fill.magnifyingglass"
            showInput={true}
            disabled
          />
        </div>
        
        {/* Segmented slider */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Segmented</p>
          <Slider 
            value={value5}
            onChange={setValue5}
            showIconBefore={false}
            showIconAfter={false}
            showInput={false}
            segmented={true}
            segments={5}
          />
        </div>
        
        {/* Segmented slider - higher value */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Segmented - High Value</p>
          <Slider 
            value={value6}
            onChange={setValue6}
            showIconBefore={false}
            showIconAfter={false}
            showInput={false}
            segmented={true}
            segments={5}
          />
        </div>
      </div>
    </div>
  );
};

// TextField showcase - demonstrating all Figma variants
const TextFieldShowcase: React.FC = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('example@email.com');
  const [value3, setValue3] = useState('Valid input');
  const [value4, setValue4] = useState('Invalid input');

  return (
    <div className="card">
      <h3 className="text-80 font-medium text-text-secondary mb-4">TextField</h3>
      <div className="space-y-6">
        {/* Medium size - Default */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Medium - Default</p>
          <TextField 
            size="medium"
            placeholder="Placeholder"
            leftIcon="fill.magnifyingglass"
            rightIcon="fill.x.circle"
            shortcut="Kg"
            hint="Hint"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            showClearButton={true}
            onClear={() => setValue1('')}
          />
        </div>

        {/* Medium size - Filled */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Medium - Filled</p>
          <TextField 
            size="medium"
            placeholder="Email"
            leftIcon="fill.magnifyingglass"
            shortcut="⌘K"
            hint="Enter your email address"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            showClearButton={true}
            onClear={() => setValue2('')}
          />
        </div>

        {/* Medium size - Positive */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Medium - Success</p>
          <TextField 
            size="medium"
            variant="positive"
            placeholder="Placeholder"
            leftIcon="fill.magnifyingglass"
            shortcut="Kg"
            hint="Hint Message"
            value={value3}
            onChange={(e) => setValue3(e.target.value)}
            showClearButton={true}
            onClear={() => setValue3('')}
          />
        </div>

        {/* Medium size - Negative */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Medium - Error</p>
          <TextField 
            size="medium"
            variant="negative"
            placeholder="Placeholder"
            leftIcon="fill.magnifyingglass"
            shortcut="Kg"
            hint="Hint Message"
            value={value4}
            onChange={(e) => setValue4(e.target.value)}
            showClearButton={true}
            onClear={() => setValue4('')}
          />
        </div>

        {/* Small size */}
        <div className="max-w-xs">
          <p className="text-60 text-text-secondary mb-2">Small - Default</p>
          <TextField 
            size="small"
            placeholder="Search..."
            leftIcon="fill.magnifyingglass"
            hint="Search hint"
          />
        </div>

        {/* Disabled */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Disabled</p>
          <TextField 
            size="medium"
            placeholder="Placeholder"
            leftIcon="fill.magnifyingglass"
            hint="This field is disabled"
            disabled
          />
        </div>

        {/* Read-only */}
        <div className="max-w-sm">
          <p className="text-60 text-text-secondary mb-2">Read-only</p>
          <TextField 
            size="medium"
            value="Read-only value"
            readOnly
          />
        </div>
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

// Main design system showcase component
const DesignSystemShowcase: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid gap-6">
        <ThemeControls />
        <ButtonShowcase />
        <LinkShowcase />
        <CheckboxShowcase />
        <SwitchShowcase />
        <SliderShowcase />
        <TextFieldShowcase />
        <ChipShowcase />
        <TooltipShowcase />
        <TypographyShowcase />
        <IconsShowcase />
      </div>
      
      <footer className="text-center text-70 text-text-tertiary pt-8">
        <p>Built with Vite + React + TypeScript + Tailwind CSS</p>
        <p>Design tokens from Tokens Studio • Icons auto-generated from SVG</p>
      </footer>
    </div>
  );
};

// Root App component
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'showcase' | 'playground'>('showcase');

  return (
    <ThemeBrandProvider defaultTheme="light" defaultBrand="fio">
      <div className="min-h-screen bg-bg-base">
        {/* Navigation */}
        <nav className="border-b border-border-secondary bg-bg-component sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center gap-4">
              <h1 className="text-100 font-semibold mr-8">Baby Vapor</h1>
              <Button
                size="small"
                variant={currentPage === 'showcase' ? 'primary' : 'secondary'}
                onClick={() => setCurrentPage('showcase')}
              >
                Component Showcase
              </Button>
              <Button
                size="small"
                variant={currentPage === 'playground' ? 'primary' : 'secondary'}
                onClick={() => setCurrentPage('playground')}
              >
                Concentric Corners
              </Button>
            </div>
          </div>
        </nav>

        {/* Content */}
        {currentPage === 'showcase' ? (
          <div className="p-8 pt-16">
            <div className="max-w-6xl mx-auto">
              <DesignSystemShowcase />
            </div>
          </div>
        ) : (
          <ConcentricCornersPlayground />
        )}
      </div>
    </ThemeBrandProvider>
  );
};

export default App;

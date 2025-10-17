import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export type Theme = 'light' | 'dark';
export type Brand = 'adobe' | 'fio';

interface ThemeBrandContextType {
  theme: Theme;
  brand: Brand;
  setTheme: (theme: Theme) => void;
  setBrand: (brand: Brand) => void;
}

interface ThemeBrandProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  defaultBrand?: Brand;
}

// Create context
const ThemeBrandContext = createContext<ThemeBrandContextType | undefined>(undefined);

// Provider component
export const ThemeBrandProvider: React.FC<ThemeBrandProviderProps> = ({
  children,
  defaultTheme = 'light',
  defaultBrand = 'fio',
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [brand, setBrand] = useState<Brand>(defaultBrand);

  // Apply theme and brand classes to document root
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme and brand classes
    root.classList.remove('theme-light', 'theme-dark', 'brand-adobe', 'brand-fio');
    
    // Add current theme and brand classes
    root.classList.add(`theme-${theme}`, `brand-${brand}`);
    
    // Set data attributes for CSS custom properties
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-brand', brand);
  }, [theme, brand]);

  const value: ThemeBrandContextType = {
    theme,
    brand,
    setTheme,
    setBrand,
  };

  return (
    <ThemeBrandContext.Provider value={value}>
      {children}
    </ThemeBrandContext.Provider>
  );
};

// Hook to use the theme and brand context
export const useThemeBrand = (): ThemeBrandContextType => {
  const context = useContext(ThemeBrandContext);
  if (context === undefined) {
    throw new Error('useThemeBrand must be used within a ThemeBrandProvider');
  }
  return context;
};

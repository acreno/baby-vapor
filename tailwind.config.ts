import type { Config } from 'tailwindcss'

export default {
  content: ["index.html", "src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      // Base colors
      transparent: 'transparent',
      current: 'currentColor',
      
      // Background colors
      bg: {
        base: "var(--color-background-base)",
        panel: "var(--color-background-panel)",
        primary: "var(--color-background-primary)",
        secondary: "var(--color-background-secondary)",
        tertiary: "var(--color-background-tertiary)",
        card: "var(--color-background-card)",
        component: "var(--color-background-component)",
      },
      
      // Text colors
      text: {
        primary: "var(--color-text-primary)",
        body: "var(--color-text-body)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        link: "var(--color-text-link)",
      },
      
      // Brand colors
      brand: {
        DEFAULT: "var(--color-brand-enabled)",
        primary: "var(--color-brand-primary)",
        light: "var(--color-brand-light)",
        dark: "var(--color-brand-dark)",
        darker: "var(--color-brand-darker)",
        contrast: "var(--color-brand-text-contrast)",
      },
      
      // Icon colors
      icon: {
        primary: "var(--color-icon-primary)",
        secondary: "var(--color-icon-secondary)",
      },
      
      // Border colors
      border: {
        primary: "var(--color-border-primary)",
        secondary: "var(--color-border-secondary)",
        tertiary: "var(--color-border-tertiary)",
      },
      
      // Interactive colors
      interactive: {
        hover: "var(--color-bg-interactive-hover)",
        activated: "var(--color-bg-interactive-activated)",
        selected: "var(--color-bg-interactive-selected)",
        pressed: "var(--color-bg-interactive-pressed)",
        disabled: "var(--color-bg-interactive-disabled)",
      },
      
      // Alert colors
      alert: {
        success: "var(--color-alert-success-100)",
        notice: "var(--color-alert-notice-100)",
        error: "var(--color-alert-error-100)",
        informative: "var(--color-alert-informative-100)",
      },
      
      // Button colors
      button: {
        primary: {
          bg: "var(--color-components-button-primary-background)",
          text: "var(--color-components-button-primary-text)",
          icon: "var(--color-components-button-primary-icon)",
        },
        secondary: {
          bg: "var(--color-components-button-secondary-background)",
          text: "var(--color-components-button-secondary-text)",
          icon: "var(--color-components-button-secondary-icon)",
        },
        destructive: {
          bg: "var(--color-components-button-destructive-background)",
          text: "var(--color-components-button-destructive-text)",
          icon: "var(--color-components-button-destructive-icon)",
        },
      },
    },
    
    extend: {
      // Typography scale
      fontSize: {
        '50': "var(--font-sizes-50)",
        '60': "var(--font-sizes-60)",
        '70': "var(--font-sizes-70)",
        '80': "var(--font-sizes-80)",
        '90': "var(--font-sizes-90)",
        '95': "var(--font-sizes-95)",
        '100': "var(--font-sizes-100)",
        '200': "var(--font-sizes-200)",
        '300': "var(--font-sizes-300)",
        '400': "var(--font-sizes-400)",
        '500': "var(--font-sizes-500)",
        '600': "var(--font-sizes-600)",
        '700': "var(--font-sizes-700)",
        '800': "var(--font-sizes-800)",
        '800-2': "var(--font-sizes-800-2)",
      },
      
      // Line heights
      lineHeight: {
        '50': "var(--line-heights-50)",
        '100': "var(--line-heights-100)",
        '200': "var(--line-heights-200)",
        '250': "var(--line-heights-250)",
        '300': "var(--line-heights-300)",
        '400': "var(--line-heights-400)",
      },
      
      // Font weights
      fontWeight: {
        regular: "var(--font-weights-regular)",
        medium: "var(--font-weights-medium)",
        semibold: "var(--font-weights-semi-bold)",
      },
      
      // Font families
      fontFamily: {
        body: "var(--fonts-body)",
        heading: "var(--fonts-heading)",
      },
      
      // Spacing scale
      spacing: {
        '0': "var(--spaces-0)",
        '1': "var(--spaces-1)",
        '2': "var(--spaces-2)",
        '4': "var(--spaces-4)",
        '6': "var(--spaces-6)",
        '8': "var(--spaces-8)",
        '12': "var(--spaces-12)",
        '16': "var(--spaces-16)",
        '24': "var(--spaces-24)",
        '32': "var(--spaces-32)",
        '48': "var(--spaces-48)",
        '64': "var(--spaces-64)",
      },
      
      // Border radius
      borderRadius: {
        '0': "var(--radii-0)",
        '2': "var(--radii-2)",
        '4': "var(--radii-4)",
        '6': "var(--radii-6)",
        '8': "var(--radii-8)",
        '16': "var(--radii-16)",
      },
      
      // Component sizes
      width: {
        'comp-8': "var(--component-sizes-8)",
        'comp-12': "var(--component-sizes-12)",
        'comp-16': "var(--component-sizes-16)",
        'comp-20': "var(--component-sizes-20)",
        'comp-24': "var(--component-sizes-24)",
        'comp-28': "var(--component-sizes-28)",
        'comp-32': "var(--component-sizes-32)",
        'comp-36': "var(--component-sizes-36)",
        'comp-40': "var(--component-sizes-40)",
        'comp-44': "var(--component-sizes-44)",
        'comp-48': "var(--component-sizes-48)",
        'comp-56': "var(--component-sizes-56)",
        'comp-64': "var(--component-sizes-64)",
        'comp-80': "var(--component-sizes-80)",
        'comp-88': "var(--component-sizes-88)",
        'comp-160': "var(--component-sizes-160)",
      },
      
      height: {
        'comp-8': "var(--component-sizes-8)",
        'comp-12': "var(--component-sizes-12)",
        'comp-16': "var(--component-sizes-16)",
        'comp-20': "var(--component-sizes-20)",
        'comp-24': "var(--component-sizes-24)",
        'comp-28': "var(--component-sizes-28)",
        'comp-32': "var(--component-sizes-32)",
        'comp-36': "var(--component-sizes-36)",
        'comp-40': "var(--component-sizes-40)",
        'comp-44': "var(--component-sizes-44)",
        'comp-48': "var(--component-sizes-48)",
        'comp-56': "var(--component-sizes-56)",
        'comp-64': "var(--component-sizes-64)",
        'comp-80': "var(--component-sizes-80)",
        'comp-88': "var(--component-sizes-88)",
        'comp-160': "var(--component-sizes-160)",
      },
      
      // Icon sizes
      size: {
        'icon-sm': "var(--icons-sm)",
        'icon-md': "var(--icons-md)",
        'icon-lg': "var(--icons-lg)",
      },
      
      // Box shadows
      boxShadow: {
        '2dp': "var(--shadows-2-dp)",
        '4dp': "var(--shadows-4-dp)",
        '8dp': "var(--shadows-8-dp)",
        '12dp': "var(--shadows-12-dp)",
        '16dp': "var(--shadows-16-dp)",
        '24dp': "var(--shadows-24-dp)",
        '32dp': "var(--shadows-32-dp)",
        'card-default': "var(--card-default)",
        'card-folder': "var(--card-folder)",
      },
      
      // Z-index scale
      zIndex: {
        negative: "var(--z-indices-negative)",
        base: "var(--z-indices-base)",
        panel: "var(--z-indices-panel)",
        resizer: "var(--z-indices-resizer)",
        auto: "var(--z-indices-auto)",
        overlay: "var(--z-indices-overlay)",
        sheet: "var(--z-indices-sheet)",
        modal: "var(--z-indices-modal)",
        popover: "var(--z-indices-popover)",
        toast: "var(--z-indices-toast)",
        tooltip: "var(--z-indices-tooltip)",
      },
      
      // Breakpoints
      screens: {
        'tablet': "var(--breakpoints-tablet)",
        'desktop': "var(--breakpoints-desktop)",
      },
      
      // Transition durations
      transitionDuration: {
        '100': "var(--transitions-durations-100)",
        '150': "var(--transitions-durations-150)",
        '200': "var(--transitions-durations-200)",
        '250': "var(--transitions-durations-250)",
        '300': "var(--transitions-durations-300)",
        '500': "var(--transitions-durations-500)",
      },
      
      // Transition timing functions
      transitionTimingFunction: {
        'linear': "var(--transitions-eases-linear)",
        'primary': "var(--transitions-eases-primary)",
        'fast-start': "var(--transitions-eases-fast-start)",
        'slow-start': "var(--transitions-eases-slow-start)",
        'ease-out': "var(--transitions-eases-ease-out)",
        'ease-in-out': "var(--transitions-eases-ease-in-out)",
      },
    },
  },
  plugins: [],
} satisfies Config

import React, { forwardRef, ReactNode } from 'react';
import { Icon, IconName } from '../icons/index';
import './Button.css';

// Button component types based on Figma design system
export type ButtonSize = 'small' | 'regular';
export type ButtonShape = 'rectangular' | 'rounded';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'tertiary-dimmed' | 'destructive' | 'secure';
export type ButtonState = 'default' | 'hover' | 'pressed' | 'focused' | 'disabled';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Button size - affects padding and icon size */
  size?: ButtonSize;
  /** Button shape - affects border radius */
  shape?: ButtonShape;
  /** Button visual variant */
  variant?: ButtonVariant;
  /** Button content */
  children?: ReactNode;
  /** Left icon name */
  leftIcon?: IconName;
  /** Right icon name */
  rightIcon?: IconName;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is loading */
  loading?: boolean;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Icon sizes for different button sizes
const buttonIconSizes = {
  small: 16,
  regular: 24,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  size = 'regular',
  shape = 'rectangular',
  variant = 'secondary',
  children,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  className = '',
  onClick,
  ...props
}, ref) => {
  // Handle click
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  // Icon size based on button size
  const iconSize = buttonIconSizes[size];

  // Combine all CSS classes
  const buttonClasses = [
    'vapor-button',
    `vapor-button--${size}`,
    `vapor-button--${shape}`,
    `vapor-button--${variant}`,
    disabled && 'vapor-button--disabled',
    loading && 'vapor-button--loading',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && !loading && (
        <Icon 
          name={leftIcon} 
          size={iconSize}
          className="vapor-button__left-icon"
        />
      )}
      
      {/* Loading Spinner */}
      {loading && (
        <div className="vapor-button__spinner" />
      )}
      
      {/* Button Text */}
      {children && (
        <span className="vapor-button__text">
          {children}
        </span>
      )}
      
      {/* Right Icon */}
      {rightIcon && !loading && (
        <Icon 
          name={rightIcon} 
          size={iconSize}
          className="vapor-button__right-icon"
        />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

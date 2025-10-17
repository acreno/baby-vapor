import React, { forwardRef, ReactNode } from 'react';
import { Icon, IconName } from '../icons/index';
import './Chip.css';

// Chip component types based on Figma design system
export type ChipSize = 'small' | 'regular';
export type ChipStyle = 'fill' | 'outline';
export type ChipColor = 
  | 'default' | 'blue' | 'green' | 'teal' | 'purple' 
  | 'pink' | 'red' | 'orange' | 'yellow' | 'lime' 
  | 'aqua' | 'coral' | 'maroon';

export interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Chip size */
  size?: ChipSize;
  /** Chip style variant */
  variant?: ChipStyle;
  /** Chip color */
  color?: ChipColor;
  /** Chip content */
  children?: ReactNode;
  /** Left icon name */
  leftIcon?: IconName;
  /** Right icon name */
  rightIcon?: IconName;
  /** Whether chip is disabled */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(({
  size = 'regular',
  variant = 'fill',
  color = 'default',
  children,
  leftIcon,
  rightIcon,
  disabled = false,
  className = '',
  onClick,
  ...props
}, ref) => {
  // Handle click
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  // Combine all CSS classes
  const chipClasses = [
    'vapor-chip',
    `vapor-chip--${size}`,
    `vapor-chip--${variant}`,
    `vapor-chip--${color}`,
    disabled && 'vapor-chip--disabled',
    onClick && !disabled && 'vapor-chip--clickable',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={ref}
      className={chipClasses}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && (
        <Icon 
          name={leftIcon} 
          size={16}
          className="vapor-chip__left-icon"
        />
      )}
      
      {/* Chip Label */}
      {children && (
        <span className="vapor-chip__label">
          {children}
        </span>
      )}
      
      {/* Right Icon */}
      {rightIcon && (
        <Icon 
          name={rightIcon} 
          size={16}
          className="vapor-chip__right-icon"
        />
      )}
    </div>
  );
});

Chip.displayName = 'Chip';

export default Chip;

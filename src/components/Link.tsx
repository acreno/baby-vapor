import React, { forwardRef, ReactNode } from 'react';
import { Icon, IconName } from '../icons/index';
import './Link.css';

// Link component types based on Figma design system
export type LinkSize = 'small' | 'default';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'size'> {
  /** Link size - affects font size and icon size */
  size?: LinkSize;
  /** Link content */
  children?: ReactNode;
  /** Left icon name */
  leftIcon?: IconName;
  /** Right icon name */
  rightIcon?: IconName;
  /** Whether link is disabled */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** href for the link */
  href?: string;
}

// Icon sizes for different link sizes
const linkIconSizes = {
  small: 16,
  default: 24,
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  size = 'default',
  children,
  leftIcon,
  rightIcon,
  disabled = false,
  className = '',
  onClick,
  href = '#',
  ...props
}, ref) => {
  // Handle click
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  // Icon size based on link size
  const iconSize = linkIconSizes[size];

  // Combine all CSS classes
  const linkClasses = [
    'vapor-link',
    `vapor-link--${size}`,
    disabled && 'vapor-link--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <a
      ref={ref}
      className={linkClasses}
      href={disabled ? undefined : href}
      onClick={handleClick}
      aria-disabled={disabled}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && (
        <Icon 
          name={leftIcon} 
          size={iconSize}
          className="vapor-link__left-icon"
        />
      )}
      
      {/* Link Text */}
      {children && (
        <span className="vapor-link__text">
          {children}
        </span>
      )}
      
      {/* Right Icon */}
      {rightIcon && (
        <Icon 
          name={rightIcon} 
          size={iconSize}
          className="vapor-link__right-icon"
        />
      )}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;

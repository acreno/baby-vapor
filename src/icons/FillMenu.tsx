import React from 'react';

export interface FillMenuProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillMenu: React.FC<FillMenuProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M3 3.75C3 3.33579 3.33579 3 3.75 3H12.25C12.6642 3 13 3.33579 13 3.75C13 4.16421 12.6642 4.5 12.25 4.5H3.75C3.33579 4.5 3 4.16421 3 3.75Z" />
    <path fill="currentColor" d="M3 11.75C3 11.3358 3.33579 11 3.75 11H12.25C12.6642 11 13 11.3358 13 11.75C13 12.1642 12.6642 12.5 12.25 12.5H3.75C3.33579 12.5 3 12.1642 3 11.75Z" />
    <path fill="currentColor" d="M3.75 7C3.33579 7 3 7.33579 3 7.75C3 8.16421 3.33579 8.5 3.75 8.5H12.25C12.6642 8.5 13 8.16421 13 7.75C13 7.33579 12.6642 7 12.25 7H3.75Z" />
  </svg>
);

FillMenu.displayName = 'FillMenu';

export default FillMenu;
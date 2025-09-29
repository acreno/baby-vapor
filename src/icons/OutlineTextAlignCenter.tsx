import React from 'react';

export interface OutlineTextAlignCenterProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTextAlignCenter: React.FC<OutlineTextAlignCenterProps> = ({ 
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
    <path fill="currentColor" d="M4 11.75C4 11.3358 4.33579 11 4.75 11H11.25C11.6642 11 12 11.3358 12 11.75C12 12.1642 11.6642 12.5 11.25 12.5H4.75C4.33579 12.5 4 12.1642 4 11.75Z" />
    <path fill="currentColor" d="M2.75 7C2.33579 7 2 7.33579 2 7.75C2 8.16421 2.33579 8.5 2.75 8.5H13.25C13.6642 8.5 14 8.16421 14 7.75C14 7.33579 13.6642 7 13.25 7H2.75Z" />
  </svg>
);

OutlineTextAlignCenter.displayName = 'OutlineTextAlignCenter';

export default OutlineTextAlignCenter;
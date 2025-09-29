import React from 'react';

export interface FillComposeRectangleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillComposeRectangle: React.FC<FillComposeRectangleProps> = ({ 
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
    <path fill="currentColor" d="M4 4V12H12V4H4ZM14 12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12Z" />
  </svg>
);

FillComposeRectangle.displayName = 'FillComposeRectangle';

export default FillComposeRectangle;
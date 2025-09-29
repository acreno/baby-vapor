import React from 'react';

export interface OutlineMinusProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineMinus: React.FC<OutlineMinusProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 7.58579 4.33579 7.25 4.75 7.25H11.25C11.6642 7.25 12 7.58579 12 8C12 8.41421 11.6642 8.75 11.25 8.75H4.75C4.33579 8.75 4 8.41421 4 8Z" />
  </svg>
);

OutlineMinus.displayName = 'OutlineMinus';

export default OutlineMinus;
import React from 'react';

export interface FillTextAlignLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillTextAlignLeft: React.FC<FillTextAlignLeftProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM4.75 10C4.33579 10 4 10.3358 4 10.75C4 11.1642 4.33579 11.5 4.75 11.5H9.25C9.66421 11.5 10 11.1642 10 10.75C10 10.3358 9.66421 10 9.25 10H4.75ZM4 4.75C4 4.33579 4.33579 4 4.75 4H9.25C9.66421 4 10 4.33579 10 4.75C10 5.16421 9.66421 5.5 9.25 5.5H4.75C4.33579 5.5 4 5.16421 4 4.75ZM4.75 7C4.33579 7 4 7.33579 4 7.75C4 8.16421 4.33579 8.5 4.75 8.5H11.25C11.6642 8.5 12 8.16421 12 7.75C12 7.33579 11.6642 7 11.25 7H4.75Z" />
  </svg>
);

FillTextAlignLeft.displayName = 'FillTextAlignLeft';

export default FillTextAlignLeft;
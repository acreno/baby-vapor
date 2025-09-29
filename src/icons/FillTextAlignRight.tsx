import React from 'react';

export interface FillTextAlignRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillTextAlignRight: React.FC<FillTextAlignRightProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM6.75 10C6.33579 10 6 10.3358 6 10.75C6 11.1642 6.33579 11.5 6.75 11.5H11.25C11.6642 11.5 12 11.1642 12 10.75C12 10.3358 11.6642 10 11.25 10H6.75ZM6 4.75C6 4.33579 6.33579 4 6.75 4H11.25C11.6642 4 12 4.33579 12 4.75C12 5.16421 11.6642 5.5 11.25 5.5H6.75C6.33579 5.5 6 5.16421 6 4.75ZM4.75 7C4.33579 7 4 7.33579 4 7.75C4 8.16421 4.33579 8.5 4.75 8.5H11.25C11.6642 8.5 12 8.16421 12 7.75C12 7.33579 11.6642 7 11.25 7H4.75Z" />
  </svg>
);

FillTextAlignRight.displayName = 'FillTextAlignRight';

export default FillTextAlignRight;
import React from 'react';

export interface FillCompareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillCompare: React.FC<FillCompareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V4.00098H12.25C13.2165 4.00098 14 4.78448 14 5.75098V10.25C14 11.2165 13.2165 12 12.25 12H8.75V13.25C8.75 13.6642 8.41421 14 8 14C7.58579 14 7.25 13.6642 7.25 13.25V12H3.75C2.7835 12 2 11.2165 2 10.25V5.75098C2 4.78448 2.7835 4.00098 3.75 4.00098H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM3.75 5.50098H7.25V10.5H3.75C3.61193 10.5 3.5 10.3881 3.5 10.25V5.75098C3.5 5.61291 3.61193 5.50098 3.75 5.50098Z" />
  </svg>
);

FillCompare.displayName = 'FillCompare';

export default FillCompare;
import React from 'react';

export interface FillKeyboardProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillKeyboard: React.FC<FillKeyboardProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2.00293C14.2165 2.00293 15 2.78643 15 3.75293V12.2529C14.9997 13.2192 14.2163 14.0029 13.25 14.0029H2.75C1.78366 14.0029 1.00026 13.2192 1 12.2529V3.75293C1 2.78643 1.7835 2.00293 2.75 2.00293H13.25ZM5.75 9.5C5.33579 9.5 5 9.83579 5 10.25C5 10.6642 5.33579 11 5.75 11H10.25C10.6642 11 11 10.6642 11 10.25C11 9.83579 10.6642 9.5 10.25 9.5H5.75ZM6.25 7C5.83579 7 5.5 7.33579 5.5 7.75C5.5 8.16421 5.83579 8.5 6.25 8.5H6.75C7.16421 8.5 7.5 8.16421 7.5 7.75C7.5 7.33579 7.16421 7 6.75 7H6.25ZM9.25195 7C8.83791 7.0002 8.50195 7.33591 8.50195 7.75C8.50195 8.16409 8.83791 8.4998 9.25195 8.5H9.75195C10.1662 8.5 10.502 8.16421 10.502 7.75C10.502 7.33579 10.1662 7 9.75195 7H9.25195ZM4.75 5C4.33579 5 4 5.33579 4 5.75C4 6.16421 4.33579 6.5 4.75 6.5H5.25C5.66421 6.5 6 6.16421 6 5.75C6 5.33579 5.66421 5 5.25 5H4.75ZM7.75 5C7.33579 5 7 5.33579 7 5.75C7 6.16421 7.33579 6.5 7.75 6.5H8.25C8.66421 6.5 9 6.16421 9 5.75C9 5.33579 8.66421 5 8.25 5H7.75ZM10.75 5C10.3358 5 10 5.33579 10 5.75C10 6.16421 10.3358 6.5 10.75 6.5H11.25C11.6642 6.5 12 6.16421 12 5.75C12 5.33579 11.6642 5 11.25 5H10.75Z" />
  </svg>
);

FillKeyboard.displayName = 'FillKeyboard';

export default FillKeyboard;
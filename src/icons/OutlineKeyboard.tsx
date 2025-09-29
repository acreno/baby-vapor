import React from 'react';

export interface OutlineKeyboardProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineKeyboard: React.FC<OutlineKeyboardProps> = ({ 
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
    <path fill="currentColor" d="M10.25 9.5C10.6642 9.5 11 9.83579 11 10.25C11 10.6642 10.6642 11 10.25 11H5.75C5.33579 11 5 10.6642 5 10.25C5 9.83579 5.33579 9.5 5.75 9.5H10.25Z" />
    <path fill="currentColor" d="M6.75 7C7.16421 7 7.5 7.33579 7.5 7.75C7.5 8.16421 7.16421 8.5 6.75 8.5H6.25C5.83579 8.5 5.5 8.16421 5.5 7.75C5.5 7.33579 5.83579 7 6.25 7H6.75Z" />
    <path fill="currentColor" d="M9.75195 7C10.1662 7 10.502 7.33579 10.502 7.75C10.502 8.16421 10.1662 8.5 9.75195 8.5H9.25195C8.83791 8.4998 8.50195 8.16409 8.50195 7.75C8.50195 7.33591 8.83791 7.0002 9.25195 7H9.75195Z" />
    <path fill="currentColor" d="M5.25 5C5.66421 5 6 5.33579 6 5.75C6 6.16421 5.66421 6.5 5.25 6.5H4.75C4.33579 6.5 4 6.16421 4 5.75C4 5.33579 4.33579 5 4.75 5H5.25Z" />
    <path fill="currentColor" d="M8.25 5C8.66421 5 9 5.33579 9 5.75C9 6.16421 8.66421 6.5 8.25 6.5H7.75C7.33579 6.5 7 6.16421 7 5.75C7 5.33579 7.33579 5 7.75 5H8.25Z" />
    <path fill="currentColor" d="M11.25 5C11.6642 5 12 5.33579 12 5.75C12 6.16421 11.6642 6.5 11.25 6.5H10.75C10.3358 6.5 10 6.16421 10 5.75C10 5.33579 10.3358 5 10.75 5H11.25Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2.00195C14.2165 2.00195 15 2.78643 15 3.75293V12.2529C14.9997 13.2192 14.2163 14.0029 13.25 14.0029H2.75C1.78366 14.0029 1.00026 13.2192 1 12.2529V3.75293C1 2.78643 1.7835 2.00195 2.75 2.00195H13.25ZM2.75 3.50293C2.61193 3.50293 2.5 3.61486 2.5 3.75293V12.2529C2.50026 12.3908 2.61209 12.5029 2.75 12.5029H13.25C13.3879 12.5029 13.4997 12.3908 13.5 12.2529V3.75293C13.5 3.61486 13.3881 3.50293 13.25 3.50293H2.75Z" />
  </svg>
);

OutlineKeyboard.displayName = 'OutlineKeyboard';

export default OutlineKeyboard;
import React from 'react';

export interface OutlineSheetCollapseDownProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSheetCollapseDown: React.FC<OutlineSheetCollapseDownProps> = ({ 
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
    <path fill="currentColor" d="M10.248 8C10.6623 8 10.998 8.33579 10.998 8.75V10.25C10.998 10.6642 10.6623 11 10.248 11H5.74805C5.33383 11 4.99805 10.6642 4.99805 10.25V8.75C4.99805 8.33579 5.33383 8 5.74805 8H10.248Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75Z" />
  </svg>
);

OutlineSheetCollapseDown.displayName = 'OutlineSheetCollapseDown';

export default OutlineSheetCollapseDown;
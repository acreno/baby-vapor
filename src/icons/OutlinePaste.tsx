import React from 'react';

export interface OutlinePasteProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePaste: React.FC<OutlinePasteProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.01793 3.50293H3.75C3.61193 3.50293 3.5 3.61486 3.5 3.75293V12.2529C3.5 12.391 3.61193 12.5029 3.75 12.5029H6.25C6.66421 12.5029 7 12.8387 7 13.2529C7 13.6671 6.66421 14.0029 6.25 14.0029H3.75C2.7835 14.0029 2 13.2194 2 12.2529V3.75293C2 2.78643 2.7835 2.00293 3.75 2.00293H4.16702C4.44728 1.41011 5.05075 1 5.75 1H8.25C8.94925 1 9.55272 1.41011 9.83298 2.00293H10.25C11.2165 2.00293 12 2.78643 12 3.75293V5.25C12 5.66421 11.6642 6 11.25 6C10.8358 6 10.5 5.66421 10.5 5.25V3.75293C10.5 3.61486 10.3881 3.50293 10.25 3.50293H9.98207C9.86013 4.35029 9.13111 5.00146 8.25 5.00146H5.75C4.86889 5.00146 4.13987 4.35029 4.01793 3.50293ZM5.5 2.75C5.5 2.61193 5.61193 2.5 5.75 2.5H8.25C8.38807 2.5 8.5 2.61193 8.5 2.75V3.25146C8.5 3.38954 8.38807 3.50146 8.25 3.50146H5.75C5.61193 3.50146 5.5 3.38954 5.5 3.25146V2.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 8.75C8 7.7835 8.7835 7 9.75 7H13.25C14.2165 7 15 7.7835 15 8.75V13.25C15 14.2165 14.2165 15 13.25 15H9.75C8.7835 15 8 14.2165 8 13.25V8.75ZM9.75 8.5C9.61193 8.5 9.5 8.61193 9.5 8.75V13.25C9.5 13.3881 9.61193 13.5 9.75 13.5H13.25C13.3881 13.5 13.5 13.3881 13.5 13.25V8.75C13.5 8.61193 13.3881 8.5 13.25 8.5H9.75Z" />
  </svg>
);

OutlinePaste.displayName = 'OutlinePaste';

export default OutlinePaste;
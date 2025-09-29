import React from 'react';

export interface OutlineFiletypePdfProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFiletypePdf: React.FC<OutlineFiletypePdfProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4 4.75C4 3.7835 4.7835 3 5.75 3H10.2526C11.2191 3 12.0026 3.7835 12.0026 4.75V12.25C12.0026 12.5357 11.8404 12.7965 11.5841 12.9228C11.3278 13.049 11.0221 13.0187 10.7956 12.8446L8.00019 10.6961L5.20728 12.8445C4.98081 13.0187 4.67502 13.0491 4.41869 12.9229C4.16235 12.7966 4 12.5357 4 12.25V4.75ZM5.75 4.5C5.61193 4.5 5.5 4.61193 5.5 4.75V10.7269L7.54272 9.15553C7.81222 8.94822 8.18747 8.94815 8.45705 9.15535L10.5026 10.7276V4.75C10.5026 4.61193 10.3907 4.5 10.2526 4.5H5.75Z" />
  </svg>
);

OutlineFiletypePdf.displayName = 'OutlineFiletypePdf';

export default OutlineFiletypePdf;
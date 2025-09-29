import React from 'react';

export interface FillFiletypePdfProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillFiletypePdf: React.FC<FillFiletypePdfProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.75 3C4.7835 3 4 3.7835 4 4.75V12.25C4 12.5357 4.16235 12.7966 4.41869 12.9229C4.67502 13.0491 4.98081 13.0187 5.20728 12.8445L8.00019 10.6961L10.7956 12.8446C11.0221 13.0187 11.3278 13.049 11.5841 12.9228C11.8404 12.7965 12.0026 12.5357 12.0026 12.25V4.75C12.0026 3.7835 11.2191 3 10.2526 3H5.75Z" />
  </svg>
);

FillFiletypePdf.displayName = 'FillFiletypePdf';

export default FillFiletypePdf;
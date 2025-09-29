import React from 'react';

export interface FillComposeArrowProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillComposeArrow: React.FC<FillComposeArrowProps> = ({ 
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
    <path fill="currentColor" d="M12.6553 2.02976C13.4389 1.84624 14.1409 2.54025 13.9747 3.32175L13.9766 3.32273L12.8858 8.86277C12.8837 8.87345 12.8806 8.88441 12.878 8.89499C12.6756 9.72252 11.6477 10.0138 11.0421 9.41452C11.025 9.39766 11.0086 9.37924 10.9932 9.36081L10.1163 8.30808L3.21882 13.8325C2.91936 14.0718 2.48668 14.0473 2.21687 13.7749C1.94706 13.5023 1.92659 13.069 2.16902 12.7719L7.71882 5.98288L6.68269 5.21335C6.65452 5.19242 6.62758 5.16966 6.60261 5.14499C5.99276 4.54142 6.28157 3.50252 7.11531 3.30027L7.1241 3.29831L12.6553 2.02976Z" />
  </svg>
);

FillComposeArrow.displayName = 'FillComposeArrow';

export default FillComposeArrow;
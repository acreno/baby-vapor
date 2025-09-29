import React from 'react';

export interface FillArrowDownLeftSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowDownLeftSquare: React.FC<FillArrowDownLeftSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM9.99999 10.2505C10 9.83628 9.66421 9.50049 9.25 9.50049L7.56023 9.50048L10.7803 6.28085C11.0732 5.98798 11.0732 5.5131 10.7804 5.22019C10.4875 4.92728 10.0126 4.92724 9.71971 5.22012L6.49999 8.4394L6.5 6.75049C6.5 6.33627 6.16422 6.00048 5.75 6.00048C5.33579 6.00048 5 6.33627 5 6.75048L4.99999 10.2505C4.99998 10.6647 5.33577 11.0005 5.74998 11.0005L9.24999 11.0005C9.6642 11.0005 9.99999 10.6647 9.99999 10.2505Z" />
  </svg>
);

FillArrowDownLeftSquare.displayName = 'FillArrowDownLeftSquare';

export default FillArrowDownLeftSquare;
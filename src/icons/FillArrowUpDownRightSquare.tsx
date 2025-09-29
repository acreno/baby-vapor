import React from 'react';

export interface FillArrowUpDownRightSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowUpDownRightSquare: React.FC<FillArrowUpDownRightSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM5.49988 7.25005C5.49988 7.66426 5.16409 8.00005 4.74988 8.00005C4.33566 8.00005 3.99988 7.66426 3.99988 7.25005V4.75C3.99988 4.33579 4.33566 4 4.74988 4H7.24988C7.66409 4 7.99988 4.33579 7.99988 4.75C7.99988 5.16421 7.66409 5.5 7.24988 5.5H6.56697L10.4999 9.43284V8.75005C10.4999 8.33584 10.8357 8.00005 11.2499 8.00005C11.6641 8.00005 11.9999 8.33584 11.9999 8.75005V11.25C11.9999 11.6643 11.6641 12 11.2499 12H8.74988C8.33566 12 7.99988 11.6643 7.99988 11.25C7.99988 10.8358 8.33566 10.5 8.74988 10.5H9.44576L5.49988 6.55422V7.25005Z" />
  </svg>
);

FillArrowUpDownRightSquare.displayName = 'FillArrowUpDownRightSquare';

export default FillArrowUpDownRightSquare;
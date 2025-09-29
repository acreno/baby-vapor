import React from 'react';

export interface FillArrowDownRightSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowDownRightSquare: React.FC<FillArrowDownRightSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM5.99999 10.2505C5.99999 9.83628 6.33577 9.50049 6.74999 9.50049L8.43966 9.50048L5.21968 6.28084C4.92677 5.98796 4.92675 5.51309 5.21963 5.22018C5.5125 4.92727 5.98738 4.92725 6.28029 5.22012L9.49999 8.43949L9.49998 6.75049C9.49998 6.33627 9.83577 6.00048 10.25 6.00048C10.6642 6.00048 11 6.33627 11 6.75048L11 10.2505C11 10.6647 10.6642 11.0005 10.25 11.0005L6.74999 11.0005C6.33578 11.0005 5.99999 10.6647 5.99999 10.2505Z" />
  </svg>
);

FillArrowDownRightSquare.displayName = 'FillArrowDownRightSquare';

export default FillArrowDownRightSquare;
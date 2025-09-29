import React from 'react';

export interface FillArrowUpRightSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowUpRightSquare: React.FC<FillArrowUpRightSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM5.99999 5.75C5.99999 6.16421 6.33577 6.5 6.74999 6.5L8.43935 6.50001L5.21966 9.71967C4.92676 10.0126 4.92676 10.4874 5.21965 10.7803C5.51254 11.0732 5.98742 11.0732 6.28031 10.7803L9.49999 7.56069L9.49998 9.25C9.49998 9.66422 9.83577 10 10.25 10C10.6642 10 11 9.66422 11 9.25001L11 5.75002C11 5.33581 10.6642 5.00002 10.25 5.00002L6.74999 5C6.33578 5 5.99999 5.33578 5.99999 5.75Z" />
  </svg>
);

FillArrowUpRightSquare.displayName = 'FillArrowUpRightSquare';

export default FillArrowUpRightSquare;
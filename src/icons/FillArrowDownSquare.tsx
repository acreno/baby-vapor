import React from 'react';

export interface FillArrowDownSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowDownSquare: React.FC<FillArrowDownSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM8.75001 4.75V9.29552L9.69255 8.24832C9.96966 7.94044 10.4439 7.9155 10.7517 8.19261C11.0596 8.46971 11.0846 8.94393 10.8075 9.2518L8.5573 11.7518C8.41506 11.9098 8.21243 12.0001 7.99982 12.0001C7.7872 12.0001 7.58458 11.9098 7.44236 11.7518L5.19252 9.25176C4.91543 8.94387 4.94041 8.46966 5.2483 8.19257C5.5562 7.91549 6.03041 7.94046 6.3075 8.24836L7.25001 9.29567V4.75C7.25001 4.33579 7.58579 4 8.00001 4C8.41422 4 8.75001 4.33579 8.75001 4.75Z" />
  </svg>
);

FillArrowDownSquare.displayName = 'FillArrowDownSquare';

export default FillArrowDownSquare;
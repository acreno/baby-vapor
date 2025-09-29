import React from 'react';

export interface FillChevronDownSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillChevronDownSquare: React.FC<FillChevronDownSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75C2.7835 2 2 2.7835 2 3.75V12.25ZM10.7004 6.23966C10.9823 5.93613 11.4568 5.91855 11.7603 6.2004C12.0639 6.48226 12.0814 6.95681 11.7996 7.26034L8.54959 10.7603C8.40769 10.9132 8.20855 11 8 11C7.79145 11 7.59231 10.9132 7.4504 10.7603L4.20041 7.26034C3.91855 6.9568 3.93613 6.48226 4.23966 6.2004C4.5432 5.91855 5.01774 5.93613 5.2996 6.23966L8 9.14779L10.7004 6.23966Z" />
  </svg>
);

FillChevronDownSquare.displayName = 'FillChevronDownSquare';

export default FillChevronDownSquare;
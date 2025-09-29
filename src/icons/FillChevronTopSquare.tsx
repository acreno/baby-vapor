import React from 'react';

export interface FillChevronTopSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillChevronTopSquare: React.FC<FillChevronTopSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75C2.7835 2 2 2.7835 2 3.75V12.25ZM5.29959 9.76034C5.01774 10.0639 4.54319 10.0814 4.23966 9.7996C3.93613 9.51774 3.91855 9.04319 4.2004 8.73966L7.45041 5.23966C7.59231 5.08684 7.79145 5 8 5C8.20855 5 8.40769 5.08684 8.5496 5.23966L11.7996 8.73966C12.0814 9.04319 12.0639 9.51774 11.7603 9.7996C11.4568 10.0814 10.9823 10.0639 10.7004 9.76034L8 6.85221L5.29959 9.76034Z" />
  </svg>
);

FillChevronTopSquare.displayName = 'FillChevronTopSquare';

export default FillChevronTopSquare;
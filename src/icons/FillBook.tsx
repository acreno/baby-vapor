import React from 'react';

export interface FillBookProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillBook: React.FC<FillBookProps> = ({ 
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
    <path fill="currentColor" d="M7.25 2.40696C5.68246 1.69981 3.80105 1.90941 2.42 3.07355L2.38 3.10348C2.14 3.30306 2 3.6124 2 3.92175V11.9647C2 12.8728 3.08 13.3318 3.74 12.7131C4.721 11.7923 6.22088 11.7471 7.25 12.5865V2.40696Z" />
    <path fill="currentColor" d="M8.75 12.5936C9.77918 11.7465 11.2824 11.7864 12.26 12.7131C12.92 13.3318 14 12.8728 14 11.9647V3.92175C14 3.71219 13.92 3.5226 13.81 3.35296C13.81 3.35296 13.66 3.16336 13.57 3.09351C12.1873 1.92796 10.3251 1.7119 8.75 2.41374V12.5936Z" />
  </svg>
);

FillBook.displayName = 'FillBook';

export default FillBook;
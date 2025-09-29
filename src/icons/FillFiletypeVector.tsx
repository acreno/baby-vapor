import React from 'react';

export interface FillFiletypeVectorProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillFiletypeVector: React.FC<FillFiletypeVectorProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.61805 6.5C3.34339 6.80687 2.94425 7 2.5 7C1.67157 7 1 6.32843 1 5.5C1 4.67157 1.67157 4 2.5 4C3.15311 4 3.70873 4.4174 3.91465 5H12.0854C12.2913 4.4174 12.8469 4 13.5 4C14.3284 4 15 4.67157 15 5.5C15 6.32843 14.3284 7 13.5 7C13.0557 7 12.6566 6.80687 12.3819 6.5H10.9422C11.1639 6.67363 11.3721 6.8687 11.5646 7.08428C12.4756 8.10439 13 9.54165 13 11.2499C13 11.6641 12.6642 11.9999 12.25 11.9999C11.8358 11.9999 11.5 11.6641 11.5 11.2499C11.5 9.84849 11.0731 8.7858 10.4458 8.08338C9.8212 7.38391 8.96331 7 8 7C6.14986 7 4.5 8.52224 4.5 11.2499C4.5 11.6641 4.16421 11.9999 3.75 11.9999C3.33579 11.9999 3 11.6641 3 11.2499C3 9.18763 3.80251 7.50136 5.07431 6.5H3.61805Z" />
  </svg>
);

FillFiletypeVector.displayName = 'FillFiletypeVector';

export default FillFiletypeVector;
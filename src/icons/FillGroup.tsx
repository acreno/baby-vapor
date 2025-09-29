import React from 'react';

export interface FillGroupProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillGroup: React.FC<FillGroupProps> = ({ 
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
    <path fill="currentColor" d="M2 2.75C2 2.33579 2.33579 2 2.75 2H13.25C13.6642 2 14 2.33579 14 2.75C14 3.16421 13.6642 3.5 13.25 3.5L2.75 3.5C2.33579 3.5 2 3.16421 2 2.75Z" />
    <path fill="currentColor" d="M3.5 5.00146C3.22386 5.00146 3 5.22532 3 5.50146V6.50146C3 6.77761 3.22386 7.00146 3.5 7.00146H4.5C4.77614 7.00146 5 6.77761 5 6.50146V5.50146C5 5.22532 4.77614 5.00146 4.5 5.00146H3.5Z" />
    <path fill="currentColor" d="M7.5 5.00146C7.22386 5.00146 7 5.22532 7 5.50146V6.50146C7 6.77761 7.22386 7.00146 7.5 7.00146H8.5C8.77614 7.00146 9 6.77761 9 6.50146V5.50146C9 5.22532 8.77614 5.00146 8.5 5.00146H7.5Z" />
    <path fill="currentColor" d="M11 5.50146C11 5.22532 11.2239 5.00146 11.5 5.00146H12.5C12.7761 5.00146 13 5.22532 13 5.50146V6.50146C13 6.77761 12.7761 7.00146 12.5 7.00146H11.5C11.2239 7.00146 11 6.77761 11 6.50146V5.50146Z" />
    <path fill="currentColor" d="M3.5 12C3.22386 12 3 12.2239 3 12.5V13.5C3 13.7761 3.22386 14 3.5 14H4.5C4.77614 14 5 13.7761 5 13.5V12.5C5 12.2239 4.77614 12 4.5 12H3.5Z" />
    <path fill="currentColor" d="M7 12.5C7 12.2239 7.22386 12 7.5 12H8.5C8.77614 12 9 12.2239 9 12.5V13.5C9 13.7761 8.77614 14 8.5 14H7.5C7.22386 14 7 13.7761 7 13.5V12.5Z" />
    <path fill="currentColor" d="M11.5 12C11.2239 12 11 12.2239 11 12.5V13.5C11 13.7761 11.2239 14 11.5 14H12.5C12.7761 14 13 13.7761 13 13.5V12.5C13 12.2239 12.7761 12 12.5 12H11.5Z" />
    <path fill="currentColor" d="M2.75 9C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H13.25C13.6642 10.5 14 10.1642 14 9.75C14 9.33579 13.6642 9 13.25 9H2.75Z" />
  </svg>
);

FillGroup.displayName = 'FillGroup';

export default FillGroup;
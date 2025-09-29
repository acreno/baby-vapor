import React from 'react';

export interface FillPrimaryNavSearchProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavSearch: React.FC<FillPrimaryNavSearchProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM11.0522 9.58767C11.6504 8.7074 12 7.64453 12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C7.64372 12 8.7059 11.6509 9.5858 11.0534L11.0217 13.2639C11.5827 14.1277 12.797 14.2553 13.5253 13.527C14.2537 12.7986 14.1261 11.5844 13.2623 11.0233L11.0522 9.58767Z" />
  </svg>
);

FillPrimaryNavSearch.displayName = 'FillPrimaryNavSearch';

export default FillPrimaryNavSearch;
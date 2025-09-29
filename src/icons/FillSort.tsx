import React from 'react';

export interface FillSortProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillSort: React.FC<FillSortProps> = ({ 
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
    <path fill="currentColor" d="M9 11C9.55228 11 10 11.4477 10 12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H9Z" />
    <path fill="currentColor" d="M11 7C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H5C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7H11Z" />
    <path fill="currentColor" d="M13 3C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H5C4.44772 5 4 4.55228 4 4C4 3.44772 4.44772 3 5 3H13Z" />
  </svg>
);

FillSort.displayName = 'FillSort';

export default FillSort;
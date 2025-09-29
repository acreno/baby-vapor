import React from 'react';

export interface OutlineSortProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSort: React.FC<OutlineSortProps> = ({ 
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
    <path fill="currentColor" d="M4 3.74829C4 3.33408 4.33579 2.99829 4.75 2.99829H13.25C13.6642 2.99829 14 3.33408 14 3.74829C14 4.1625 13.6642 4.49829 13.25 4.49829H4.75C4.33579 4.49829 4 4.1625 4 3.74829Z" />
    <path fill="currentColor" d="M4 7.75C4 7.33579 4.33579 7 4.75 7H11.25C11.6642 7 12 7.33579 12 7.75C12 8.16421 11.6642 8.5 11.25 8.5H4.75C4.33579 8.5 4 8.16421 4 7.75Z" />
    <path fill="currentColor" d="M4.75 11C4.33579 11 4 11.3358 4 11.75C4 12.1642 4.33579 12.5 4.75 12.5H9.25C9.66421 12.5 10 12.1642 10 11.75C10 11.3358 9.66421 11 9.25 11H4.75Z" />
  </svg>
);

OutlineSort.displayName = 'OutlineSort';

export default OutlineSort;
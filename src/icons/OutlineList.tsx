import React from 'react';

export interface OutlineListProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineList: React.FC<OutlineListProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 3.75C6 3.33579 6.33579 3 6.75 3H13.25C13.6642 3 14 3.33579 14 3.75C14 4.16421 13.6642 4.5 13.25 4.5H6.75C6.33579 4.5 6 4.16421 6 3.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 7.75C6 7.33579 6.33579 7 6.75 7H13.25C13.6642 7 14 7.33579 14 7.75C14 8.16421 13.6642 8.5 13.25 8.5H6.75C6.33579 8.5 6 8.16421 6 7.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 11.75C6 11.3358 6.33579 11 6.75 11H13.25C13.6642 11 14 11.3358 14 11.75C14 12.1642 13.6642 12.5 13.25 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75Z" />
    <path fill="currentColor" d="M4 4C4 4.55228 3.55228 5 3 5C2.44772 5 2 4.55228 2 4C2 3.44772 2.44772 3 3 3C3.55228 3 4 3.44772 4 4Z" />
    <path fill="currentColor" d="M4 8C4 8.55228 3.55228 9 3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7C3.55228 7 4 7.44772 4 8Z" />
    <path fill="currentColor" d="M4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11C3.55228 11 4 11.4477 4 12Z" />
  </svg>
);

OutlineList.displayName = 'OutlineList';

export default OutlineList;
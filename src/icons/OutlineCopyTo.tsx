import React from 'react';

export interface OutlineCopyToProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCopyTo: React.FC<OutlineCopyToProps> = ({ 
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
    <path fill="currentColor" d="M2.75 1C1.7835 1 1 1.7835 1 2.75V6.25C1 6.66421 1.33579 7 1.75 7C2.16421 7 2.5 6.66421 2.5 6.25V2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H10.25C10.3881 2.5 10.5 2.61193 10.5 2.75V4H5.75C4.7835 4 4 4.7835 4 5.75V6.25C4 6.66421 4.33579 7 4.75 7C5.16421 7 5.5 6.66421 5.5 6.25V5.75C5.5 5.61193 5.61193 5.5 5.75 5.5H13.25C13.3881 5.5 13.5 5.61193 13.5 5.75V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H9.75C9.33579 13.5 9 13.8358 9 14.25C9 14.6642 9.33579 15 9.75 15H13.25C14.2165 15 15 14.2165 15 13.25V5.75C15 4.7835 14.2165 4 13.25 4H12V2.75C12 1.7835 11.2165 1 10.25 1H2.75Z" />
    <path fill="currentColor" d="M1.75 9C2.16421 9 2.5 9.33579 2.5 9.75V11C2.5 11.1381 2.61193 11.25 2.75 11.25H5.29556L4.24831 10.3075C3.94043 10.0304 3.91547 9.55617 4.19257 9.24828C4.46966 8.9404 4.94388 8.91544 5.25176 9.19254L7.75176 11.4425C7.90985 11.5848 8.0001 11.7875 8.00004 12.0002C7.99998 12.2129 7.90962 12.4156 7.75145 12.5578L5.25145 14.8052C4.94341 15.0822 4.46921 15.0569 4.19229 14.7489C3.91536 14.4409 3.94059 13.9667 4.24862 13.6897L5.29395 12.75H2.75C1.7835 12.75 1 11.9665 1 11V9.75C1 9.33579 1.33579 9 1.75 9Z" />
  </svg>
);

OutlineCopyTo.displayName = 'OutlineCopyTo';

export default OutlineCopyTo;
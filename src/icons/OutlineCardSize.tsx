import React from 'react';

export interface OutlineCardSizeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCardSize: React.FC<OutlineCardSizeProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.75 2C4.7835 2 4 2.7835 4 3.75V7H2.75C1.7835 7 1 7.7835 1 8.75V12.25C1 13.2165 1.7835 14 2.75 14H7.24882C8.21532 14 8.99882 13.2165 8.99882 12.25V11H13.25C14.2165 11 15 10.2165 15 9.25V3.75C15 2.7835 14.2165 2 13.25 2H5.75ZM7.49882 11H5.75C4.7835 11 4 10.2165 4 9.25V8.5H2.75C2.61193 8.5 2.5 8.61193 2.5 8.75V12.25C2.5 12.3881 2.61193 12.5 2.75 12.5H7.24882C7.38689 12.5 7.49882 12.3881 7.49882 12.25V11ZM5.5 3.75C5.5 3.61193 5.61193 3.5 5.75 3.5H13.25C13.3881 3.5 13.5 3.61193 13.5 3.75V9.25C13.5 9.38807 13.3881 9.5 13.25 9.5H5.75C5.61193 9.5 5.5 9.38807 5.5 9.25V3.75Z" />
  </svg>
);

OutlineCardSize.displayName = 'OutlineCardSize';

export default OutlineCardSize;
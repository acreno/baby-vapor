import React from 'react';

export interface OutlineImageMapProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineImageMap: React.FC<OutlineImageMapProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75ZM6.75 5C6.33579 5 6 5.33579 6 5.75V9.25C6 9.66421 6.33579 10 6.75 10H10.25C10.6642 10 11 9.66421 11 9.25V5.75C11 5.33579 10.6642 5 10.25 5H6.75ZM7.5 8.5V6.5H9.5V8.5H7.5Z" />
  </svg>
);

OutlineImageMap.displayName = 'OutlineImageMap';

export default OutlineImageMap;
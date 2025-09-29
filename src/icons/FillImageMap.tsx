import React from 'react';

export interface FillImageMapProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillImageMap: React.FC<FillImageMapProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM6 5.75C6 5.33579 6.33579 5 6.75 5H10.25C10.6642 5 11 5.33579 11 5.75V9.25C11 9.66421 10.6642 10 10.25 10H6.75C6.33579 10 6 9.66421 6 9.25V5.75Z" />
  </svg>
);

FillImageMap.displayName = 'FillImageMap';

export default FillImageMap;
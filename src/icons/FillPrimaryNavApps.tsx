import React from 'react';

export interface FillPrimaryNavAppsProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavApps: React.FC<FillPrimaryNavAppsProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4 4.75C4 3.23122 5.23122 2 6.75 2H9.25C10.7688 2 12 3.23122 12 4.75V11.25C12 12.7688 10.7688 14 9.25 14H6.75C5.23122 14 4 12.7688 4 11.25V4.75ZM6.75 10.5C6.33579 10.5 6 10.8358 6 11.25C6 11.6642 6.33579 12 6.75 12H9.25C9.66421 12 10 11.6642 10 11.25C10 10.8358 9.66421 10.5 9.25 10.5H6.75Z" />
  </svg>
);

FillPrimaryNavApps.displayName = 'FillPrimaryNavApps';

export default FillPrimaryNavApps;
import React from 'react';

export interface OutlineConnectedAppsProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineConnectedApps: React.FC<OutlineConnectedAppsProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 2.75C2 2.33579 2.33579 2 2.75 2H6.25C6.66421 2 7 2.33579 7 2.75V5H9V2.75C9 2.33579 9.33579 2 9.75 2H13.25C13.6642 2 14 2.33579 14 2.75V5.16841C14.5912 5.44927 15 6.0519 15 6.75V12.25C15 13.2165 14.2165 14 13.25 14H2.75C1.7835 14 1 13.2165 1 12.25V6.75C1 6.0519 1.40876 5.44927 2 5.16841V2.75ZM13.25 6.5H2.75C2.61193 6.5 2.5 6.61193 2.5 6.75V12.25C2.5 12.3881 2.61193 12.5 2.75 12.5H13.25C13.3881 12.5 13.5 12.3881 13.5 12.25V6.75C13.5 6.61193 13.3881 6.5 13.25 6.5ZM12.5 5V3.5H10.5V5H12.5ZM5.5 3.5V5H3.5V3.5H5.5Z" />
  </svg>
);

OutlineConnectedApps.displayName = 'OutlineConnectedApps';

export default OutlineConnectedApps;
import React from 'react';

export interface OutlinePanelHeaderProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePanelHeader: React.FC<OutlinePanelHeaderProps> = ({ 
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
    <path fill="currentColor" d="M5.75 6C5.33579 6 5 6.33579 5 6.75C5 7.16421 5.33579 7.5 5.75 7.5H10.25C10.6642 7.5 11 7.16421 11 6.75C11 6.33579 10.6642 6 10.25 6H5.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3.00232C2.7835 3.00232 2 3.78582 2 4.75232V11.2523C2 12.2188 2.7835 13.0023 3.75 13.0023H12.25C13.2165 13.0023 14 12.2188 14 11.2523V4.75232C14 3.78582 13.2165 3.00232 12.25 3.00232H3.75ZM3.5 4.75232C3.5 4.61425 3.61193 4.50232 3.75 4.50232H12.25C12.3881 4.50232 12.5 4.61425 12.5 4.75232V11.2523C12.5 11.3904 12.3881 11.5023 12.25 11.5023H3.75C3.61193 11.5023 3.5 11.3904 3.5 11.2523V4.75232Z" />
  </svg>
);

OutlinePanelHeader.displayName = 'OutlinePanelHeader';

export default OutlinePanelHeader;
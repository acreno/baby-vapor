import React from 'react';

export interface OutlineLockitNanoProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineLockitNano: React.FC<OutlineLockitNanoProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11 1.75C11 1.33579 10.6642 1 10.25 1C9.83579 1 9.5 1.33579 9.5 1.75V3.75H5.75C4.7835 3.75 4 4.5335 4 5.5V13.25C4 14.2165 4.7835 15 5.75 15H10.25C11.2165 15 12 14.2165 12 13.25V5.5C12 4.8019 11.5912 4.19927 11 3.91841V1.75ZM5.5 5.5C5.5 5.36193 5.61193 5.25 5.75 5.25H10.25C10.3881 5.25 10.5 5.36193 10.5 5.5V13.25C10.5 13.3881 10.3881 13.5 10.25 13.5H5.75C5.61193 13.5 5.5 13.3881 5.5 13.25V5.5ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" />
  </svg>
);

OutlineLockitNano.displayName = 'OutlineLockitNano';

export default OutlineLockitNano;
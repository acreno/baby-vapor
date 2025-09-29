import React from 'react';

export interface OutlineVideoProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineVideo: React.FC<OutlineVideoProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H3.75Z" />
    <path fill="currentColor" d="M6.00421 9.50679V6.49325C6.00421 6.12099 6.39645 5.87928 6.72898 6.04662L9.72304 7.55337C10.09 7.73805 10.09 8.26195 9.72305 8.44664L6.72898 9.95342C6.39646 10.1208 6.00421 9.87905 6.00421 9.50679Z" />
  </svg>
);

OutlineVideo.displayName = 'OutlineVideo';

export default OutlineVideo;
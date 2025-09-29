import React from 'react';

export interface OutlineResolutionProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineResolution: React.FC<OutlineResolutionProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M10.25 8.48999C10.6642 8.48999 11 8.82578 11 9.23999V10.74C11 10.9389 10.9209 11.1296 10.7803 11.2703C10.6396 11.4109 10.4489 11.49 10.25 11.49H8.75C8.33579 11.49 8 11.1542 8 10.74C8 10.3258 8.33579 9.98999 8.75 9.98999H9.5V9.23999C9.5 8.82578 9.83579 8.48999 10.25 8.48999Z" />
    <path fill="currentColor" d="M7.25 5.48999C7.66421 5.48999 8 5.82578 8 6.23999C8 6.6542 7.66421 6.98999 7.25 6.98999H6.5V7.73999C6.5 8.1542 6.16421 8.48999 5.75 8.48999C5.33579 8.48999 5 8.1542 5 7.73999V6.23999C5 5.82578 5.33579 5.48999 5.75 5.48999H7.25Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.25 2.48999C13.2165 2.48999 13.9999 3.27355 14 4.23999V12.7439C13.9999 13.7103 13.2165 14.4939 12.25 14.4939H3.75C2.78354 14.4939 2.00007 13.7103 2 12.7439V4.23999C2.00007 3.27355 2.78354 2.48999 3.75 2.48999H12.25ZM3.75 3.98999C3.61197 3.98999 3.50007 4.10198 3.5 4.23999V12.7439C3.50007 12.8819 3.61197 12.9939 3.75 12.9939H12.25C12.388 12.9939 12.4999 12.8819 12.5 12.7439V4.23999C12.4999 4.10198 12.388 3.98999 12.25 3.98999H3.75Z" />
  </svg>
);

OutlineResolution.displayName = 'OutlineResolution';

export default OutlineResolution;
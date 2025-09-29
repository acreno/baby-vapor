import React from 'react';

export interface OutlineDownloadProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineDownload: React.FC<OutlineDownloadProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 2C8.4142 2 8.74998 2.33579 8.74998 2.75V8.29264L9.69131 7.24796C9.96858 6.94024 10.4428 6.91555 10.7505 7.19283C11.0583 7.4701 11.0829 7.94433 10.8057 8.25206L8.55716 10.7474C8.41497 10.9053 8.21253 10.9954 8.00011 10.9954C7.78769 10.9954 7.58522 10.9054 7.44297 10.7476L5.19299 8.25223C4.91562 7.9446 4.94015 7.47036 5.24778 7.19299C5.55541 6.91561 6.02965 6.94014 6.30702 7.24777L7.24998 8.29359V2.75C7.24998 2.33579 7.58577 2 7.99998 2ZM2.74911 10C3.16333 10 3.49911 10.3358 3.49911 10.75V12.25C3.49911 12.3881 3.61104 12.5 3.74911 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V10.75C12.5 10.3358 12.8358 10 13.25 10C13.6642 10 14 10.3358 14 10.75V12.25C14 13.2165 13.2165 14 12.25 14H3.74911C2.78262 14 1.99911 13.2165 1.99911 12.25V10.75C1.99911 10.3358 2.3349 10 2.74911 10Z" />
  </svg>
);

OutlineDownload.displayName = 'OutlineDownload';

export default OutlineDownload;
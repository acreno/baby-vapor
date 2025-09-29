import React from 'react';

export interface OutlineExportProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineExport: React.FC<OutlineExportProps> = ({ 
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
    <path fill="currentColor" d="M6 4.75C6 4.33579 6.33579 4 6.75 4H11.25C11.6642 4 12 4.33578 12 4.75L12 9.25C12 9.66421 11.6642 10 11.25 10C10.8358 10 10.5 9.66422 10.5 9.25L10.5 6.5571L8.28045 8.77769C7.98763 9.07065 7.51275 9.07076 7.21979 8.77793C6.92683 8.48511 6.92672 8.01023 7.21955 7.71727L9.43579 5.5H6.75C6.33579 5.5 6 5.16421 6 4.75Z" />
    <path fill="currentColor" d="M5 12C5.55228 12 6 11.5523 6 11C6 10.4477 5.55228 10 5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12Z" />
  </svg>
);

OutlineExport.displayName = 'OutlineExport';

export default OutlineExport;
import React from 'react';

export interface OutlineCollectionsProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCollections: React.FC<OutlineCollectionsProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H7V6H3.5V3.75ZM3.5 7.5H7L7 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V7.5ZM8.5 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V10L8.5 10V12.5ZM8.5 8.5L8.5 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V8.5L8.5 8.5Z" />
  </svg>
);

OutlineCollections.displayName = 'OutlineCollections';

export default OutlineCollections;
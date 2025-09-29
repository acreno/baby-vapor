import React from 'react';

export interface OutlineSaveCollectionsProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSaveCollections: React.FC<OutlineSaveCollectionsProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H6.25C6.66421 14 7 13.6642 7 13.25C7 12.8358 6.66421 12.5 6.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V7.5H7.00003V9.24542C7.00003 9.65964 7.33582 9.99542 7.75003 9.99542C8.16424 9.99542 8.50003 9.65964 8.50003 9.24542V3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V5.25C12.5 5.66421 12.8358 6 13.25 6C13.6642 6 14 5.66421 14 5.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM7.00003 6H3.5V3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H7.00003V6Z" />
    <path fill="currentColor" d="M11.25 8.75V12.2984L10.3026 11.2477C10.0252 10.9401 9.55095 10.9156 9.24333 11.193C8.93572 11.4704 8.91122 11.9447 9.18862 12.2523L11.443 14.7523C11.5853 14.9101 11.7879 15.0001 12.0004 15C12.2128 14.9999 12.4153 14.9097 12.5575 14.7517L14.8075 12.2517C15.0846 11.9438 15.0596 11.4696 14.7517 11.1925C14.4438 10.9154 13.9696 10.9404 13.6925 11.2483L12.75 12.2955V8.75C12.75 8.33579 12.4142 8 12 8C11.5858 8 11.25 8.33579 11.25 8.75Z" />
  </svg>
);

OutlineSaveCollections.displayName = 'OutlineSaveCollections';

export default OutlineSaveCollections;
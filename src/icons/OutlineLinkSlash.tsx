import React from 'react';

export interface OutlineLinkSlashProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineLinkSlash: React.FC<OutlineLinkSlashProps> = ({ 
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
    <path fill="currentColor" d="M1.21967 2.28033L13.7197 14.7803C14.0126 15.0732 14.4875 15.0732 14.7804 14.7803C15.0733 14.4874 15.0733 14.0126 14.7804 13.7197L2.28033 1.21967C1.98744 0.926776 1.51256 0.926777 1.21967 1.21967C0.926776 1.51256 0.926777 1.98744 1.21967 2.28033Z" />
    <path fill="currentColor" d="M1.00002 7.99998C1.00002 6.94188 1.41351 5.98286 2.0873 5.26925L3.14876 6.33071C2.74475 6.77451 2.50002 7.36065 2.50002 7.99998C2.50002 9.37256 3.62802 10.5 5.03848 10.5H7.31804L8.81804 12H5.03848C2.81628 12 1.00002 10.2176 1.00002 7.99998Z" />
    <path fill="currentColor" d="M13.5 7.99998C13.5 8.63932 13.2553 9.22546 12.8513 9.66926L13.9127 10.7307C14.5865 10.0171 15 9.05809 15 7.99998C15 5.78239 13.1838 3.99998 10.9616 3.99998H7.25277C7.22993 3.99998 7.20733 4.00101 7.18501 4.003L8.682 5.49998H10.9616C12.372 5.49998 13.5 6.62741 13.5 7.99998Z" />
  </svg>
);

OutlineLinkSlash.displayName = 'OutlineLinkSlash';

export default OutlineLinkSlash;
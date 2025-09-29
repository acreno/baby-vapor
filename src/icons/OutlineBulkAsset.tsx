import React from 'react';

export interface OutlineBulkAssetProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineBulkAsset: React.FC<OutlineBulkAssetProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.99821 6.75C4.99821 5.7835 5.78171 5 6.74821 5H12.25C13.2165 5 14 5.7835 14 6.75V12.25C14 13.2165 13.2165 14 12.25 14H6.74821C5.78171 14 4.99821 13.2165 4.99821 12.25V6.75ZM6.74821 6.5C6.61014 6.5 6.49821 6.61193 6.49821 6.75V12.25C6.49821 12.3881 6.61014 12.5 6.74821 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V6.75C12.5 6.61193 12.3881 6.5 12.25 6.5H6.74821Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.00009 3.75C2.00009 2.7835 2.78359 2 3.75009 2H10.2501C10.6643 2 11.0001 2.33579 11.0001 2.75C11.0001 3.16421 10.6643 3.5 10.2501 3.5H3.75009C3.61202 3.5 3.50009 3.61193 3.50009 3.75V10.25C3.50009 10.6642 3.16431 11 2.75009 11C2.33588 11 2.00009 10.6642 2.00009 10.25V3.75Z" />
  </svg>
);

OutlineBulkAsset.displayName = 'OutlineBulkAsset';

export default OutlineBulkAsset;
import React from 'react';

export interface OutlineArchiveProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArchive: React.FC<OutlineArchiveProps> = ({ 
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
    <path fill="currentColor" d="M6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H9.25C9.66421 10.5 10 10.1642 10 9.75C10 9.33579 9.66421 9 9.25 9L6.75 9Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V5.25159C14 5.94969 13.5912 6.55231 13 6.83318V11.2515C13 12.7702 11.7688 14.0015 10.25 14.0015H5.75C4.23122 14.0015 3 12.7702 3 11.2515V6.83318C2.40876 6.55231 2 5.94969 2 5.25159V3.75ZM4.5 7.00159H11.5V11.2515C11.5 11.9418 10.9404 12.5015 10.25 12.5015H5.75C5.05964 12.5015 4.5 11.9418 4.5 11.2515V7.00159ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V5.25159C3.5 5.38966 3.61193 5.50159 3.75 5.50159H12.25C12.3881 5.50159 12.5 5.38966 12.5 5.25159V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H3.75Z" />
  </svg>
);

OutlineArchive.displayName = 'OutlineArchive';

export default OutlineArchive;
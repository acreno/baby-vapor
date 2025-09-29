import React from 'react';

export interface OutlineLockProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineLock: React.FC<OutlineLockProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.99707 5.00439V3.99815C4.99707 2.26901 6.35389 1 7.99707 1C9.64025 1 10.9971 2.26901 10.9971 3.99815V5.00439H11.2535C12.22 5.00439 13.0035 5.7879 13.0035 6.75439V12.25C13.0035 13.2165 12.22 14 11.2535 14H4.75354C3.78704 14 3.00354 13.2165 3.00354 12.25V6.75439C3.00354 5.7879 3.78704 5.00439 4.75354 5.00439H4.99707ZM6.49707 3.99815C6.49707 3.12463 7.15486 2.5 7.99707 2.5C8.83928 2.5 9.49707 3.12463 9.49707 3.99815V5.00439H6.49707V3.99815ZM4.50354 6.75439C4.50354 6.61632 4.61547 6.50439 4.75354 6.50439H11.2535C11.3916 6.50439 11.5035 6.61632 11.5035 6.75439V12.25C11.5035 12.3881 11.3916 12.5 11.2535 12.5H4.75354C4.61547 12.5 4.50354 12.3881 4.50354 12.25V6.75439Z" />
  </svg>
);

OutlineLock.displayName = 'OutlineLock';

export default OutlineLock;
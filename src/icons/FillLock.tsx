import React from 'react';

export interface FillLockProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillLock: React.FC<FillLockProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.9971 5.00439V3.99815C10.9971 2.26901 9.64025 1 7.99707 1C6.35389 1 4.99707 2.26901 4.99707 3.99815V5.00439H4.75354C3.78704 5.00439 3.00354 5.7879 3.00354 6.75439V12.25C3.00354 13.2165 3.78704 14 4.75354 14H11.2535C12.22 14 13.0035 13.2165 13.0035 12.25V6.75439C13.0035 5.7879 12.22 5.00439 11.2535 5.00439H10.9971ZM7.99707 2.5C7.15486 2.5 6.49707 3.12463 6.49707 3.99815V5.00439H9.49707V3.99815C9.49707 3.12463 8.83928 2.5 7.99707 2.5Z" />
  </svg>
);

FillLock.displayName = 'FillLock';

export default FillLock;
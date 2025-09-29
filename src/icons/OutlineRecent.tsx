import React from 'react';

export interface OutlineRecentProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineRecent: React.FC<OutlineRecentProps> = ({ 
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
    <path fill="currentColor" d="M1.80529 9.02181C2.2053 8.91427 2.61675 9.15137 2.72428 9.55138C3.25885 11.5398 5.26867 13.5 8.00001 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8.00001 2.5C6.29257 2.5 4.76704 3.27725 3.75714 4.5L4.26562 4.5C4.67984 4.5 5.01562 4.83578 5.01562 5.25C5.01563 5.66421 4.67984 6 4.26563 6L1.75 6C1.55109 6 1.36032 5.92098 1.21967 5.78033C1.07902 5.63968 1 5.44891 1 5.25V2.75781C1 2.3436 1.33579 2.00781 1.75 2.00781C2.16421 2.00781 2.5 2.3436 2.5 2.75781V3.66946C3.7806 2.04505 5.76846 1 8.00001 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8.00001 15C4.52077 15 1.96771 12.5149 1.27572 9.94081C1.16818 9.5408 1.40528 9.12935 1.80529 9.02181Z" />
    <path fill="currentColor" d="M8.5 4.74927C8.5 4.33505 8.16421 3.99927 7.75 3.99927C7.33579 3.99927 7 4.33505 7 4.74927V8.25C7 8.66421 7.33579 9 7.75 9H10.25C10.6642 9 11 8.66421 11 8.25C11 7.83579 10.6642 7.5 10.25 7.5H8.5V4.74927Z" />
  </svg>
);

OutlineRecent.displayName = 'OutlineRecent';

export default OutlineRecent;
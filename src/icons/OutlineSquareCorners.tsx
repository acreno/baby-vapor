import React from 'react';

export interface OutlineSquareCornersProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSquareCorners: React.FC<OutlineSquareCornersProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M2.75 10.488C3.16413 10.488 3.49987 10.8239 3.5 11.238V12.7419C3.5 12.88 3.61193 12.9919 3.75 12.9919H5.25C5.66396 12.9922 5.99987 13.328 6 13.7419C6 14.156 5.66404 14.4917 5.25 14.4919H3.75C2.7835 14.4919 2 13.7084 2 12.7419V11.238C2.00013 10.8239 2.33587 10.488 2.75 10.488Z" />
    <path fill="currentColor" d="M13.25 10.49C13.6642 10.49 14 10.8258 14 11.24V12.74C14 13.7065 13.2165 14.49 12.25 14.49H10.7461C10.3319 14.49 9.99609 14.1542 9.99609 13.74C9.99609 13.3258 10.3319 12.99 10.7461 12.99H12.25C12.3881 12.99 12.5 12.8781 12.5 12.74V11.24C12.5 10.8258 12.8358 10.49 13.25 10.49Z" />
    <path fill="currentColor" d="M12.25 2.48999C13.2165 2.48999 14 3.27349 14 4.23999V5.7439C14 6.15811 13.6642 6.4939 13.25 6.4939C12.8358 6.4939 12.5 6.15811 12.5 5.7439V4.23999C12.5 4.10192 12.3881 3.98999 12.25 3.98999H10.75C10.3358 3.98999 10 3.6542 10 3.23999C10 2.82578 10.3358 2.48999 10.75 2.48999H12.25Z" />
    <path fill="currentColor" d="M5.25391 2.48999C5.66812 2.48999 6.00391 2.82578 6.00391 3.23999C6.00391 3.6542 5.66812 3.98999 5.25391 3.98999H3.75C3.61193 3.98999 3.5 4.10192 3.5 4.23999V5.73999C3.5 6.1542 3.16421 6.48999 2.75 6.48999C2.33579 6.48999 2 6.1542 2 5.73999V4.23999C2 3.27349 2.7835 2.48999 3.75 2.48999H5.25391Z" />
  </svg>
);

OutlineSquareCorners.displayName = 'OutlineSquareCorners';

export default OutlineSquareCorners;
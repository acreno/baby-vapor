import React from 'react';

export interface OutlineTabletHorizontalProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTabletHorizontal: React.FC<OutlineTabletHorizontalProps> = ({ 
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
    <path fill="currentColor" d="M11.25 6.48999C11.6642 6.48999 12 6.82578 12 7.23999V9.73999C12 10.1542 11.6642 10.49 11.25 10.49C10.8358 10.49 10.5 10.1542 10.5 9.73999V7.23999C10.5 6.82578 10.8358 6.48999 11.25 6.48999Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2.48999C14.2165 2.48999 15 3.27349 15 4.23999V12.74C15 13.6462 14.3113 14.3917 13.4287 14.4812L13.25 14.49H2.75C1.7835 14.49 1 13.7065 1 12.74V4.23999C1 3.27349 1.7835 2.48999 2.75 2.48999H13.25ZM2.75 3.98999C2.61193 3.98999 2.5 4.10192 2.5 4.23999V12.74C2.5 12.8781 2.61193 12.99 2.75 12.99H13.25L13.3008 12.9851C13.4145 12.9617 13.5 12.8607 13.5 12.74V4.23999C13.5 4.10192 13.3881 3.98999 13.25 3.98999H2.75Z" />
  </svg>
);

OutlineTabletHorizontal.displayName = 'OutlineTabletHorizontal';

export default OutlineTabletHorizontal;
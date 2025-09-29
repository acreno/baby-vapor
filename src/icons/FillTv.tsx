import React from 'react';

export interface FillTvProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillTv: React.FC<FillTvProps> = ({ 
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
    <path fill="currentColor" d="M3.75 11C2.7835 11 2 10.2165 2 9.25V3.7522C2 2.7857 2.7835 2.0022 3.75 2.0022H12.2525C13.219 2.0022 14.0025 2.7857 14.0025 3.7522V9.25C14.0025 10.2165 13.219 11 12.2525 11H3.75Z" />
    <path fill="currentColor" d="M5.75 12.5C5.33579 12.5 5 12.8358 5 13.25C5 13.6642 5.33579 14 5.75 14H10.25C10.6642 14 11 13.6642 11 13.25C11 12.8358 10.6642 12.5 10.25 12.5H5.75Z" />
  </svg>
);

FillTv.displayName = 'FillTv';

export default FillTv;
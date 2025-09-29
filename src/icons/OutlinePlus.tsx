import React from 'react';

export interface OutlinePlusProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePlus: React.FC<OutlinePlusProps> = ({ 
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
    <path fill="currentColor" d="M8.75 4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75V7.25H4.75C4.33579 7.25 4 7.58579 4 8C4 8.41421 4.33579 8.75 4.75 8.75H7.25V11.25C7.25 11.6642 7.58579 12 8 12C8.41421 12 8.75 11.6642 8.75 11.25V8.75H11.25C11.6642 8.75 12 8.41421 12 8C12 7.58579 11.6642 7.25 11.25 7.25H8.75V4.75Z" />
  </svg>
);

OutlinePlus.displayName = 'OutlinePlus';

export default OutlinePlus;
import React from 'react';

export interface OutlineTabletProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTablet: React.FC<OutlineTabletProps> = ({ 
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
    <path fill="currentColor" d="M6.75 10.5C6.33579 10.5 6 10.8358 6 11.25C6 11.6642 6.33579 12 6.75 12H9.25C9.66421 12 10 11.6642 10 11.25C10 10.8358 9.66421 10.5 9.25 10.5H6.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 1C2.7835 1 2 1.7835 2 2.75V13.25C2 14.2165 2.7835 15 3.75 15H12.25C13.2165 15 14 14.2165 14 13.25V2.75C14 1.7835 13.2165 1 12.25 1H3.75ZM3.5 2.75C3.5 2.61193 3.61193 2.5 3.75 2.5H12.25C12.3881 2.5 12.5 2.61193 12.5 2.75V13.25C12.5 13.3881 12.3881 13.5 12.25 13.5H3.75C3.61193 13.5 3.5 13.3881 3.5 13.25V2.75Z" />
  </svg>
);

OutlineTablet.displayName = 'OutlineTablet';

export default OutlineTablet;
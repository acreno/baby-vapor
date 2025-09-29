import React from 'react';

export interface OutlineMagnifyingglassProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineMagnifyingglass: React.FC<OutlineMagnifyingglassProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.8833 10.8226C12.5841 9.89957 13 8.74835 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13C8.74835 13 9.89957 12.5841 10.8226 11.8833L12.7197 13.7803C13.0126 14.0732 13.4874 14.0732 13.7803 13.7803C14.0732 13.4874 14.0732 13.0126 13.7803 12.7197L11.8833 10.8226ZM11.5 7.5C11.5 9.70914 9.70914 11.5 7.5 11.5C5.29086 11.5 3.5 9.70914 3.5 7.5C3.5 5.29086 5.29086 3.5 7.5 3.5C9.70914 3.5 11.5 5.29086 11.5 7.5Z" />
  </svg>
);

OutlineMagnifyingglass.displayName = 'OutlineMagnifyingglass';

export default OutlineMagnifyingglass;
import React from 'react';

export interface OutlineMoreHorizontalProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineMoreHorizontal: React.FC<OutlineMoreHorizontalProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13 9.5C13.8284 9.5 14.5 8.82843 14.5 8C14.5 7.17157 13.8284 6.5 13 6.5C12.1716 6.5 11.5 7.17157 11.5 8C11.5 8.82843 12.1716 9.5 13 9.5ZM9.50004 8.00019C9.50004 8.82862 8.82846 9.50019 8.00004 9.50019C7.17161 9.50019 6.50004 8.82862 6.50004 8.00019C6.50004 7.17176 7.17161 6.50019 8.00004 6.50019C8.82846 6.50019 9.50004 7.17176 9.50004 8.00019ZM4.5 8.00024C4.5 8.82867 3.82843 9.50024 3 9.50024C2.17157 9.50024 1.5 8.82867 1.5 8.00024C1.5 7.17182 2.17157 6.50024 3 6.50024C3.82843 6.50024 4.5 7.17182 4.5 8.00024Z" />
  </svg>
);

OutlineMoreHorizontal.displayName = 'OutlineMoreHorizontal';

export default OutlineMoreHorizontal;
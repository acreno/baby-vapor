import React from 'react';

export interface OutlineGenerateProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineGenerate: React.FC<OutlineGenerateProps> = ({ 
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
    <path fill="currentColor" d="M8 4.74646C8 5.16067 7.66421 5.49646 7.25 5.49646H5.75C5.33579 5.49646 5 5.16067 5 4.74646C5 4.33225 5.33579 3.99646 5.75 3.99646H7.25C7.66421 3.99646 8 4.33225 8 4.74646Z" />
    <path fill="currentColor" d="M8.00002 11.25C8.00002 11.6642 7.66423 12 7.25002 12H5.75C5.33579 12 5 11.6642 5 11.25C5 10.8358 5.33579 10.5 5.75 10.5H7.25002C7.66423 10.5 8.00002 10.8358 8.00002 11.25Z" />
    <path fill="currentColor" d="M6.25 8.75C6.66421 8.75 7 8.41421 7 8C7 7.58579 6.66421 7.25 6.25 7.25H1.75C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75H6.25Z" />
    <path fill="currentColor" d="M12.2955 8.75L11.2483 9.69254C10.9404 9.96963 10.9154 10.4438 11.1925 10.7517C11.4696 11.0596 11.9438 11.0846 12.2517 10.8075L14.7517 8.55748C14.9098 8.41525 15 8.21262 15 8.00001C15 7.78739 14.9098 7.58477 14.7517 7.44254L12.2517 5.19254C11.9438 4.91544 11.4696 4.9404 11.1925 5.24828C10.9154 5.55617 10.9404 6.03038 11.2483 6.30748L12.2955 7.25H9.74878C9.33457 7.25 8.99878 7.58579 8.99878 8C8.99878 8.41421 9.33457 8.75 9.74878 8.75H12.2955Z" />
    <path fill="currentColor" d="M3.5 4.74646C3.5 5.16067 3.16421 5.49646 2.75 5.49646C2.33579 5.49646 2 5.16067 2 4.74646C2 4.33225 2.33579 3.99646 2.75 3.99646C3.16421 3.99646 3.5 4.33225 3.5 4.74646Z" />
    <path fill="currentColor" d="M2.75 12C3.16421 12 3.5 11.6642 3.5 11.25C3.5 10.8358 3.16421 10.5 2.75 10.5C2.33579 10.5 2 10.8358 2 11.25C2 11.6642 2.33579 12 2.75 12Z" />
  </svg>
);

OutlineGenerate.displayName = 'OutlineGenerate';

export default OutlineGenerate;
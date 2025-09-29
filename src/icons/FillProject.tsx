import React from 'react';

export interface FillProjectProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillProject: React.FC<FillProjectProps> = ({ 
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
    <path fill="currentColor" d="M11.0923 5H14V3.75C14 2.7835 13.2165 2 12.25 2H8.99216L11.0923 5Z" />
    <path fill="currentColor" d="M7.77148 2H5.34868L7.45142 5H9.87161L7.77148 2Z" />
    <path fill="currentColor" d="M3.75 2H4.1275L6.23024 5H2V3.75C2 2.7835 2.7835 2 3.75 2Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 6H2V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V6ZM6.49734 10.9982V9.00186C6.49734 8.63057 6.88775 8.3888 7.22015 8.55425L9.22548 9.5524C9.59508 9.73637 9.59508 10.2637 9.22548 10.4476L7.22015 11.4458C6.88775 11.6112 6.49734 11.3695 6.49734 10.9982Z" />
  </svg>
);

FillProject.displayName = 'FillProject';

export default FillProject;
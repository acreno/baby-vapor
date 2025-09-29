import React from 'react';

export interface OutlineProjectProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineProject: React.FC<OutlineProjectProps> = ({ 
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
    <path fill="currentColor" d="M6.49734 10.2482V8.25186C6.49734 7.88057 6.88775 7.6388 7.22015 7.80425L9.22548 8.8024C9.59508 8.98637 9.59508 9.51366 9.22548 9.69763L7.22015 10.6958C6.88775 10.8612 6.49734 10.6195 6.49734 10.2482Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V5H6.23087L5.18055 3.5H3.75ZM9.87147 5H7.45164L6.40133 3.5H8.82116L9.87147 5ZM11.0922 5H12.5V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H10.0419L11.0922 5ZM12.5 6H3.5V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V6Z" />
  </svg>
);

OutlineProject.displayName = 'OutlineProject';

export default OutlineProject;
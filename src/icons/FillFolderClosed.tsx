import React from 'react';

export interface FillFolderClosedProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillFolderClosed: React.FC<FillFolderClosedProps> = ({ 
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
    <path fill="currentColor" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H6.76393C7.03561 2 7.30356 2.06325 7.54656 2.18475L9.12426 2.97361C9.15898 2.99096 9.19726 3 9.23607 3H13.25C14.2165 3 15 3.7835 15 4.75V12.25C15 13.2165 14.2165 14 13.25 14H3.75C2.7835 14 2 13.2165 2 12.25V7.5H15V6H2V3.75Z" />
  </svg>
);

FillFolderClosed.displayName = 'FillFolderClosed';

export default FillFolderClosed;
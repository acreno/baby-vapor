import React from 'react';

export interface FillBlankProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillBlank: React.FC<FillBlankProps> = ({ 
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
    <path fill="currentColor" d="M3 2.75C3 1.7835 3.7835 1 4.75 1H8V4.75C8 5.7165 8.7835 6.5 9.75 6.5H13V12.25C13 13.2165 12.2165 14 11.25 14H4.75C3.7835 14 3 13.2165 3 12.25V2.75Z" />
    <path fill="currentColor" d="M12.9503 5C12.875 4.6909 12.7161 4.40545 12.4874 4.17678L9.82322 1.51256C9.72507 1.41441 9.61645 1.32912 9.5 1.25778V4.75C9.5 4.88807 9.61193 5 9.75 5H12.9503Z" />
  </svg>
);

FillBlank.displayName = 'FillBlank';

export default FillBlank;
import React from 'react';

export interface FillBlankBrokenProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillBlankBroken: React.FC<FillBlankBrokenProps> = ({ 
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
    <path fill="currentColor" d="M4.75 1C3.7835 1 3 1.7835 3 2.75V10.3516L6.06061 8.13908C6.28706 7.97537 6.58576 7.95113 6.83565 8.07618L9.43265 9.37584L13 6.79739V6.5H9.75C8.7835 6.5 8 5.7165 8 4.75V1H4.75Z" />
    <path fill="currentColor" d="M13 8.64819L9.94289 10.8578C9.71644 11.0215 9.41777 11.0457 9.16789 10.9207L6.57093 9.62106L3 12.2025V12.25C3 13.2165 3.7835 14 4.75 14H11.25C12.2165 14 13 13.2165 13 12.25V8.64819Z" />
    <path fill="currentColor" d="M12.4874 4.17678C12.7161 4.40545 12.875 4.6909 12.9503 5H9.75C9.61193 5 9.5 4.88807 9.5 4.75V1.25778C9.61645 1.32912 9.72507 1.41441 9.82322 1.51256L12.4874 4.17678Z" />
  </svg>
);

FillBlankBroken.displayName = 'FillBlankBroken';

export default FillBlankBroken;
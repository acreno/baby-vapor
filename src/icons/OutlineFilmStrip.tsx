import React from 'react';

export interface OutlineFilmStripProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFilmStrip: React.FC<OutlineFilmStripProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V6H5V3.5H3.75ZM3.5 9V7H5V9H3.5ZM3.5 10V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H5V10H3.5ZM10 12.5H6V3.5H10V12.5ZM11 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V10H11V12.5ZM11 9V7H12.5V9H11ZM11 6H12.5V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H11V6Z" />
  </svg>
);

OutlineFilmStrip.displayName = 'OutlineFilmStrip';

export default OutlineFilmStrip;
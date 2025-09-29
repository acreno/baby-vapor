import React from 'react';

export interface OutlineCustomFieldCheckProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldCheck: React.FC<OutlineCustomFieldCheckProps> = ({ 
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
    <path fill="currentColor" d="M10.89 6.1412C11.106 5.78775 10.9945 5.32614 10.6411 5.11015C10.2877 4.89415 9.82604 5.00558 9.61005 5.35902L7.31918 9.10773L6.23789 8.18162C5.9233 7.91217 5.44984 7.94876 5.18039 8.26336C4.91094 8.57796 4.94754 9.05142 5.26213 9.32087L7.01213 10.8197C7.17903 10.9627 7.40023 11.0252 7.61728 10.9909C7.83433 10.9565 8.02539 10.8287 8.13998 10.6412L10.89 6.1412Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75Z" />
  </svg>
);

OutlineCustomFieldCheck.displayName = 'OutlineCustomFieldCheck';

export default OutlineCustomFieldCheck;
import React from 'react';

export interface OutlinePhoneMobileProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePhoneMobile: React.FC<OutlinePhoneMobileProps> = ({ 
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
    <path fill="currentColor" d="M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.75 1C3.7835 1 3 1.7835 3 2.75V13.25C3 14.2165 3.7835 15 4.75 15H11.25C12.2165 15 13 14.2165 13 13.25V2.75C13 1.7835 12.2165 1 11.25 1H4.75ZM4.5 2.75C4.5 2.61193 4.61193 2.5 4.75 2.5H11.25C11.3881 2.5 11.5 2.61193 11.5 2.75V13.25C11.5 13.3881 11.3881 13.5 11.25 13.5H4.75C4.61193 13.5 4.5 13.3881 4.5 13.25V2.75Z" />
  </svg>
);

OutlinePhoneMobile.displayName = 'OutlinePhoneMobile';

export default OutlinePhoneMobile;
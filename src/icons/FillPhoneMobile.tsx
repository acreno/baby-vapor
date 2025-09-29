import React from 'react';

export interface FillPhoneMobileProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPhoneMobile: React.FC<FillPhoneMobileProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3 2.75C3 1.7835 3.7835 1 4.75 1H11.25C12.2165 1 13 1.7835 13 2.75V13.25C13 14.2165 12.2165 15 11.25 15H4.75C3.7835 15 3 14.2165 3 13.25V2.75ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" />
  </svg>
);

FillPhoneMobile.displayName = 'FillPhoneMobile';

export default FillPhoneMobile;
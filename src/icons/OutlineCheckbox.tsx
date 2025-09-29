import React from 'react';

export interface OutlineCheckboxProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCheckbox: React.FC<OutlineCheckboxProps> = ({ 
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
    <path fill="currentColor" d="M10.7096 7.3445C11.0379 7.09194 11.0993 6.62106 10.8468 6.29274C10.5942 5.96443 10.1233 5.90302 9.795 6.15558L7.11543 8.21686L6.32499 7.27302C6.05905 6.95546 5.58602 6.91362 5.26846 7.17957C4.9509 7.44551 4.90906 7.91854 5.175 8.2361L6.42741 9.73158C6.6856 10.0399 7.14098 10.0897 7.4597 9.8445L10.7096 7.3445Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75Z" />
  </svg>
);

OutlineCheckbox.displayName = 'OutlineCheckbox';

export default OutlineCheckbox;
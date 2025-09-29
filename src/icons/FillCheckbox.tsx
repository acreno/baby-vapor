import React from 'react';

export interface FillCheckboxProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillCheckbox: React.FC<FillCheckboxProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.00115 3.75C2.00115 2.7835 2.78465 2 3.75115 2H12.2511C13.2176 2 14.0011 2.7835 14.0011 3.75V12.25C14.0011 13.2165 13.2176 14 12.2511 14H3.75115C2.78465 14 2.00115 13.2165 2.00115 12.25V3.75ZM10.7096 7.3445C11.0379 7.09194 11.0993 6.62106 10.8468 6.29274C10.5942 5.96443 10.1233 5.90302 9.795 6.15558L7.11543 8.21686L6.325 7.27302C6.05905 6.95546 5.58602 6.91362 5.26846 7.17957C4.9509 7.44551 4.90906 7.91854 5.17501 8.2361L6.42742 9.73158C6.6856 10.0399 7.14098 10.0897 7.45971 9.8445L10.7096 7.3445Z" />
  </svg>
);

FillCheckbox.displayName = 'FillCheckbox';

export default FillCheckbox;
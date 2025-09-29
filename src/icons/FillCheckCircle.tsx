import React from 'react';

export interface FillCheckCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillCheckCircle: React.FC<FillCheckCircleProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM10.7096 7.3445C11.0379 7.09194 11.0993 6.62106 10.8468 6.29274C10.5942 5.96443 10.1233 5.90302 9.79501 6.15558L7.11543 8.21686L6.325 7.27302C6.05905 6.95546 5.58602 6.91362 5.26846 7.17957C4.9509 7.44551 4.90906 7.91854 5.17501 8.2361L6.42742 9.73158C6.6856 10.0399 7.14098 10.0897 7.45971 9.8445L10.7096 7.3445Z" />
  </svg>
);

FillCheckCircle.displayName = 'FillCheckCircle';

export default FillCheckCircle;
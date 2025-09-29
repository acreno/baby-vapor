import React from 'react';

export interface FillCardProProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillCardPro: React.FC<FillCardProProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M4.16666 3.83333C4.16666 2.82081 4.98747 2 5.99999 2H9.99999C11.0125 2 11.8333 2.82081 11.8333 3.83333V12.1667C11.8333 13.1792 11.0125 14 9.99999 14H5.99999C4.98747 14 4.16666 13.1792 4.16666 12.1667V3.83333ZM5.99999 3C5.53975 3 5.16666 3.3731 5.16666 3.83333V12.1667C5.16666 12.6269 5.53975 13 5.99999 13H9.99999C10.4602 13 10.8333 12.6269 10.8333 12.1667V3.83333C10.8333 3.3731 10.4602 3 9.99999 3H5.99999Z"
         />
  </svg>
);

FillCardPro.displayName = 'FillCardPro';

export default FillCardPro;
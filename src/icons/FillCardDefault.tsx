import React from 'react';

export interface FillCardDefaultProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillCardDefault: React.FC<FillCardDefaultProps> = ({ 
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
        d="M2.16666 5.83333C2.16666 4.82081 2.98747 4 3.99999 4H12C13.0125 4 13.8333 4.82081 13.8333 5.83333V10.1667C13.8333 11.1792 13.0125 12 12 12H3.99999C2.98747 12 2.16666 11.1792 2.16666 10.1667V5.83333ZM3.99999 5C3.53975 5 3.16666 5.3731 3.16666 5.83333V10.1667C3.16666 10.6269 3.53975 11 3.99999 11H12C12.4602 11 12.8333 10.6269 12.8333 10.1667V5.83333C12.8333 5.3731 12.4602 5 12 5H3.99999Z"
         />
  </svg>
);

FillCardDefault.displayName = 'FillCardDefault';

export default FillCardDefault;
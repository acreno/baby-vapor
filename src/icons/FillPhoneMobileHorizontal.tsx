import React from 'react';

export interface FillPhoneMobileHorizontalProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPhoneMobileHorizontal: React.FC<FillPhoneMobileHorizontalProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.25 3.48999C14.2165 3.48999 15 4.27349 15 5.23999V11.74C15 12.6462 14.3113 13.3917 13.4287 13.4812L13.25 13.49H2.75C1.7835 13.49 1 12.7065 1 11.74V5.23999C1 4.27349 1.7835 3.48999 2.75 3.48999H13.25ZM12 7.48999C11.4477 7.48999 11 7.93771 11 8.48999C11 9.04228 11.4477 9.48999 12 9.48999C12.5523 9.48999 13 9.04227 13 8.48999C13 7.93771 12.5523 7.48999 12 7.48999Z" />
  </svg>
);

FillPhoneMobileHorizontal.displayName = 'FillPhoneMobileHorizontal';

export default FillPhoneMobileHorizontal;
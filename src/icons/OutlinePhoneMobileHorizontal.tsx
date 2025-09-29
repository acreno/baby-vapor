import React from 'react';

export interface OutlinePhoneMobileHorizontalProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePhoneMobileHorizontal: React.FC<OutlinePhoneMobileHorizontalProps> = ({ 
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
    <path fill="currentColor" d="M11 7.48999C11.5523 7.48999 12 7.93771 12 8.48999C12 9.04227 11.5523 9.48999 11 9.48999C10.4477 9.48999 10 9.04228 10 8.48999C10 7.93771 10.4477 7.48999 11 7.48999Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.25 3.48999C14.2165 3.48999 15 4.27349 15 5.23999V11.74C15 12.6462 14.3113 13.3917 13.4287 13.4812L13.25 13.49H2.75C1.7835 13.49 1 12.7065 1 11.74V5.23999C1 4.27349 1.7835 3.48999 2.75 3.48999H13.25ZM2.75 4.98999C2.61193 4.98999 2.5 5.10192 2.5 5.23999V11.74C2.5 11.8781 2.61193 11.99 2.75 11.99H13.25L13.3008 11.9851C13.4145 11.9617 13.5 11.8607 13.5 11.74V5.23999C13.5 5.10192 13.3881 4.98999 13.25 4.98999H2.75Z" />
  </svg>
);

OutlinePhoneMobileHorizontal.displayName = 'OutlinePhoneMobileHorizontal';

export default OutlinePhoneMobileHorizontal;
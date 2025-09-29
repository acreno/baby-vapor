import React from 'react';

export interface FillPartialProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPartial: React.FC<FillPartialProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11,11.8c-0.8,0.7-1.9,1.1-3,1.1c-2.7,0-4.9-2.2-4.9-4.9c0-1.1,0.4-2.2,1.1-3l6.7,6.7C11,11.7,11,11.8,11,11.8z
	 M11.8,11c0,0-0.1-0.1-0.1-0.1L5,4.2c0.8-0.7,1.9-1.1,3-1.1c2.7,0,4.9,2.2,4.9,4.9C12.9,9.2,12.5,10.2,11.8,11z M14,8
	c0,3.3-2.7,6-6,6c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6C11.3,2,14,4.7,14,8z" />
  </svg>
);

FillPartial.displayName = 'FillPartial';

export default FillPartial;
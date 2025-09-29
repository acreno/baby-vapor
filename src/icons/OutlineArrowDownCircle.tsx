import React from 'react';

export interface OutlineArrowDownCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowDownCircle: React.FC<OutlineArrowDownCircleProps> = ({ 
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
    <path fill="currentColor" d="M8.75 9.29545L9.69255 8.24826C9.96965 7.94038 10.4439 7.91544 10.7517 8.19255C11.0596 8.46965 11.0846 8.94387 10.8075 9.25174L8.55729 11.7517C8.41505 11.9098 8.21243 12 7.99981 12C7.7872 12 7.58458 11.9097 7.44235 11.7517L5.19251 9.2517C4.91543 8.94381 4.9404 8.46959 5.2483 8.19251C5.55619 7.91543 6.03041 7.9404 6.30749 8.2483L7.25 9.29561L7.25 4.74994C7.25 4.33573 7.58579 3.99994 8 3.99994C8.41421 3.99994 8.75 4.33573 8.75 4.74994L8.75 9.29545Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8Z" />
  </svg>
);

OutlineArrowDownCircle.displayName = 'OutlineArrowDownCircle';

export default OutlineArrowDownCircle;
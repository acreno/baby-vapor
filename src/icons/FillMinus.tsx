import React from 'react';

export interface FillMinusProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillMinus: React.FC<FillMinusProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7 14C7 13.5858 7.33579 13.25 7.75 13.25H20.25C20.6642 13.25 21 13.5858 21 14C21 14.4142 20.6642 14.75 20.25 14.75H7.75C7.33579 14.75 7 14.4142 7 14Z" />
  </svg>
);

FillMinus.displayName = 'FillMinus';

export default FillMinus;
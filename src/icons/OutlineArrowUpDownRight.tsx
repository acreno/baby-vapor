import React from 'react';

export interface OutlineArrowUpDownRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowUpDownRight: React.FC<OutlineArrowUpDownRightProps> = ({ 
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
    <path fill="currentColor" d="M3.22333 3.21845C3.36398 3.0778 3.55475 2.99878 3.75366 2.99878H7.25006C7.66427 2.99878 8.00006 3.33457 8.00006 3.74878C8.00006 4.16299 7.66427 4.49878 7.25006 4.49878H5.5595L11.5001 10.4393V8.75C11.5001 8.33579 11.8358 8 12.2501 8C12.6643 8 13.0001 8.33579 13.0001 8.75V12.25C13.0001 12.4489 12.921 12.6397 12.7804 12.7803C12.6397 12.921 12.449 13 12.2501 13L8.75006 13C8.33585 13 8.00006 12.6642 8.00006 12.25C8.00006 11.8358 8.33585 11.5 8.75006 11.5L10.4394 11.5L4.50366 5.56426V7.25072C4.50366 7.66493 4.16788 8.00072 3.75366 8.00072C3.33945 8.00072 3.00366 7.66493 3.00366 7.25072V3.74878C3.00366 3.54987 3.08268 3.3591 3.22333 3.21845Z" />
  </svg>
);

OutlineArrowUpDownRight.displayName = 'OutlineArrowUpDownRight';

export default OutlineArrowUpDownRight;
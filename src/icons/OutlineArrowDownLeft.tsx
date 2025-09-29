import React from 'react';

export interface OutlineArrowDownLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowDownLeft: React.FC<OutlineArrowDownLeftProps> = ({ 
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
    <path fill="currentColor" d="M6.563 10.4962L9.25391 10.4963C9.66812 10.4963 10.0039 10.832 10.0039 11.2463C10.0039 11.6605 9.66811 11.9963 9.25389 11.9963L4.74999 11.9962C4.33578 11.9962 4 11.6604 4 11.2462V6.75273C4 6.33851 4.33579 6.00273 4.75 6.00273C5.16421 6.00273 5.5 6.33851 5.5 6.75273L5.5 9.43791L10.7197 4.2196C11.0127 3.92674 11.4875 3.92681 11.7804 4.21974C12.0732 4.51268 12.0732 4.98755 11.7803 5.2804L6.563 10.4962Z" />
  </svg>
);

OutlineArrowDownLeft.displayName = 'OutlineArrowDownLeft';

export default OutlineArrowDownLeft;
import React from 'react';

export interface OutlineChevronUpDownProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineChevronUpDown: React.FC<OutlineChevronUpDownProps> = ({ 
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
    <path fill="currentColor" d="M4.49998 6.50002L8.00006 3.80941L11.5 6.50002"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill="currentColor" d="M11.5 9.50001L7.99994 12.1906L4.49998 9.50001"  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

OutlineChevronUpDown.displayName = 'OutlineChevronUpDown';

export default OutlineChevronUpDown;
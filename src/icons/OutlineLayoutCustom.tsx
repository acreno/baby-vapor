import React from 'react';

export interface OutlineLayoutCustomProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineLayoutCustom: React.FC<OutlineLayoutCustomProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 3C2.33579 3 2 3.33579 2 3.75V12.25C2 12.6642 2.33579 13 2.75 13H6.25C6.66421 13 7 12.6642 7 12.25V3.75C7 3.33579 6.66421 3 6.25 3H2.75ZM3.5 11.5V4.5H5.5V11.5H3.5ZM9 3.75C9 3.33579 9.33579 3 9.75 3H13.25C13.6642 3 14 3.33579 14 3.75V7.25C14 7.66421 13.6642 8 13.25 8H9.75C9.55109 8 9.36032 7.92098 9.21967 7.78033C9.07902 7.63968 9 7.44891 9 7.25V3.75ZM10.5 4.5V6.5H12.5V4.5H10.5ZM9.75 9H13.25C13.6642 9 14 9.33579 14 9.75V12.25C14 12.6642 13.6642 13 13.25 13H9.75C9.33579 13 9 12.6642 9 12.25V9.75C9 9.33579 9.33579 9 9.75 9ZM10.5 10.5V11.5H12.5V10.5H10.5Z" />
  </svg>
);

OutlineLayoutCustom.displayName = 'OutlineLayoutCustom';

export default OutlineLayoutCustom;
import React from 'react';

export interface OutlineArrowCurvedUpLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowCurvedUpLeft: React.FC<OutlineArrowCurvedUpLeftProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.75275 4.19409C6.06112 3.91754 6.53529 3.94334 6.81184 4.25172C7.08839 4.56009 7.06259 5.03426 6.75421 5.31081L5.70692 6.25001H9.25147C10.7702 6.25001 12.0015 7.48123 12.0015 9.00001V10.2516C12.0015 10.6658 11.6657 11.0016 11.2515 11.0016C10.8373 11.0016 10.5015 10.6658 10.5015 10.2516V9.00001C10.5015 8.30965 9.94182 7.75001 9.25147 7.75001H5.70764L6.75512 8.69246C7.06304 8.96951 7.08807 9.44373 6.81102 9.75165C6.53397 10.0596 6.05976 10.0846 5.75184 9.80755L3.24836 7.55509C3.09012 7.41271 2.99983 7.2098 3 6.99693C3.00017 6.78407 3.09079 6.5813 3.24927 6.43918L5.75275 4.19409Z" />
  </svg>
);

OutlineArrowCurvedUpLeft.displayName = 'OutlineArrowCurvedUpLeft';

export default OutlineArrowCurvedUpLeft;
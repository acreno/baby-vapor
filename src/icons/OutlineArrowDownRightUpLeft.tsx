import React from 'react';

export interface OutlineArrowDownRightUpLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowDownRightUpLeft: React.FC<OutlineArrowDownRightUpLeftProps> = ({ 
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
    <path fill="currentColor" d="M6.5 5.43945V3.74902C6.5 3.33481 6.83579 2.99902 7.25 2.99902C7.66421 2.99902 8 3.33481 8 3.74902V7.24989C8 7.4488 7.92098 7.63956 7.78033 7.78022C7.63968 7.92087 7.44891 7.99989 7.25 7.99989H3.75328C3.33906 7.99989 3.00328 7.6641 3.00328 7.24989C3.00328 6.83567 3.33906 6.49989 3.75328 6.49989H5.43912L3.22079 4.2817C2.92788 3.98882 2.92787 3.51394 3.22075 3.22104C3.51363 2.92814 3.98851 2.92812 4.28141 3.221L6.5 5.43945Z" />
    <path fill="currentColor" d="M9.5 10.5608L9.5 12.2499C9.5 12.6641 9.16421 12.9999 8.75 12.9999C8.33579 12.9999 8 12.6641 8 12.2499L8 8.74989C8 8.33567 8.33579 7.99989 8.75 7.99989H12.25C12.6642 7.99989 13 8.33567 13 8.74989C13 9.1641 12.6642 9.49989 12.25 9.49989H10.5604L12.7771 11.7165C13.07 12.0094 13.0701 12.4843 12.7772 12.7772C12.4843 13.0701 12.0094 13.0701 11.7165 12.7772L9.5 10.5608Z" />
  </svg>
);

OutlineArrowDownRightUpLeft.displayName = 'OutlineArrowDownRightUpLeft';

export default OutlineArrowDownRightUpLeft;
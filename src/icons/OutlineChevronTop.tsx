import React from 'react';

export interface OutlineChevronTopProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineChevronTop: React.FC<OutlineChevronTopProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.8015 9.75767C11.5206 10.0621 11.0461 10.0811 10.7417 9.80018L7.99973 7.26965L5.25834 9.80013C4.95398 10.0811 4.47948 10.0621 4.19853 9.75773C3.91758 9.45336 3.93656 8.97887 4.24093 8.69792L7.49097 5.69792C7.77824 5.43274 8.22103 5.43272 8.50833 5.69787L11.759 8.69787C12.0634 8.97879 12.0824 9.45328 11.8015 9.75767Z" />
  </svg>
);

OutlineChevronTop.displayName = 'OutlineChevronTop';

export default OutlineChevronTop;
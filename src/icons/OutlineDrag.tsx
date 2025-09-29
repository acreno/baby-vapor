import React from 'react';

export interface OutlineDragProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineDrag: React.FC<OutlineDragProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 5C2.33579 5 2 5.33579 2 5.75C2 6.16421 2.33579 6.5 2.75 6.5H13.25C13.6642 6.5 14 6.16421 14 5.75C14 5.33579 13.6642 5 13.25 5H2.75ZM2.75 9C2.33579 9 2 9.33579 2 9.75C2 10.1642 2.33579 10.5 2.75 10.5H13.25C13.6642 10.5 14 10.1642 14 9.75C14 9.33579 13.6642 9 13.25 9H2.75Z" />
  </svg>
);

OutlineDrag.displayName = 'OutlineDrag';

export default OutlineDrag;
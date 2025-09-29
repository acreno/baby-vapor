import React from 'react';

export interface FillPauseProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPause: React.FC<FillPauseProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.75 3C4.33579 3 4 3.33579 4 3.75V12.25C4 12.6642 4.33579 13 4.75 13H6.25C6.66421 13 7 12.6642 7 12.25V3.75C7 3.33579 6.66421 3 6.25 3H4.75ZM9.75 3C9.33579 3 9 3.33579 9 3.75V12.25C9 12.6642 9.33579 13 9.75 13H11.25C11.6642 13 12 12.6642 12 12.25V3.75C12 3.33579 11.6642 3 11.25 3H9.75Z" />
  </svg>
);

FillPause.displayName = 'FillPause';

export default FillPause;
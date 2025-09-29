import React from 'react';

export interface FillStopCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillStopCircle: React.FC<FillStopCircleProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6.75 6C6.33579 6 6 6.33579 6 6.75V9.25C6 9.66421 6.33579 10 6.75 10H9.25C9.66421 10 10 9.66421 10 9.25V6.75C10 6.33579 9.66421 6 9.25 6H6.75Z" />
  </svg>
);

FillStopCircle.displayName = 'FillStopCircle';

export default FillStopCircle;
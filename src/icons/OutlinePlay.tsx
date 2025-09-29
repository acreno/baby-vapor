import React from 'react';

export interface OutlinePlayProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePlay: React.FC<OutlinePlayProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.87714 4.53668C5.71049 4.43824 5.5 4.55838 5.5 4.75193V11.2478C5.5 11.4414 5.71049 11.5615 5.87714 11.4631L11.376 8.21509C11.5398 8.11833 11.5398 7.88133 11.376 7.78458L5.87714 4.53668ZM4 4.75193C4 3.39706 5.4734 2.5561 6.63998 3.24514L12.1389 6.49304C13.2856 7.17032 13.2856 8.82932 12.1389 9.50662L6.64 12.7546C5.47342 13.4436 4 12.6027 4 11.2478V4.75193Z" />
  </svg>
);

OutlinePlay.displayName = 'OutlinePlay';

export default OutlinePlay;
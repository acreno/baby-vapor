import React from 'react';

export interface FillPlayProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPlay: React.FC<FillPlayProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.63998 3.24514C5.4734 2.5561 4 3.39706 4 4.75193V11.2478C4 12.6027 5.47342 13.4436 6.64 12.7546L12.1389 9.50662C13.2856 8.82932 13.2856 7.17032 12.1389 6.49304L6.63998 3.24514Z" />
  </svg>
);

FillPlay.displayName = 'FillPlay';

export default FillPlay;
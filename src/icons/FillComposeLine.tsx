import React from 'react';

export interface FillComposeLineProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillComposeLine: React.FC<FillComposeLineProps> = ({ 
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
    <path fill="currentColor" d="M11.297 3.28938C11.6875 2.89905 12.3206 2.89892 12.711 3.28938C13.1013 3.67986 13.1013 4.31297 12.711 4.70344L4.70711 12.7073C4.31663 13.0976 3.68352 13.0976 3.29305 12.7073C2.90258 12.3169 2.9027 11.6838 3.29305 11.2933L11.297 3.28938Z" />
  </svg>
);

FillComposeLine.displayName = 'FillComposeLine';

export default FillComposeLine;
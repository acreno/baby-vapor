import React from 'react';

export interface OutlineTuneProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTune: React.FC<OutlineTuneProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 2C8.69378 2 7.58254 2.83481 7.17071 4H1.75C1.33579 4 1 4.33579 1 4.75C1 5.16421 1.33579 5.5 1.75 5.5H7.04148C7.27952 6.91886 8.5135 8 10 8C11.4865 8 12.7205 6.91886 12.9585 5.5H14.2458C14.6601 5.5 14.9958 5.16421 14.9958 4.75C14.9958 4.33579 14.6601 4 14.2458 4H12.8293C12.4175 2.83481 11.3062 2 10 2ZM8.5 5C8.5 4.17157 9.17157 3.5 10 3.5C10.8284 3.5 11.5 4.17157 11.5 5C11.5 5.82843 10.8284 6.5 10 6.5C9.17157 6.5 8.5 5.82843 8.5 5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.82393 10C8.41113 8.83659 7.30079 8.00342 5.99585 8.00342C4.69091 8.00342 3.58057 8.83659 3.16777 10H1.75C1.33579 10 1 10.3358 1 10.75C1 11.1642 1.33579 11.5 1.75 11.5H3.03676C3.27339 12.9205 4.50816 14.0034 5.99585 14.0034C7.48354 14.0034 8.71831 12.9205 8.95494 11.5H14.2458C14.6601 11.5 14.9958 11.1642 14.9958 10.75C14.9958 10.3358 14.6601 10 14.2458 10H8.82393ZM7.49585 11.0034C7.49585 10.175 6.82428 9.50342 5.99585 9.50342C5.16742 9.50342 4.49585 10.175 4.49585 11.0034C4.49585 11.8318 5.16742 12.5034 5.99585 12.5034C6.82428 12.5034 7.49585 11.8318 7.49585 11.0034Z" />
  </svg>
);

OutlineTune.displayName = 'OutlineTune';

export default OutlineTune;
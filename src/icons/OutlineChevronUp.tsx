import React from 'react';

export interface OutlineChevronUpProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineChevronUp: React.FC<OutlineChevronUpProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.46968 5.71772C7.76257 5.42482 8.23744 5.42482 8.53034 5.71772L12.0323 9.21968C12.3252 9.51257 12.3252 9.98744 12.0323 10.2803C11.7394 10.5732 11.2645 10.5732 10.9716 10.2803L8.00001 7.30871L5.02838 10.2803C4.73548 10.5732 4.26061 10.5732 3.96772 10.2803C3.67482 9.98744 3.67482 9.51257 3.96772 9.21968L7.46968 5.71772Z" />
  </svg>
);

OutlineChevronUp.displayName = 'OutlineChevronUp';

export default OutlineChevronUp;
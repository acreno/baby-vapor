import React from 'react';

export interface OutlineFullscreenDefaultProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFullscreenDefault: React.FC<OutlineFullscreenDefaultProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.75 3C8.33579 3 8 3.33579 8 3.75C8 4.16421 8.33579 4.5 8.75 4.5H11.5V7.25C11.5 7.66421 11.8358 8 12.25 8C12.6642 8 13 7.66421 13 7.25V3.75C13 3.33579 12.6642 3 12.25 3H8.75ZM7.25 13C7.66421 13 8 12.6642 8 12.25C8 11.8358 7.66421 11.5 7.25 11.5H4.5L4.5 8.75C4.5 8.33579 4.16421 8 3.75 8C3.33579 8 3 8.33579 3 8.75V12.25C3 12.6642 3.33579 13 3.75 13H7.25Z" />
  </svg>
);

OutlineFullscreenDefault.displayName = 'OutlineFullscreenDefault';

export default OutlineFullscreenDefault;
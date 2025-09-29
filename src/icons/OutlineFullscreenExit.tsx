import React from 'react';

export interface OutlineFullscreenExitProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFullscreenExit: React.FC<OutlineFullscreenExitProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.2544 7C12.6686 7 13.0044 6.66421 13.0044 6.25C13.0044 5.83579 12.6686 5.5 12.2544 5.5L10.5071 5.5V3.75269C10.5071 3.33847 10.1713 3.00269 9.75707 3.00269C9.34286 3.00269 9.00707 3.33847 9.00707 3.75269V6.25C9.00707 6.66421 9.34286 7 9.75707 7L12.2544 7ZM3.75 9.00269C3.33579 9.00269 3 9.33847 3 9.75269C3 10.1669 3.33579 10.5027 3.75 10.5027H5.49732V12.25C5.49732 12.6642 5.83311 13 6.24732 13C6.66154 13 6.99732 12.6642 6.99732 12.25V9.75269C6.99732 9.33847 6.66154 9.00269 6.24732 9.00269H3.75Z" />
  </svg>
);

OutlineFullscreenExit.displayName = 'OutlineFullscreenExit';

export default OutlineFullscreenExit;
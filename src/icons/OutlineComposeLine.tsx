import React from 'react';

export interface OutlineComposeLineProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineComposeLine: React.FC<OutlineComposeLineProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.7803 3.21967C13.0732 3.51256 13.0732 3.98744 12.7803 4.28033L4.28033 12.7803C3.98744 13.0732 3.51256 13.0732 3.21967 12.7803C2.92678 12.4874 2.92678 12.0126 3.21967 11.7197L11.7197 3.21967C12.0126 2.92678 12.4874 2.92678 12.7803 3.21967Z" />
  </svg>
);

OutlineComposeLine.displayName = 'OutlineComposeLine';

export default OutlineComposeLine;
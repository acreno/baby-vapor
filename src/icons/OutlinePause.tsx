import React from 'react';

export interface OutlinePauseProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePause: React.FC<OutlinePauseProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3C3.55964 3 3 3.55964 3 4.25V11.75C3 12.4404 3.55964 13 4.25 13H5.75C6.44036 13 7 12.4404 7 11.75V4.25C7 3.55964 6.44036 3 5.75 3H4.25ZM4.5 11.5V4.5H5.5V11.5H4.5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.25 3C9.55964 3 9 3.55964 9 4.25V11.75C9 12.4404 9.55964 13 10.25 13H11.75C12.4404 13 13 12.4404 13 11.75V4.25C13 3.55964 12.4404 3 11.75 3H10.25ZM10.5 11.5V4.5H11.5V11.5H10.5Z" />
  </svg>
);

OutlinePause.displayName = 'OutlinePause';

export default OutlinePause;
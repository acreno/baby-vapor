import React from 'react';

export interface OutlineGlobeAlt2Props {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineGlobeAlt2: React.FC<OutlineGlobeAlt2Props> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.9 2.8C12 3.6 13.5 5.6 13.5 8C13.5 9.5 12.9 10.9 11.9 11.9V11.7C11.9 11 11.3 10.4 10.6 10.4C10.2 10.4 10 10.1 10 9.8L9.6 8.7C9.6 8.3 9.3 8.1 9 8.1L6.7 7.9C6.3 7.9 6.1 7.6 6.1 7.3C6.1 6.9 6.4 6.7 6.7 6.7C7 6.7 7.3 6.4 7.3 6.1V5.3C7.3 4.9 7.6 4.7 7.9 4.7H8.5C9.2 4.7 9.8 4.1 9.8 3.4V2.8H9.9ZM7 13.4V11.7C6.3 11.7 6.1 11.1 6.1 10.4C6.1 10 6 9.6 5.7 9.2L5.4 8.9C4.8 8 4 7.2 3.1 6.6L2.8 6.3C2.6 6.9 2.5 7.4 2.5 8C2.5 10.7 4.4 12.9 7 13.4ZM15 8C15 4.1 11.9 1 8 1C4.1 1 1 4.1 1 8C1 11.9 4.1 15 8 15C11.9 15 15 11.9 15 8Z" />
  </svg>
);

OutlineGlobeAlt2.displayName = 'OutlineGlobeAlt2';

export default OutlineGlobeAlt2;
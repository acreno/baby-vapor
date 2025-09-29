import React from 'react';

export interface OutlineCollapseProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCollapse: React.FC<OutlineCollapseProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M8.16667 6.66667C8.03406 6.66667 7.90688 6.61399 7.81311 6.52023L6.14645 4.85356C5.95118 4.6583 5.95118 4.34171 6.14645 4.14645C6.34171 3.95119 6.65829 3.95119 6.85355 4.14645L8.16667 5.45956L9.47978 4.14645C9.67504 3.95119 9.99162 3.95119 10.1869 4.14645C10.3821 4.34171 10.3821 4.6583 10.1869 4.85356L8.52022 6.52023C8.42645 6.61399 8.29927 6.66667 8.16667 6.66667Z"
         />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M8.16667 9.33334C8.03406 9.33334 7.90688 9.38602 7.81311 9.47979L6.14645 11.1465C5.95118 11.3417 5.95118 11.6583 6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536L8.16667 10.5405L9.47978 11.8536C9.67504 12.0488 9.99162 12.0488 10.1869 11.8536C10.3821 11.6583 10.3821 11.3417 10.1869 11.1465L8.52022 9.47979C8.42645 9.38602 8.29927 9.33334 8.16667 9.33334Z"
         />
  </svg>
);

OutlineCollapse.displayName = 'OutlineCollapse';

export default OutlineCollapse;
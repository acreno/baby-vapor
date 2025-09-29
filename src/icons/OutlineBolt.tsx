import React from 'react';

export interface OutlineBoltProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineBolt: React.FC<OutlineBoltProps> = ({ 
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
    <path fill="currentColor" d="M6.99791 1C6.71405 1 6.45454 1.16042 6.32753 1.41442L3.07715 7.91442C2.96089 8.14691 2.97326 8.42306 3.10983 8.64422C3.2464 8.86538 3.4877 9 3.74753 9H5.51143L4.02987 14.042C3.93076 14.3793 4.07912 14.7402 4.38674 14.9102C4.69435 15.0801 5.07865 15.0134 5.31113 14.7498L12.8104 6.24622C13.0054 6.02513 13.0528 5.71026 12.9316 5.44151C12.8103 5.17276 12.543 5 12.2483 5H10.4596L11.9162 2.08541C12.0323 1.85292 12.0199 1.57681 11.8833 1.3557C11.7468 1.13459 11.5055 1 11.2457 1H6.99791Z" />
  </svg>
);

OutlineBolt.displayName = 'OutlineBolt';

export default OutlineBolt;
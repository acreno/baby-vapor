import React from 'react';

export interface OutlineArrowDownLeftUpRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowDownLeftUpRight: React.FC<OutlineArrowDownLeftUpRightProps> = ({ 
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
    <path fill="currentColor" d="M12.7804 4.2803C13.0732 3.98738 13.0732 3.51251 12.7803 3.21964C12.4874 2.92676 12.0125 2.92679 11.7196 3.2197L9.5 5.43961V3.75304C9.5 3.33882 9.16421 3.00304 8.75 3.00304C8.33579 3.00304 8 3.33882 8 3.75304V7.25008C8 7.449 8.07902 7.63976 8.21967 7.78041C8.36032 7.92107 8.55109 8.00008 8.75 8.00008H12.25C12.6642 8.00008 13 7.6643 13 7.25008C13 6.83587 12.6642 6.50008 12.25 6.50008H10.5608L12.7804 4.2803Z" />
    <path fill="currentColor" d="M6.5 10.5609L4.28032 12.7804C3.98741 13.0732 3.51254 13.0732 3.21966 12.7803C2.92678 12.4874 2.9268 12.0125 3.21971 11.7196L5.43949 9.50008H3.75C3.33579 9.50008 3 9.1643 3 8.75008C3 8.33587 3.33579 8.00008 3.75 8.00008H7.25C7.44891 8.00008 7.63968 8.0791 7.78033 8.21975C7.92098 8.36041 8 8.55117 8 8.75008V12.2501C8 12.6643 7.66421 13.0001 7.25 13.0001C6.83579 13.0001 6.5 12.6643 6.5 12.2501V10.5609Z" />
  </svg>
);

OutlineArrowDownLeftUpRight.displayName = 'OutlineArrowDownLeftUpRight';

export default OutlineArrowDownLeftUpRight;
import React from 'react';

export interface OutlineArrowUpRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowUpRight: React.FC<OutlineArrowUpRightProps> = ({ 
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
    <path fill="currentColor" d="M12 4.75C12 4.55108 11.921 4.36031 11.7803 4.21966C11.6397 4.07901 11.4489 3.99999 11.25 4L6.75359 4.00014C6.33938 4.00015 6.0036 4.33595 6.00362 4.75016C6.00363 5.16437 6.33943 5.50015 6.75364 5.50014L9.43905 5.50006L4.21967 10.7194C3.92678 11.0123 3.92678 11.4872 4.21967 11.7801C4.51256 12.073 4.98744 12.073 5.28033 11.7801L10.5 6.56044L10.5 9.25268C10.5 9.66689 10.8358 10.0027 11.25 10.0027C11.6642 10.0027 12 9.66689 12 9.25268L12 4.75Z" />
  </svg>
);

OutlineArrowUpRight.displayName = 'OutlineArrowUpRight';

export default OutlineArrowUpRight;
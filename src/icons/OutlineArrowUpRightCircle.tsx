import React from 'react';

export interface OutlineArrowUpRightCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowUpRightCircle: React.FC<OutlineArrowUpRightCircleProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M8.43932 5.50003L6.74997 5.50002C6.33575 5.50002 5.99997 5.16423 5.99997 4.75002C5.99997 4.3358 6.33576 4.00002 6.74998 4.00002L10.25 4.00004C10.6642 4.00004 11 4.33583 11 4.75004L11 8.25003C11 8.66424 10.6642 9.00003 10.25 9.00003C9.83575 9.00002 9.49996 8.66424 9.49996 8.25002L9.49997 6.5607L6.28029 9.78036C5.9874 10.0733 5.51252 10.0732 5.21963 9.78036C4.92674 9.48746 4.92674 9.01259 5.21964 8.7197L8.43932 5.50003Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.0621 3.50019C15.9951 6.84824 14.848 11.1294 11.4999 13.0624C8.1519 14.9954 3.87077 13.8482 1.93777 10.5002C0.00477368 7.15214 1.1519 2.87101 4.49995 0.938015C7.848 -0.994982 12.1291 0.152144 14.0621 3.50019ZM10.7499 11.7633C13.3806 10.2445 14.2819 6.8808 12.7631 4.25019C11.2443 1.61958 7.88056 0.718269 5.24995 2.23705C2.61934 3.75584 1.71803 7.11958 3.23681 9.75019C4.75559 12.3808 8.11934 13.2821 10.7499 11.7633Z" />
  </svg>
);

OutlineArrowUpRightCircle.displayName = 'OutlineArrowUpRightCircle';

export default OutlineArrowUpRightCircle;
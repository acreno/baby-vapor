import React from 'react';

export interface OutlineArrowUpLeftCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowUpLeftCircle: React.FC<OutlineArrowUpLeftCircleProps> = ({ 
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
    <path fill="currentColor" d="M7.56068 6.50003L9.25005 6.50002C9.66427 6.50002 10 6.16423 10 5.75002C10 5.3358 9.66426 5.00002 9.25004 5.00002L5.75003 5.00004C5.33582 5.00004 5.00004 5.33583 5.00004 5.75004L5.00005 9.25003C5.00005 9.66424 5.33584 10 5.75006 10C6.16427 10 6.50005 9.66424 6.50005 9.25002L6.50005 7.56072L9.71973 10.7804C10.0126 11.0733 10.4875 11.0732 10.7804 10.7804C11.0733 10.4875 11.0733 10.0126 10.7804 9.71969L7.56068 6.50003Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.93789 4.50019C0.00489575 7.84824 1.15202 12.1294 4.50007 14.0624C7.84812 15.9954 12.1293 14.8482 14.0622 11.5002C15.9952 8.15214 14.8481 3.87101 11.5001 1.93801C8.15202 0.00501776 3.87089 1.15214 1.93789 4.50019ZM5.25007 12.7633C2.61946 11.2445 1.71815 7.8808 3.23693 5.25019C4.75571 2.61958 8.11946 1.71827 10.7501 3.23705C13.3807 4.75584 14.282 8.11958 12.7632 10.7502C11.2444 13.3808 7.88068 14.2821 5.25007 12.7633Z" />
  </svg>
);

OutlineArrowUpLeftCircle.displayName = 'OutlineArrowUpLeftCircle';

export default OutlineArrowUpLeftCircle;
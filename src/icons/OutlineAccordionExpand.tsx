import React from 'react';

export interface OutlineAccordionExpandProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineAccordionExpand: React.FC<OutlineAccordionExpandProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.42381 4.26987C7.5663 4.09888 7.77737 4.00001 7.99994 4C8.22252 3.99999 8.4336 4.09884 8.57611 4.26981L9.82633 5.76981C10.0915 6.088 10.0486 6.56092 9.7304 6.82612C9.41221 7.09132 8.93929 7.04837 8.67408 6.73019L8.00004 5.92149L7.3262 6.73013C7.06103 7.04834 6.58811 7.09134 6.2699 6.82617C5.95168 6.56101 5.90868 6.08808 6.17385 5.76987L7.42381 4.26987ZM7.42386 11.7301C7.56636 11.9011 7.77744 12 8.00003 12C8.22261 12 8.4337 11.9011 8.57619 11.7301L9.82619 10.2301C10.0914 9.91193 10.0484 9.43901 9.73016 9.17383C9.41195 8.90866 8.93902 8.95165 8.67385 9.26986L8.00002 10.0785L7.32618 9.26986C7.06101 8.95165 6.58809 8.90866 6.26988 9.17384C5.95167 9.43901 5.90868 9.91193 6.17385 10.2301L7.42386 11.7301Z" />
  </svg>
);

OutlineAccordionExpand.displayName = 'OutlineAccordionExpand';

export default OutlineAccordionExpand;
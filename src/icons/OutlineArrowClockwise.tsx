import React from 'react';

export interface OutlineArrowClockwiseProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowClockwise: React.FC<OutlineArrowClockwiseProps> = ({ 
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
    <path fill="currentColor" d="M8.24637 2.19488C7.9383 1.918 7.4641 1.94328 7.18722 2.25134C6.91033 2.55941 6.93561 3.03361 7.24368 3.3105L8.29333 4.25391H8.00001C5.42306 4.25391 3 6.1536 3 8.90001C3 11.6576 5.37006 14 8.00001 14C10.6463 14 13 11.6409 13 8.75001C13 8.33579 12.6642 8.00001 12.25 8.00001C11.8358 8.00001 11.5 8.33579 11.5 8.75001C11.5 10.8591 9.772 12.5 8.00001 12.5C6.21168 12.5 4.5 10.8424 4.5 8.90001C4.5 7.14641 6.07694 5.75391 8.00001 5.75391H8.2902L7.24438 6.69159C6.93597 6.9681 6.91012 7.44227 7.18663 7.75068C7.46314 8.05908 7.93731 8.08494 8.24572 7.80842L10.7507 5.56252C10.9092 5.42037 10.9999 5.21751 11 5.00456C11.0001 4.79161 10.9097 4.58865 10.7513 4.4463L8.24637 2.19488Z" />
  </svg>
);

OutlineArrowClockwise.displayName = 'OutlineArrowClockwise';

export default OutlineArrowClockwise;
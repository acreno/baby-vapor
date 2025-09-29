import React from 'react';

export interface OutlineArrowCounterclockwiseProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowCounterclockwise: React.FC<OutlineArrowCounterclockwiseProps> = ({ 
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
    <path fill="currentColor" d="M7.75363 2.19488C8.0617 1.918 8.5359 1.94328 8.81278 2.25134C9.08967 2.55941 9.06439 3.03361 8.75632 3.3105L7.70667 4.25391H7.99999C10.5769 4.25391 13 6.1536 13 8.90001C13 11.6576 10.6299 14 7.99999 14C5.3537 14 3 11.6409 3 8.75001C3 8.33579 3.33579 8.00001 3.75 8.00001C4.16421 8.00001 4.5 8.33579 4.5 8.75001C4.5 10.8591 6.228 12.5 7.99999 12.5C9.78832 12.5 11.5 10.8424 11.5 8.90001C11.5 7.14641 9.92306 5.75391 7.99999 5.75391H7.7098L8.75562 6.69159C9.06403 6.9681 9.08988 7.44227 8.81337 7.75068C8.53686 8.05908 8.06269 8.08494 7.75428 7.80842L5.24934 5.56252C5.09079 5.42037 5.00014 5.21751 5.00001 5.00456C4.99988 4.79161 5.09028 4.58865 5.24866 4.4463L7.75363 2.19488Z" />
  </svg>
);

OutlineArrowCounterclockwise.displayName = 'OutlineArrowCounterclockwise';

export default OutlineArrowCounterclockwise;
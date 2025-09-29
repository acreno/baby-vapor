import React from 'react';

export interface OutlineVideoScrubProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineVideoScrub: React.FC<OutlineVideoScrubProps> = ({ 
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
        d="M8.5 2.5C8.5 2.22386 8.27614 2 8 2C7.72386 2 7.5 2.22386 7.5 2.5V4H4.61906C3.33039 4 2.28573 5.04467 2.28573 6.33333V9.66667C2.28573 10.9553 3.3304 12 4.61906 12H7.5V13.5C7.5 13.7761 7.72386 14 8 14C8.27614 14 8.5 13.7761 8.5 13.5V12H11.381C12.6696 12 13.7143 10.9553 13.7143 9.66667V6.33333C13.7143 5.04467 12.6696 4 11.381 4H8.5V2.5ZM7.5 5H4.61906C3.88268 5 3.28573 5.59695 3.28573 6.33333V9.66667C3.28573 10.403 3.88268 11 4.61906 11H7.5V5ZM8.5 11V5H11.381C12.1173 5 12.7143 5.59696 12.7143 6.33333V9.66667C12.7143 10.403 12.1173 11 11.381 11H8.5Z"
         />
  </svg>
);

OutlineVideoScrub.displayName = 'OutlineVideoScrub';

export default OutlineVideoScrub;
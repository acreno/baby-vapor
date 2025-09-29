import React from 'react';

export interface OutlineFiletypeAudioProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFiletypeAudio: React.FC<OutlineFiletypeAudioProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.25 3C10.6642 3 11 3.33579 11 3.75V12.25C11 12.6642 10.6642 13 10.25 13C9.83579 13 9.5 12.6642 9.5 12.25V3.75C9.5 3.33579 9.83579 3 10.25 3ZM12.75 4.99585C13.1642 4.99585 13.5 5.33164 13.5 5.74585V10.25C13.5 10.6642 13.1642 11 12.75 11C12.3358 11 12 10.6642 12 10.25V5.74585C12 5.33164 12.3358 4.99585 12.75 4.99585ZM2.75 5C3.16421 5 3.5 5.33579 3.5 5.75V10.25C3.5 10.6642 3.16421 11 2.75 11C2.33579 11 2 10.6642 2 10.25V5.75C2 5.33579 2.33579 5 2.75 5ZM6 6.75C6 6.33579 5.66421 6 5.25 6C4.83579 6 4.5 6.33579 4.5 6.75L4.5 9.25C4.5 9.66421 4.83579 10 5.25 10C5.66421 10 6 9.66421 6 9.25L6 6.75ZM8.5 4.74854C8.5 4.33432 8.16421 3.99854 7.75 3.99854C7.33579 3.99854 7 4.33432 7 4.74854V11.25C7 11.6642 7.33579 12 7.75 12C8.16421 12 8.5 11.6642 8.5 11.25V4.74854Z" />
  </svg>
);

OutlineFiletypeAudio.displayName = 'OutlineFiletypeAudio';

export default OutlineFiletypeAudio;
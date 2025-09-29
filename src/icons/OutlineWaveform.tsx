import React from 'react';

export interface OutlineWaveformProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineWaveform: React.FC<OutlineWaveformProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3.75C6.5 3.33579 6.16421 3 5.75 3C5.33578 3 5 3.33579 5 3.75V12.25C5 12.6642 5.33578 13 5.75 13C6.16421 13 6.5 12.6642 6.5 12.25V3.75ZM3.25 5.99683C3.66421 5.99683 4 6.33261 4 6.74683V9.25C4 9.66421 3.66421 10 3.25 10C2.83579 10 2.5 9.66421 2.5 9.25V6.74683C2.5 6.33261 2.83579 5.99683 3.25 5.99683ZM13.25 5.99854C13.6642 5.99854 14 6.33432 14 6.74854V9.25171C14 9.66592 13.6642 10.0017 13.25 10.0017C12.8358 10.0017 12.5 9.66592 12.5 9.25171V6.74854C12.5 6.33432 12.8358 5.99854 13.25 5.99854ZM10.75 3C11.1642 3 11.5 3.33579 11.5 3.75V12.25C11.5 12.6642 11.1642 13 10.75 13C10.3358 13 10 12.6642 10 12.25V3.75C10 3.33579 10.3358 3 10.75 3ZM9 5.7478C9 5.33359 8.66422 4.9978 8.25 4.9978C7.83579 4.9978 7.5 5.33359 7.5 5.7478V10.2524C7.5 10.6667 7.83579 11.0024 8.25 11.0024C8.66422 11.0024 9 10.6667 9 10.2524V5.7478Z" />
  </svg>
);

OutlineWaveform.displayName = 'OutlineWaveform';

export default OutlineWaveform;
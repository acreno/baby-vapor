import React from 'react';

export interface FillMicrophoneProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillMicrophone: React.FC<FillMicrophoneProps> = ({ 
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
    <path fill="currentColor" d="M8 1.00488C6.61929 1.00488 5.5 2.12417 5.5 3.50488V7.75488C5.5 9.1356 6.61929 10.2549 8 10.2549C9.38071 10.2549 10.5 9.13559 10.5 7.75488V3.50488C10.5 2.12417 9.38071 1.00488 8 1.00488Z" />
    <path fill="currentColor" d="M8.75005 12.9399C11.1557 12.578 13 10.5023 13 7.99578V6.75C13 6.33579 12.6642 6 12.25 6C11.8358 6 11.5 6.33579 11.5 6.75V7.99578C11.5 9.92878 9.933 11.4958 8 11.4958C6.06701 11.4958 4.5 9.92875 4.5 7.99575V6.75C4.5 6.33579 4.16421 6 3.75 6C3.33579 6 3 6.33579 3 6.75V7.99575C3 10.5023 4.84439 12.5781 7.25005 12.9399V14.25C7.25005 14.6642 7.58583 15 8.00005 15C8.41426 15 8.75005 14.6642 8.75005 14.25V12.9399Z" />
  </svg>
);

FillMicrophone.displayName = 'FillMicrophone';

export default FillMicrophone;
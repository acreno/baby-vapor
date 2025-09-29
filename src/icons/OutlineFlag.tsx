import React from 'react';

export interface OutlineFlagProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFlag: React.FC<OutlineFlagProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2H13.25C13.5266 2 13.7807 2.15224 13.9113 2.39611C14.0418 2.63997 14.0275 2.93588 13.874 3.16603L11.6514 6.5L13.874 9.83397C14.0275 10.0641 14.0418 10.36 13.9113 10.6039C13.7807 10.8478 13.5266 11 13.25 11H5.5V14.25C5.5 14.6642 5.16421 15 4.75 15C4.33579 15 4 14.6642 4 14.25V2.75C4 2.33579 4.33579 2 4.75 2ZM5.5 9.5H11.8486L10.126 6.91603C9.95801 6.6641 9.95801 6.3359 10.126 6.08397L11.8486 3.5H5.5V9.5Z" />
  </svg>
);

OutlineFlag.displayName = 'OutlineFlag';

export default OutlineFlag;
import React from 'react';

export interface FillFlagProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillFlag: React.FC<FillFlagProps> = ({ 
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
    <path fill="currentColor" d="M5.5 11H13.25C13.5266 11 13.7807 10.8478 13.9113 10.6039C14.0418 10.36 14.0275 10.0641 13.874 9.83397L11.6514 6.5L13.874 3.16603C14.0275 2.93588 14.0418 2.63997 13.9113 2.39611C13.7807 2.15224 13.5266 2 13.25 2H4.75C4.33579 2 4 2.33579 4 2.75V14.25C4 14.6642 4.33579 15 4.75 15C5.16421 15 5.5 14.6642 5.5 14.25V11Z" />
  </svg>
);

FillFlag.displayName = 'FillFlag';

export default FillFlag;
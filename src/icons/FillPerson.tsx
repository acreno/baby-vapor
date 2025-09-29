import React from 'react';

export interface FillPersonProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPerson: React.FC<FillPersonProps> = ({ 
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
    <path fill="currentColor" d="M5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5Z" />
    <path fill="currentColor" d="M3.27185 11.599C4.03031 10.4783 5.51316 9 8 9C10.4868 9 11.9697 10.4783 12.7282 11.599C13.0919 12.1365 13.0708 12.7668 12.7664 13.248C12.473 13.7119 11.945 14 11.3575 14H4.6425C4.055 14 3.52699 13.7119 3.2336 13.248C2.92924 12.7668 2.90809 12.1365 3.27185 11.599Z" />
  </svg>
);

FillPerson.displayName = 'FillPerson';

export default FillPerson;
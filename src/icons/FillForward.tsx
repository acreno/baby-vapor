import React from 'react';

export interface FillForwardProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillForward: React.FC<FillForwardProps> = ({ 
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
    <path fill="currentColor" d="M5.18894 4.14178C4.96059 3.97703 4.6592 3.95406 4.40852 4.08231C4.15784 4.21056 4.00012 4.46841 4.00012 4.74999L4 11.25C3.99999 11.5317 4.15786 11.7897 4.40871 11.9179C4.65957 12.046 4.9611 12.0229 5.1894 11.8578L7.9999 9.826L7.99988 11.25C7.99987 11.5317 8.15773 11.7897 8.40859 11.9179C8.65944 12.046 8.96098 12.0229 9.18928 11.8578L13.6894 8.60452C13.8846 8.46343 14.0001 8.23719 14 7.99636C13.9999 7.75553 13.8841 7.52941 13.6888 7.3885L9.18882 4.14178C8.96047 3.97703 8.65908 3.95406 8.4084 4.08231C8.15772 4.21056 8 4.46841 7.99999 4.74999L7.99997 6.16991L5.18894 4.14178Z" />
  </svg>
);

FillForward.displayName = 'FillForward';

export default FillForward;
import React from 'react';

export interface FillRewindProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillRewind: React.FC<FillRewindProps> = ({ 
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
    <path fill="currentColor" d="M6.81118 4.14178C7.03953 3.97703 7.34092 3.95406 7.5916 4.08231C7.84228 4.21056 8 4.46841 8.00001 4.74999L8.00003 6.16991L10.8111 4.14178C11.0394 3.97703 11.3408 3.95406 11.5915 4.08231C11.8422 4.21056 11.9999 4.46841 11.9999 4.74999L12 11.25C12 11.5317 11.8421 11.7897 11.5913 11.9179C11.3404 12.046 11.0389 12.0229 10.8106 11.8578L8.0001 9.826L8.00012 11.25C8.00013 11.5317 7.84227 11.7897 7.59141 11.9179C7.34056 12.046 7.03902 12.0229 6.81072 11.8578L2.3106 8.60452C2.11543 8.46343 1.99989 8.23719 2 7.99636C2.00011 7.75553 2.11587 7.52941 2.31117 7.3885L6.81118 4.14178Z" />
  </svg>
);

FillRewind.displayName = 'FillRewind';

export default FillRewind;
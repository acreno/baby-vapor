import React from 'react';

export interface FillPrimaryNavUserRequestProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavUserRequest: React.FC<FillPrimaryNavUserRequestProps> = ({ 
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
    <path fill="currentColor" d="M6.99591 5C6.99591 3.34315 8.33906 2 9.99591 2C11.6528 2 12.9959 3.34315 12.9959 5C12.9959 6.65685 11.6528 8 9.99591 8C8.33906 8 6.99591 6.65685 6.99591 5Z" />
    <path fill="currentColor" d="M9.99961 9C7.51207 9 6.0287 10.4781 5.26988 11.5988C4.90599 12.1363 4.92704 12.7666 5.23139 13.2479C5.52476 13.7119 6.0528 14 6.64034 14H13.3589C13.9464 14 14.4745 13.7119 14.7678 13.2479C15.0722 12.7666 15.0932 12.1363 14.7293 11.5988C13.9705 10.4781 12.4871 9 9.99961 9Z" />
    <path fill="currentColor" d="M3.61377 10.4775C3.91901 10.0267 4.33128 9.51102 4.86113 9.01733C4.74566 9.00596 4.62655 9 4.50374 9C2.56255 9 1.54626 10.4893 1.13696 11.2928C0.687647 12.1749 1.42115 13 2.21699 13H3.04337C2.90907 12.1583 3.08325 11.261 3.61377 10.4775Z" />
    <path fill="currentColor" d="M5.00151 5C5.00151 4.34647 5.12689 3.72222 5.35492 3.15C5.08819 3.05294 4.80028 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8C4.96156 8 5.39391 7.87492 5.765 7.6568C5.28127 6.88707 5.00151 5.97621 5.00151 5Z" />
  </svg>
);

FillPrimaryNavUserRequest.displayName = 'FillPrimaryNavUserRequest';

export default FillPrimaryNavUserRequest;
import React from 'react';

export interface FillShieldProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillShield: React.FC<FillShieldProps> = ({ 
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
    <path fill="currentColor" d="M8.00067 1C8.23165 1 8.45032 1.10719 8.59244 1.28923L8.59474 1.29213L8.61013 1.31127C8.62468 1.32921 8.6477 1.35721 8.67876 1.39384C8.74093 1.46716 8.835 1.57466 8.95752 1.70494C9.20339 1.96639 9.5594 2.31482 9.998 2.66181C10.8938 3.37049 12.0414 4 13.2489 4C13.6631 4 13.9989 4.33635 13.9989 4.75056V7.50266C13.9989 8.50245 13.7769 9.88472 12.9351 11.2665C12.0879 12.6573 10.6427 13.9979 8.27998 14.946C8.10072 15.018 7.90062 15.018 7.72136 14.946C5.35865 13.9979 3.91341 12.6573 3.06621 11.2665C2.22446 9.88472 2.00244 8.50245 2.00244 7.50266V4.75C2.00244 4.33579 2.33823 4 2.75244 4C3.95993 4 5.10755 3.37049 6.00335 2.66181C6.44195 2.31482 6.79795 1.96639 7.04383 1.70494C7.16635 1.57466 7.26041 1.46716 7.32259 1.39384C7.35365 1.35721 7.37667 1.32921 7.39121 1.31127L7.4066 1.29213L7.40915 1.28891C7.55126 1.1066 7.7695 1 8.00067 1Z" />
  </svg>
);

FillShield.displayName = 'FillShield';

export default FillShield;
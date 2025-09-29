import React from 'react';

export interface FillPrimaryNavNotificationsProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavNotifications: React.FC<FillPrimaryNavNotificationsProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.00192 1C5.79385 1 4.00385 2.79 4.00385 4.99808V6.96232C4.00129 6.97472 4 6.98728 4 7C4 7.23959 3.94259 7.42178 3.85529 7.56032C3.76314 7.70655 3.6449 7.84816 3.52593 7.99065C3.26474 8.30348 3 8.62055 3 9C3 9.55228 3.44772 10 4 10H12C12.5523 10 13 9.55228 13 9C13 8.62055 12.7353 8.30348 12.4741 7.99065C12.3551 7.84816 12.2369 7.70655 12.1447 7.56032C12.0574 7.42178 12 7.23959 12 7V4.99808C12 2.79 10.21 1 8.00192 1Z" />
    <path fill="currentColor" d="M6 12C6 12.2626 6.05173 12.5227 6.15224 12.7654C6.25275 13.008 6.40007 13.2285 6.58579 13.4142C6.7715 13.5999 6.99198 13.7472 7.23463 13.8478C7.47728 13.9483 7.73736 14 8 14C8.26264 14 8.52272 13.9483 8.76537 13.8478C9.00802 13.7472 9.2285 13.5999 9.41421 13.4142C9.59993 13.2285 9.74725 13.008 9.84776 12.7654C9.94827 12.5227 10 12.2626 10 12H6Z" />
  </svg>
);

FillPrimaryNavNotifications.displayName = 'FillPrimaryNavNotifications';

export default FillPrimaryNavNotifications;
import React from 'react';

export interface FillArrowLeftCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowLeftCircle: React.FC<FillArrowLeftCircleProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM7.80745 5.24826C8.08456 5.55614 8.05962 6.03035 7.75174 6.30746L6.70454 7.25001H11.25C11.6642 7.25001 12 7.58579 12 8.00001C12 8.41422 11.6642 8.75001 11.25 8.75001H6.70439L7.7517 9.69252C8.0596 9.9696 8.08457 10.4438 7.80749 10.7517C7.53041 11.0596 7.05619 11.0846 6.7483 10.8075L4.2483 8.55766C4.09026 8.41543 4.00001 8.21281 4 8.0002C3.99999 7.78758 4.09023 7.58495 4.24826 7.44272L6.74826 5.19255C7.05613 4.91545 7.53035 4.94039 7.80745 5.24826Z" />
  </svg>
);

FillArrowLeftCircle.displayName = 'FillArrowLeftCircle';

export default FillArrowLeftCircle;
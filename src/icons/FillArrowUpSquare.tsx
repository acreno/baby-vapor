import React from 'react';

export interface FillArrowUpSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowUpSquare: React.FC<FillArrowUpSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM5.24826 7.80745C5.55614 8.08456 6.03035 8.05962 6.30746 7.75174L7.25001 6.70454L7.25001 11.2501C7.25001 11.6643 7.58579 12.0001 8.00001 12.0001C8.41422 12.0001 8.75001 11.6643 8.75001 11.2501L8.75001 6.70439L9.69252 7.7517C9.9696 8.0596 10.4438 8.08457 10.7517 7.80749C11.0596 7.53041 11.0846 7.05619 10.8075 6.7483L8.55766 4.2483C8.41543 4.09026 8.21281 4.00001 8.00019 4C7.78758 3.99999 7.58495 4.09023 7.44272 4.24826L5.19255 6.74826C4.91545 7.05613 4.94039 7.53035 5.24826 7.80745Z" />
  </svg>
);

FillArrowUpSquare.displayName = 'FillArrowUpSquare';

export default FillArrowUpSquare;
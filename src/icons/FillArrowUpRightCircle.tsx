import React from 'react';

export interface FillArrowUpRightCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowUpRightCircle: React.FC<FillArrowUpRightCircleProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8.00024C15 11.8662 11.866 15.0002 8 15.0002C4.13401 15.0002 1 11.8662 1 8.00024C1 4.13425 4.13401 1.00024 8 1.00024C11.866 1.00024 15 4.13425 15 8.00024ZM6.00005 5.75009C6.00005 6.16431 6.33583 6.5001 6.75004 6.5001L8.43941 6.50011L5.21972 9.71977C4.92682 10.0127 4.92682 10.4875 5.21971 10.7804C5.5126 11.0733 5.98748 11.0733 6.28037 10.7804L9.50005 7.56079L9.50004 9.2501C9.50004 9.66431 9.83583 10.0001 10.25 10.0001C10.6643 10.0001 11 9.66432 11 9.25011L11.0001 5.75012C11.0001 5.33591 10.6643 5.00012 10.2501 5.00012L6.75005 5.0001C6.33584 5.0001 6.00005 5.33588 6.00005 5.75009Z" />
  </svg>
);

FillArrowUpRightCircle.displayName = 'FillArrowUpRightCircle';

export default FillArrowUpRightCircle;
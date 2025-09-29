import React from 'react';

export interface FillArrowDownRightCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowDownRightCircle: React.FC<FillArrowDownRightCircleProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8.00024C15 4.13425 11.866 1.00024 8 1.00024C4.13401 1.00024 1 4.13425 1 8.00024C1 11.8662 4.13401 15.0002 8 15.0002C11.866 15.0002 15 11.8662 15 8.00024ZM6.00005 10.2504C6.00005 9.83618 6.33583 9.50039 6.75004 9.50039L8.43972 9.50038L5.21974 6.28074C4.92683 5.98786 4.92681 5.51299 5.21969 5.22008C5.51256 4.92717 5.98744 4.92715 6.28035 5.22003L9.50005 8.43939L9.50004 6.75039C9.50004 6.33617 9.83583 6.00039 10.25 6.00038C10.6643 6.00038 11 6.33617 11 6.75038L11.0001 10.2504C11.0001 10.6646 10.6643 11.0004 10.2501 11.0004L6.75005 11.0004C6.33584 11.0004 6.00005 10.6646 6.00005 10.2504Z" />
  </svg>
);

FillArrowDownRightCircle.displayName = 'FillArrowDownRightCircle';

export default FillArrowDownRightCircle;
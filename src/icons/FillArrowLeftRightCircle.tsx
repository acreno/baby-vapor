import React from 'react';

export interface FillArrowLeftRightCircleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowLeftRightCircle: React.FC<FillArrowLeftRightCircleProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8.00024C15 4.13425 11.866 1.00024 8 1.00024C4.13401 1.00024 1 4.13425 1 8.00024C1 11.8662 4.13401 15.0002 8 15.0002C11.866 15.0002 15 11.8662 15 8.00024ZM12.8714 8.4151C13.0395 8.16312 13.0395 7.83478 12.8715 7.58279L11.3699 5.33129C11.14 4.98669 10.6744 4.89364 10.3298 5.12347C9.98515 5.3533 9.89211 5.81897 10.1219 6.16357L10.8455 7.24851L5.15187 7.24851L5.87394 6.16632C6.10384 5.82177 6.01089 5.35608 5.66633 5.12618C5.32177 4.89628 4.85608 4.98923 4.62618 5.33379L3.12588 7.58236C2.95781 7.83426 2.95771 8.16251 3.12563 8.41451L4.62593 10.666C4.85562 11.0107 5.32125 11.104 5.66595 10.8743C6.01065 10.6446 6.10388 10.179 5.87419 9.83426L5.1507 8.74851L10.846 8.74851L10.122 9.83407C9.89211 10.1787 9.98513 10.6443 10.3297 10.8742C10.6743 11.104 11.14 11.011 11.3698 10.6664L12.8714 8.4151Z" />
  </svg>
);

FillArrowLeftRightCircle.displayName = 'FillArrowLeftRightCircle';

export default FillArrowLeftRightCircle;
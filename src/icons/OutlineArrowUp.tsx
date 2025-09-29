import React from 'react';

export interface OutlineArrowUpProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowUp: React.FC<OutlineArrowUpProps> = ({ 
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
    <path fill="currentColor" d="M8.54956 3.23966C8.40765 3.08683 8.20851 3 7.99995 3C7.79139 3 7.59225 3.08685 7.45035 3.23969L4.20063 6.73969C3.91879 7.04323 3.93639 7.51778 4.23993 7.79962C4.54348 8.08146 5.01803 8.06386 5.29986 7.76031L7.24994 5.66005V12.2464C7.24994 12.6606 7.58573 12.9964 7.99994 12.9964C8.41416 12.9964 8.74994 12.6606 8.74994 12.2464V5.65989L10.7003 7.76034C10.9822 8.06387 11.4567 8.08145 11.7603 7.7996C12.0638 7.51775 12.0814 7.0432 11.7995 6.73966L8.54956 3.23966Z" />
  </svg>
);

OutlineArrowUp.displayName = 'OutlineArrowUp';

export default OutlineArrowUp;
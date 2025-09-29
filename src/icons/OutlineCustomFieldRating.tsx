import React from 'react';

export interface OutlineCustomFieldRatingProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldRating: React.FC<OutlineCustomFieldRatingProps> = ({ 
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
    <path fill="currentColor" d="M8.00002 5.00049C8.08572 5.00049 8.16406 5.04891 8.20238 5.12555L8.97506 6.67091L10.8094 6.95311C10.8937 6.96608 10.9635 7.02531 10.99 7.10634C11.0166 7.18737 10.9953 7.27642 10.935 7.33671L9.66607 8.60564L9.94864 10.4423C9.9616 10.5266 9.92606 10.611 9.85671 10.6607C9.78736 10.7103 9.69598 10.7168 9.62037 10.6773L8.00002 9.83191L6.37968 10.6773C6.30407 10.7168 6.21269 10.7103 6.14334 10.6607C6.07398 10.611 6.03845 10.5266 6.05141 10.4423L6.33398 8.60564L5.06505 7.33671C5.00477 7.27642 4.98349 7.18737 5.01001 7.10634C5.03654 7.02531 5.10636 6.96608 5.19063 6.95311L7.02499 6.67091L7.79767 5.12555C7.83599 5.04891 7.91433 5.00049 8.00002 5.00049Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75Z" />
  </svg>
);

OutlineCustomFieldRating.displayName = 'OutlineCustomFieldRating';

export default OutlineCustomFieldRating;
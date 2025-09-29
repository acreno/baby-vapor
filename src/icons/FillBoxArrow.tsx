import React from 'react';

export interface FillBoxArrowProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillBoxArrow: React.FC<FillBoxArrowProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.98975 3.5C4.91251 3.5 4.8396 3.5357 4.79225 3.59672L3.70318 5H12.2999L11.2083 3.59651C11.1609 3.53562 11.0881 3.5 11.0109 3.5H4.98975ZM3.60725 2.67706C3.93874 2.24992 4.44906 2 4.98975 2H11.0109C11.551 2 12.0607 2.24933 12.3923 2.6756L13.6314 4.26871C13.8703 4.57589 14 4.95395 14 5.34311V12.25C14 13.2165 13.2165 14 12.25 14H3.75381C2.78732 14 2.00381 13.2165 2.00381 12.25V5.34252C2.00381 4.95399 2.13311 4.57652 2.37132 4.26958L3.60725 2.67706ZM8.00001 6C8.21262 6 8.41524 6.09024 8.55748 6.24828L10.8075 8.74828C11.0846 9.05616 11.0596 9.53038 10.7517 9.80747C10.4438 10.0846 9.96963 10.0596 9.69254 9.75172L8.75001 8.70447V12.25C8.75001 12.6642 8.41422 13 8.00001 13C7.58579 13 7.25001 12.6642 7.25001 12.25V8.70447L6.30748 9.75172C6.03038 10.0596 5.55617 10.0846 5.24828 9.80747C4.9404 9.53038 4.91544 9.05616 5.19254 8.74828L7.44253 6.24828C7.58477 6.09024 7.78739 6 8.00001 6Z" />
  </svg>
);

FillBoxArrow.displayName = 'FillBoxArrow';

export default FillBoxArrow;
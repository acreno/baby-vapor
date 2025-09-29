import React from 'react';

export interface FillVolumeMidProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillVolumeMid: React.FC<FillVolumeMidProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.69708 5.28133L8.33623 3.91893V12.0811L6.69707 10.7187C6.00873 10.1465 5.14188 9.83334 4.24682 9.83334H3.33333C3.1492 9.83334 3 9.68414 3 9.5V6.5C3 6.31587 3.1492 6.16667 3.33333 6.16667H4.24682C5.14188 6.16667 6.00873 5.85346 6.69708 5.28133ZM9.33623 3.445C9.33623 2.77416 8.54559 2.4202 8.04531 2.86041L6.05788 4.51229C5.5491 4.93516 4.90839 5.16667 4.24682 5.16667H3.33333C2.59691 5.16667 2 5.76358 2 6.5V9.5C2 10.2364 2.59691 10.8333 3.33333 10.8333H4.24682C4.90839 10.8333 5.5491 11.0648 6.05788 11.4877L8.04531 13.1396C8.54559 13.5798 9.33623 13.2259 9.33623 12.555V3.445ZM11.5315 6.1065C11.4062 5.86041 11.1052 5.76247 10.8591 5.88776C10.613 6.01304 10.5151 6.31409 10.6404 6.56018C10.8708 7.01277 11.0026 7.52176 11.0026 8.06195C11.0026 8.60214 10.8708 9.11113 10.6404 9.56372C10.5151 9.80981 10.613 10.1109 10.8591 10.2361C11.1052 10.3614 11.4062 10.2635 11.5315 10.0174C11.83 9.4311 12.0026 8.76731 12.0026 8.06195C12.0026 7.35658 11.83 6.69279 11.5315 6.1065Z" />
  </svg>
);

FillVolumeMid.displayName = 'FillVolumeMid';

export default FillVolumeMid;
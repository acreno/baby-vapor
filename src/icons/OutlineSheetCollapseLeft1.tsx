import React from 'react';

export interface OutlineSheetCollapseLeft1Props {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSheetCollapseLeft1: React.FC<OutlineSheetCollapseLeft1Props> = ({ 
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
    <path fill="currentColor" d="M9 5.75C9 5.33579 9.33579 5 9.75 5H10.246C10.6602 5 10.996 5.33579 10.996 5.75V10.25C10.996 10.6642 10.6602 11 10.246 11H9.75C9.33579 11 9 10.6642 9 10.25V5.75Z" />
    <path fill="currentColor" d="M7.73014 7.32618C8.04835 7.06101 8.09134 6.58809 7.82617 6.26988C7.56099 5.95167 7.08807 5.90868 6.76986 6.17385L5.26986 7.42385C5.09887 7.56635 5 7.77743 5 8.00002C5 8.2226 5.09887 8.43369 5.26986 8.57618L6.76986 9.82618C7.08807 10.0914 7.56099 10.0484 7.82617 9.73016C8.09134 9.41195 8.04835 8.93903 7.73014 8.67385L6.92154 8.00002L7.73014 7.32618Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75Z" />
  </svg>
);

OutlineSheetCollapseLeft1.displayName = 'OutlineSheetCollapseLeft1';

export default OutlineSheetCollapseLeft1;
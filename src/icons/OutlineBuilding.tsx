import React from 'react';

export interface OutlineBuildingProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineBuilding: React.FC<OutlineBuildingProps> = ({ 
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
    <path fill="currentColor" d="M8 5.49832C8.00066 6.05061 7.55347 6.49885 7.00119 6.49951L6.00119 6.5007C5.44891 6.50136 5.00066 6.05418 5 5.50189C4.99934 4.94961 5.44653 4.50136 5.99881 4.5007L6.99881 4.49951C7.55109 4.49886 7.99934 4.94604 8 5.49832Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11 5.01919V2.75C11 1.7835 10.2165 1 9.25 1H3.75C2.7835 1 2 1.7835 2 2.75V12.25C2 13.2165 2.7835 14 3.75 14H13.2498C14.2163 14 14.9998 13.2165 14.9998 12.25V7.45777C14.9998 6.71558 14.5316 6.05412 13.8316 5.80734L11.8319 5.1023C11.5517 5.00353 11.2682 4.98021 11 5.01919ZM3.75 2.5C3.61193 2.5 3.5 2.61193 3.5 2.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H5V9.5C5 9.22386 5.22386 9 5.5 9H7.5C7.77614 9 8 9.22386 8 9.5V12.5H9.5V2.75C9.5 2.61193 9.38807 2.5 9.25 2.5H3.75ZM11 6.75273V12.5H13.2498C13.3878 12.5 13.4998 12.3881 13.4998 12.25V7.45777C13.4998 7.35174 13.4329 7.25725 13.3329 7.22199L11.3331 6.51696C11.1705 6.45962 11 6.58028 11 6.75273Z" />
  </svg>
);

OutlineBuilding.displayName = 'OutlineBuilding';

export default OutlineBuilding;
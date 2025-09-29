import React from 'react';

export interface FillArrowUpDownSquareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArrowUpDownSquare: React.FC<FillArrowUpDownSquareProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM7.58506 12.8717C7.83704 13.0398 8.16538 13.0398 8.41737 12.8717L10.6689 11.3701C11.0135 11.1403 11.1065 10.6746 10.8767 10.33C10.6469 9.98539 10.1812 9.89235 9.83659 10.1222L8.75165 10.8458L8.75165 5.15212L9.83384 5.87418C10.1784 6.10408 10.6441 6.01113 10.874 5.66657C11.1039 5.32201 11.0109 4.85633 10.6664 4.62643L8.4178 3.12612C8.1659 2.95805 7.83764 2.95795 7.58564 3.12587L5.33412 4.62618C4.98942 4.85587 4.89619 5.3215 5.12588 5.66619C5.35557 6.01089 5.8212 6.10412 6.1659 5.87443L7.25165 5.15094L7.25165 10.8463L6.16609 10.1222C5.82149 9.89235 5.35582 9.98538 5.12598 10.33C4.89613 10.6746 4.98916 11.1402 5.33375 11.3701L7.58506 12.8717Z" />
  </svg>
);

FillArrowUpDownSquare.displayName = 'FillArrowUpDownSquare';

export default FillArrowUpDownSquare;
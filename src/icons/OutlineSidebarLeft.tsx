import React from 'react';

export interface OutlineSidebarLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSidebarLeft: React.FC<OutlineSidebarLeftProps> = ({ 
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
    <path fill="currentColor" d="M6 6.75C6 7.16421 5.66421 7.5 5.25 7.5H4.75C4.33579 7.5 4 7.16421 4 6.75C4 6.33579 4.33579 6 4.75 6H5.25C5.66421 6 6 6.33579 6 6.75Z" />
    <path fill="currentColor" d="M5.25 10C5.66421 10 6 9.66421 6 9.25C6 8.83579 5.66421 8.5 5.25 8.5H4.75C4.33579 8.5 4 8.83579 4 9.25C4 9.66421 4.33579 10 4.75 10H5.25Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.74915 3C1.78265 3 0.999146 3.7835 0.999146 4.75V11.25C0.999146 12.2165 1.78265 13 2.74915 13H13.2491C14.2156 13 14.9991 12.2165 14.9991 11.25V4.75C14.9991 3.7835 14.2156 3 13.2491 3H2.74915ZM2.49915 4.75C2.49915 4.61193 2.61107 4.5 2.74915 4.5H7.5V11.5H2.74915C2.61107 11.5 2.49915 11.3881 2.49915 11.25V4.75ZM9 11.5H13.2491C13.3872 11.5 13.4991 11.3881 13.4991 11.25V4.75C13.4991 4.61193 13.3872 4.5 13.2491 4.5H9V11.5Z" />
  </svg>
);

OutlineSidebarLeft.displayName = 'OutlineSidebarLeft';

export default OutlineSidebarLeft;
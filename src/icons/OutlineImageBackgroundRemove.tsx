import React from 'react';

export interface OutlineImageBackgroundRemoveProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineImageBackgroundRemove: React.FC<OutlineImageBackgroundRemoveProps> = ({ 
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
    <path fill="currentColor" opacity="0.25" d="M8 8.89453L6.75586 7.55176C6.29367 7.05258 5.61022 6.88576 5 7.05566V6H8V8.89453Z" />
    <path fill="currentColor" opacity="0.25" d="M5 3.5V6H2.5V3.75C2.5 3.61193 2.61193 3.5 2.75 3.5H5Z" />
    <path fill="currentColor" opacity="0.25" d="M11 5.99707C11 5.44479 10.5523 4.99707 10 4.99707C9.44772 4.99707 9 5.44479 9 5.99707H8V3.5H11V5.99707Z" />
    <path fill="currentColor" d="M10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2C14.2165 2 15 2.7835 15 3.75V12.25C15 13.2165 14.2165 14 13.25 14H2.75C1.7835 14 1 13.2165 1 12.25V3.75C1 2.7835 1.7835 2 2.75 2H13.25ZM5.65527 8.57031C5.55912 8.46651 5.39528 8.46382 5.29492 8.56348L2.5 11.3486V12.25C2.5 12.3881 2.61193 12.5 2.75 12.5H4.27734L6.88086 9.89551L5.65527 8.57031ZM9.67676 9.5752C9.5792 9.47764 9.42089 9.47778 9.32324 9.5752L6.39844 12.5H12.6016L9.67676 9.5752ZM2.75 3.5C2.61193 3.5 2.5 3.61193 2.5 3.75V9.23145L4.23633 7.50098C4.9388 6.80129 6.0822 6.82419 6.75586 7.55176L7.94238 8.83398L8.2627 8.51465C8.94613 7.83145 10.054 7.8313 10.7373 8.51465L13.5 11.2773V3.75C13.5 3.61193 13.3881 3.5 13.25 3.5H2.75Z" />
    <rect fill="currentColor" opacity="0.25" x="11" y="6" width="2.5" height="3" />
  </svg>
);

OutlineImageBackgroundRemove.displayName = 'OutlineImageBackgroundRemove';

export default OutlineImageBackgroundRemove;
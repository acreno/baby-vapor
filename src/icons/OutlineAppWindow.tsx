import React from 'react';

export interface OutlineAppWindowProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineAppWindow: React.FC<OutlineAppWindowProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.99994 3.75C1.99994 2.7835 2.78344 2 3.74994 2H12.2499C13.2164 2 13.9999 2.7835 13.9999 3.75V12.25C13.9999 13.2165 13.2164 14 12.2499 14H3.74994C2.78344 14 1.99994 13.2165 1.99994 12.25V3.75ZM5.4993 3.75005C5.4993 4.16426 5.16351 4.50005 4.7493 4.50005C4.33508 4.50005 3.9993 4.16426 3.9993 3.75005C3.9993 3.33583 4.33508 3.00005 4.7493 3.00005C5.16351 3.00005 5.4993 3.33583 5.4993 3.75005ZM3.5 6.00005C3.5 5.72391 3.72386 5.50005 4 5.50005H12C12.2761 5.50005 12.5 5.72391 12.5 6.00005V12C12.5 12.2762 12.2761 12.5 12 12.5H4C3.72386 12.5 3.5 12.2762 3.5 12V6.00005ZM6.7493 4.50005C7.16351 4.50005 7.4993 4.16426 7.4993 3.75005C7.4993 3.33583 7.16351 3.00005 6.7493 3.00005C6.33508 3.00005 5.9993 3.33583 5.9993 3.75005C5.9993 4.16426 6.33508 4.50005 6.7493 4.50005ZM9.4993 3.75005C9.4993 4.16426 9.16351 4.50005 8.7493 4.50005C8.33508 4.50005 7.9993 4.16426 7.9993 3.75005C7.9993 3.33583 8.33508 3.00005 8.7493 3.00005C9.16351 3.00005 9.4993 3.33583 9.4993 3.75005Z" />
  </svg>
);

OutlineAppWindow.displayName = 'OutlineAppWindow';

export default OutlineAppWindow;
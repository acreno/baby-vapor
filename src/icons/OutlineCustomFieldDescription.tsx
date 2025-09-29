import React from 'react';

export interface OutlineCustomFieldDescriptionProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldDescription: React.FC<OutlineCustomFieldDescriptionProps> = ({ 
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
    <path fill="currentColor" d="M5 5.75C5 5.33579 5.33579 5 5.75 5H8.2502C8.66441 5 9.0002 5.33579 9.0002 5.75C9.0002 6.16421 8.66441 6.5 8.2502 6.5H7.75V10.2458C7.75 10.66 7.41421 10.9958 7 10.9958C6.58579 10.9958 6.25 10.66 6.25 10.2458L6.25 6.5H5.75C5.33579 6.5 5 6.16421 5 5.75Z" />
    <path fill="currentColor" d="M9 10.25C9 9.83579 9.33579 9.5 9.75 9.5H10.25C10.6642 9.5 11 9.83579 11 10.25C11 10.6642 10.6642 11 10.25 11H9.75C9.33579 11 9 10.6642 9 10.25Z" />
    <path fill="currentColor" d="M9.75 6.99585C9.33579 6.99585 9 7.33164 9 7.74585C9 8.16006 9.33579 8.49585 9.75 8.49585H10.25C10.6642 8.49585 11 8.16006 11 7.74585C11 7.33164 10.6642 6.99585 10.25 6.99585H9.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H3.75Z" />
  </svg>
);

OutlineCustomFieldDescription.displayName = 'OutlineCustomFieldDescription';

export default OutlineCustomFieldDescription;
import React from 'react';

export interface FillCameraPhotoProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillCameraPhoto: React.FC<FillCameraPhotoProps> = ({ 
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
    <path fill="currentColor" d="M8.00128 6.5C9.10585 6.5 10.0013 7.39543 10.0013 8.5C10.0013 9.60457 9.10585 10.5 8.00128 10.5C6.89671 10.5 6.00128 9.60457 6.00128 8.5C6.00128 7.39543 6.89671 6.5 8.00128 6.5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.07854 1.41588C5.20532 1.16108 5.4654 1 5.75 1H10.25C10.5346 1 10.7948 1.16114 10.9215 1.416L11.7114 3.00412H13.2526C14.2191 3.00412 15.0026 3.78762 15.0026 4.75412V11.25C15.0026 12.2165 14.2191 13 13.2526 13H2.75C1.7835 13 1 12.2165 1 11.25V4.75412C1 3.78762 1.7835 3.00412 2.75 3.00412H4.28823L5.07854 1.41588ZM11.5013 8.5C11.5013 6.567 9.93428 5 8.00128 5C6.06828 5 4.50128 6.567 4.50128 8.5C4.50128 10.433 6.06828 12 8.00128 12C9.93428 12 11.5013 10.433 11.5013 8.5Z" />
  </svg>
);

FillCameraPhoto.displayName = 'FillCameraPhoto';

export default FillCameraPhoto;
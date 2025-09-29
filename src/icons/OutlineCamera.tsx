import React from 'react';

export interface OutlineCameraProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCamera: React.FC<OutlineCameraProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1 11.25C1 12.2165 1.7835 13 2.75 13H9.25C10.2165 13 11 12.2165 11 11.25V10.8968L13.9494 12.1871C14.1813 12.2886 14.4487 12.2662 14.6605 12.1277C14.8723 11.9891 15 11.7531 15 11.5V4.75C15 4.4969 14.8723 4.26086 14.6605 4.12232C14.4487 3.98379 14.1813 3.96143 13.9494 4.06288L11 5.35324V4.75C11 3.7835 10.2165 3 9.25 3H2.75C1.7835 3 1 3.7835 1 4.75V11.25ZM11 6.99051V9.25949L13.5 10.3532V5.89676L11 6.99051ZM9.5 4.75C9.5 4.61193 9.38807 4.5 9.25 4.5L2.75 4.5C2.61193 4.5 2.5 4.61193 2.5 4.75L2.5 11.25C2.5 11.3881 2.61193 11.5 2.75 11.5H9.25C9.38807 11.5 9.5 11.3881 9.5 11.25V4.75Z" />
  </svg>
);

OutlineCamera.displayName = 'OutlineCamera';

export default OutlineCamera;
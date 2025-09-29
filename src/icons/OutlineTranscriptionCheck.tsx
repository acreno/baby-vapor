import React from 'react';

export interface OutlineTranscriptionCheckProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTranscriptionCheck: React.FC<OutlineTranscriptionCheckProps> = ({ 
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
    <path fill="currentColor" d="M4 2.75C4 1.7835 4.7835 1 5.75 1H13.25C14.2165 1 15 1.7835 15 2.75V6.25C15 6.66421 14.6642 7 14.25 7C13.8358 7 13.5 6.66421 13.5 6.25V2.75C13.5 2.61193 13.3881 2.5 13.25 2.5H5.75C5.61193 2.5 5.5 2.61193 5.5 2.75V3.24597C5.5 3.66018 5.16421 3.99597 4.75 3.99597C4.33579 3.99597 4 3.66018 4 3.24597V2.75Z" />
    <path fill="currentColor" d="M7.75 4.5C7.33579 4.5 7 4.83579 7 5.25C7 5.66421 7.33579 6 7.75 6H11.25C11.6642 6 12 5.66421 12 5.25C12 4.83579 11.6642 4.5 11.25 4.5H7.75Z" />
    <path fill="currentColor" d="M8.5 8.75C8.5 8.33579 8.16421 8 7.75 8C7.33579 8 7 8.33579 7 8.75V9.25C7 9.66421 7.33579 10 7.75 10C8.16421 10 8.5 9.66421 8.5 9.25V8.75Z" />
    <path fill="currentColor" d="M2.49817 9.75C2.49817 9.33579 2.16238 9 1.74817 9C1.33396 9 0.998169 9.33579 0.998169 9.75V12.25C0.998169 12.6642 1.33396 13 1.74817 13C2.16238 13 2.49817 12.6642 2.49817 12.25V9.75Z" />
    <path fill="currentColor" d="M4.75 6C5.16421 6 5.5 6.33579 5.5 6.75V14.2535C5.5 14.6677 5.16421 15.0035 4.75 15.0035C4.33579 15.0035 4 14.6677 4 14.2535V6.75C4 6.33579 4.33579 6 4.75 6Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16 12.4954C16 14.4284 14.433 15.9954 12.5 15.9954C10.567 15.9954 9 14.4284 9 12.4954C9 10.5624 10.567 8.99536 12.5 8.99536C14.433 8.99536 16 10.5624 16 12.4954ZM14.2771 10.5794C14.5069 10.7324 14.5692 11.0428 14.4162 11.2727L12.4196 14.2721C12.327 14.4112 12.171 14.4949 12.0039 14.4951C11.8368 14.4953 11.6806 14.412 11.5877 14.2731L10.5844 12.7731C10.4309 12.5435 10.4925 12.233 10.722 12.0795C10.9515 11.9259 11.2621 11.9876 11.4156 12.2171L12.0023 13.0943L13.5838 10.7185C13.7368 10.4887 14.0472 10.4264 14.2771 10.5794Z" />
  </svg>
);

OutlineTranscriptionCheck.displayName = 'OutlineTranscriptionCheck';

export default OutlineTranscriptionCheck;
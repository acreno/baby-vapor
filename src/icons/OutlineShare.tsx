import React from 'react';

export interface OutlineShareProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineShare: React.FC<OutlineShareProps> = ({ 
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
    <path fill="currentColor" d="M4.74951 1C4.3353 1 3.99951 1.33579 3.99951 1.75C3.99951 2.16421 4.3353 2.5 4.74951 2.5H11.2499C11.6642 2.5 11.9999 2.16421 11.9999 1.75C11.9999 1.33579 11.6642 1 11.2499 1H4.74951Z" />
    <path fill="currentColor" d="M2 5.75C2 4.7835 2.7835 4 3.75 4H12.25C13.2165 4 14 4.7835 14 5.75V12.25C14 13.2165 13.2165 14 12.25 14H10.75C10.3358 14 10 13.6642 10 13.25C10 12.8358 10.3358 12.5 10.75 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V5.75C12.5 5.61193 12.3881 5.5 12.25 5.5H3.75C3.61193 5.5 3.5 5.61193 3.5 5.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H6.99755C7.13562 12.5 7.24755 12.3881 7.24755 12.25V9.81113C6.97485 10.0537 6.5585 10.0669 6.26964 9.82617C5.95143 9.56099 5.90844 9.08807 6.17361 8.76986L7.42361 7.26986C7.56611 7.09887 7.77719 7 7.99978 7C8.22236 7 8.43345 7.09887 8.57594 7.26986L9.82594 8.76986C10.0911 9.08807 10.0481 9.56099 9.72991 9.82617C9.43948 10.0682 9.02016 10.0535 8.74755 9.80715V12.25C8.74755 13.2165 7.96405 14 6.99755 14H3.75C2.7835 14 2 13.2165 2 12.25V5.75Z" />
  </svg>
);

OutlineShare.displayName = 'OutlineShare';

export default OutlineShare;
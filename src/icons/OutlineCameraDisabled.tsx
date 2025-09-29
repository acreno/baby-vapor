import React from 'react';

export interface OutlineCameraDisabledProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCameraDisabled: React.FC<OutlineCameraDisabledProps> = ({ 
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
    <path fill="currentColor" d="M1.21967 2.28033L13.7197 14.7803C14.0126 15.0732 14.4875 15.0732 14.7804 14.7803C15.0733 14.4874 15.0733 14.0126 14.7804 13.7197L2.28033 1.21967C1.98744 0.926776 1.51256 0.926777 1.21967 1.21967C0.926776 1.51256 0.926777 1.98744 1.21967 2.28033Z" />
    <path fill="currentColor" d="M1.00002 4.74998C1.00002 4.5775 1.02497 4.41084 1.07147 4.25342L2.50002 5.68196L2.50002 11.25C2.50002 11.3881 2.61194 11.5 2.75002 11.5H8.31804L9.74658 12.9285C9.58916 12.975 9.4225 13 9.25002 13H2.75002C1.78352 13 1.00002 12.2165 1.00002 11.25V4.74998Z" />
    <path fill="currentColor" d="M9.50002 4.74998V6.318L11 7.818V6.9905L13.5 5.89675V10.318L14.9504 11.7684C14.9827 11.6839 15 11.5931 15 11.5V4.74998C15 4.49688 14.8724 4.26084 14.6605 4.12231C14.4487 3.98377 14.1813 3.96142 13.9494 4.06287L11 5.35322V4.74998C11 3.78349 10.2165 2.99998 9.25002 2.99998H6.182L7.682 4.49998L9.25002 4.49998C9.38809 4.49998 9.50002 4.61191 9.50002 4.74998Z" />
  </svg>
);

OutlineCameraDisabled.displayName = 'OutlineCameraDisabled';

export default OutlineCameraDisabled;
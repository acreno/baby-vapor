import React from 'react';

export interface OutlineCommandProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCommand: React.FC<OutlineCommandProps> = ({ 
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
    <path fill="currentColor" d="M6.08467 5.08237C5.71397 4.89756 5.26364 5.04826 5.07883 5.41896C4.89402 5.78966 5.04472 6.23998 5.41542 6.42479L8.57506 8.00001L5.41482 9.57901C5.04429 9.76414 4.89399 10.2146 5.07913 10.5851C5.26426 10.9557 5.71473 11.106 6.08526 10.9208L10.5898 8.67018C10.8441 8.54312 11.0047 8.28321 11.0045 7.99893C11.0044 7.71466 10.8436 7.45489 10.5892 7.32805L6.08467 5.08237Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75Z" />
  </svg>
);

OutlineCommand.displayName = 'OutlineCommand';

export default OutlineCommand;
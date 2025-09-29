import React from 'react';

export interface FillTurnArrowLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillTurnArrowLeft: React.FC<FillTurnArrowLeftProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM7.79831 4.23897C7.52039 3.93184 7.0461 3.90815 6.73897 4.18607L4.24678 6.4412C4.08976 6.58328 4.00013 6.78512 4 6.99688C3.99988 7.20863 4.08927 7.41058 4.24612 7.55284L6.73831 9.81334C7.04512 10.0916 7.51943 10.0685 7.79771 9.7617C8.076 9.45489 8.05287 8.98058 7.74607 8.70229L6.70155 7.75488H9.61804C10.1099 7.75488 10.4978 8.11943 10.4978 8.65C10.4978 8.87731 10.3991 9.09264 10.2352 9.25746C10.0639 9.42971 9.87253 9.49707 9.75 9.49707C9.33579 9.49707 9 9.83286 9 10.2471C9 10.6613 9.33579 10.9971 9.75 10.9971C10.3423 10.9971 10.8999 10.7163 11.2988 10.3152C11.705 9.90668 11.9978 9.32347 11.9978 8.65C11.9978 7.27901 10.9263 6.25488 9.61804 6.25488H6.68828L7.74541 5.29831C8.05254 5.02039 8.07623 4.54611 7.79831 4.23897Z" />
  </svg>
);

FillTurnArrowLeft.displayName = 'FillTurnArrowLeft';

export default FillTurnArrowLeft;
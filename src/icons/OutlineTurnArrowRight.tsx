import React from 'react';

export interface OutlineTurnArrowRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTurnArrowRight: React.FC<OutlineTurnArrowRightProps> = ({ 
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
    <path fill="currentColor" d="M6.38196 7.75488C5.89005 7.75488 5.5022 8.11943 5.5022 8.65C5.5022 8.87731 5.6009 9.09264 5.76482 9.25746C5.93613 9.42971 6.12747 9.49707 6.25 9.49707C6.66421 9.49707 7 9.83286 7 10.2471C7 10.6613 6.66421 10.9971 6.25 10.9971C5.65769 10.9971 5.10013 10.7163 4.70124 10.3152C4.29497 9.90668 4.0022 9.32347 4.0022 8.65C4.0022 7.27901 5.07368 6.25488 6.38196 6.25488H9.31172L8.25459 5.29831C7.94746 5.02039 7.92377 4.5461 8.20169 4.23897C8.47961 3.93183 8.9539 3.90815 9.26103 4.18607L11.7532 6.4412C11.9102 6.58328 11.9999 6.78511 12 6.99687C12.0001 7.20863 11.9107 7.41057 11.7539 7.55284L9.26169 9.81334C8.95488 10.0916 8.48057 10.0685 8.20229 9.76169C7.924 9.45488 7.94713 8.98057 8.25393 8.70229L9.29844 7.75488H6.38196Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5Z" />
  </svg>
);

OutlineTurnArrowRight.displayName = 'OutlineTurnArrowRight';

export default OutlineTurnArrowRight;
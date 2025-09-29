import React from 'react';

export interface OutlineTurnArrowDownLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTurnArrowDownLeft: React.FC<OutlineTurnArrowDownLeftProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5ZM15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8ZM7.75488 6.38196C7.75488 5.89005 8.11943 5.5022 8.65 5.5022C8.87731 5.5022 9.09264 5.6009 9.25746 5.76482C9.42971 5.93613 9.49707 6.12747 9.49707 6.25C9.49707 6.66421 9.83286 7 10.2471 7C10.6613 7 10.9971 6.66421 10.9971 6.25C10.9971 5.65769 10.7163 5.10013 10.3152 4.70124C9.90668 4.29497 9.32347 4.0022 8.65 4.0022C7.27901 4.0022 6.25488 5.07368 6.25488 6.38196V9.31172L5.29831 8.25459C5.02039 7.94746 4.5461 7.92377 4.23897 8.20169C3.93183 8.47961 3.90815 8.9539 4.18607 9.26103L6.4412 11.7532C6.58328 11.9102 6.78511 11.9999 6.99687 12C7.20863 12.0001 7.41057 11.9107 7.55284 11.7539L9.81334 9.26169C10.0916 8.95488 10.0685 8.48057 9.76169 8.20229C9.45488 7.924 8.98057 7.94713 8.70229 8.25393L7.75488 9.29844V6.38196Z" />
  </svg>
);

OutlineTurnArrowDownLeft.displayName = 'OutlineTurnArrowDownLeft';

export default OutlineTurnArrowDownLeft;
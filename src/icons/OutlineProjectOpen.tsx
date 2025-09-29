import React from 'react';

export interface OutlineProjectOpenProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineProjectOpen: React.FC<OutlineProjectOpenProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V5.25C14 5.66421 13.6642 6 13.25 6H3.5V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H5.25C5.66421 12.5 6 12.8358 6 13.25C6 13.6642 5.66421 14 5.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM12.5 3.75V5H11.0923L10.042 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75ZM7.45167 5H9.8715L8.82119 3.5H6.40136L7.45167 5ZM5.18059 3.5L6.2309 5H3.5V3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H5.18059Z" />
    <path fill="currentColor" d="M9.21978 9.21961C9.36044 9.07896 9.5512 8.99994 9.75011 8.99994H13.2501C13.6643 8.99995 14.0001 9.33573 14.0001 9.74994C14.0001 10.1642 13.6643 10.4999 13.2501 10.4999L11.5641 10.4999L14.7846 13.7209C15.0775 14.0138 15.0775 14.4887 14.7846 14.7816C14.4917 15.0745 14.0168 15.0744 13.7239 14.7815L10.5001 11.5573L10.5001 13.25C10.5001 13.6642 10.1643 14 9.75012 14C9.33591 14 9.00012 13.6642 9.00012 13.25L9.00011 9.74995C9.00011 9.55103 9.07913 9.36027 9.21978 9.21961Z" />
  </svg>
);

OutlineProjectOpen.displayName = 'OutlineProjectOpen';

export default OutlineProjectOpen;
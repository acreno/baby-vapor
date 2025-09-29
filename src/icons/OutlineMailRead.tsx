import React from 'react';

export interface OutlineMailReadProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineMailRead: React.FC<OutlineMailReadProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 3C2.7835 3 2 3.7835 2 4.75V11.25C2 12.2165 2.7835 13 3.75 13H6.25006C6.66427 13 7.00006 12.6642 7.00006 12.25C7.00006 11.8358 6.66427 11.5 6.25006 11.5H3.75C3.61193 11.5 3.5 11.3881 3.5 11.25V7.06448L7.24972 8.83157C7.72179 9.05404 8.2685 9.05422 8.74071 8.83206L13.5692 6.56152C13.8321 6.43786 14 6.17341 14 5.88281V4.75C14 3.7835 13.2165 3 12.25 3H3.75ZM7.88916 7.4747L3.5 5.40626V4.75C3.5 4.61193 3.61193 4.5 3.75 4.5H12.25C12.3881 4.5 12.5 4.61193 12.5 4.75V5.40671L8.1024 7.47466C8.03493 7.50641 7.95661 7.50648 7.88916 7.4747Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5ZM14.2771 10.584C14.5069 10.737 14.5692 11.0474 14.4162 11.2773L12.4196 14.2768C12.327 14.4159 12.171 14.4995 12.0039 14.4997C11.8368 14.4999 11.6806 14.4166 11.5877 14.2777L10.5844 12.7777C10.4309 12.5482 10.4925 12.2376 10.722 12.0841C10.9515 11.9306 11.2621 11.9922 11.4156 12.2217L12.0023 13.0989L13.5838 10.7232C13.7368 10.4933 14.0472 10.431 14.2771 10.584Z" />
  </svg>
);

OutlineMailRead.displayName = 'OutlineMailRead';

export default OutlineMailRead;
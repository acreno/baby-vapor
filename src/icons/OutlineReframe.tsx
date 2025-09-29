import React from 'react';

export interface OutlineReframeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineReframe: React.FC<OutlineReframeProps> = ({ 
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
    <path fill="currentColor" d="M13.25 2C14.2165 2 15 2.78353 15 3.75V12.25C15 13.2165 14.2165 14 13.25 14H2.75C1.7835 14 1 13.2165 1 12.25V3.75C1.00003 2.78353 1.78352 2 2.75 2H13.25ZM2.5 9.51465V12.25C2.5 12.3881 2.61193 12.5 2.75 12.5H5.50293V9.75391C5.50271 9.61561 5.3903 9.50332 5.25195 9.50391L2.5 9.51465ZM2.75 3.5C2.61195 3.5 2.50003 3.61196 2.5 3.75V5.00391H9.25C10.2164 5.00391 10.9998 5.78758 11 6.75391V12.5H13.25C13.3881 12.5 13.5 12.3881 13.5 12.25V3.75C13.5 3.61196 13.3881 3.5 13.25 3.5H2.75ZM2.5 8.01465L5.24609 8.00391C6.21517 8.00002 7.00271 8.78483 7.00293 9.75391V12.5H9.5V6.75391C9.4998 6.616 9.38795 6.50391 9.25 6.50391H2.5V8.01465Z" />
  </svg>
);

OutlineReframe.displayName = 'OutlineReframe';

export default OutlineReframe;
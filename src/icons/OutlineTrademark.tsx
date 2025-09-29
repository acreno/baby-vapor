import React from 'react';

export interface OutlineTrademarkProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTrademark: React.FC<OutlineTrademarkProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 5.75C6 5.43956 6.18861 5.17318 6.45749 5.05918C6.55149 5.01677 6.6558 4.99316 6.76563 4.99316H8.23537C9.46133 4.99316 10.4551 5.98694 10.4551 7.21291C10.4551 7.90375 10.1395 8.52086 9.64469 8.92797L10.303 9.79724C10.5531 10.1274 10.4881 10.5979 10.1579 10.8479C9.82772 11.098 9.35731 11.033 9.10724 10.7028L8.14528 9.43265H7.5V10.25C7.5 10.6642 7.16421 11 6.75 11C6.33579 11 6 10.6642 6 10.25V5.75ZM8.23537 7.93265H7.5V6.49316H8.23537C8.63291 6.49316 8.95511 6.81537 8.95511 7.21291C8.95511 7.61045 8.63291 7.93265 8.23537 7.93265Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8ZM8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5Z" />
  </svg>
);

OutlineTrademark.displayName = 'OutlineTrademark';

export default OutlineTrademark;
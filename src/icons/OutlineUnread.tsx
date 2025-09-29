import React from 'react';

export interface OutlineUnreadProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineUnread: React.FC<OutlineUnreadProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.2207 5.8291L13 5.01528V3.25C13 2.55964 12.4404 2 11.75 2H4.25C3.55964 2 3 2.55964 3 3.25L3 5.01343L1.77816 5.82935C1.29196 6.15402 1 6.70005 1 7.28469V12.248C1 13.2145 1.7835 13.998 2.75 13.998L13.25 13.998C14.2165 13.998 15 13.2145 15 12.248V7.28518C15 6.70007 14.7076 6.15366 14.2207 5.8291ZM4.5 6.8581L7.88816 8.46878C7.95603 8.50104 8.0348 8.50106 8.10269 8.46884L11.5 6.85642V3.5L4.5 3.5L4.5 6.8581ZM13.5 7.56756L8.74585 9.82396C8.27065 10.0495 7.71921 10.0493 7.24415 9.82349L2.5 7.56819L2.5 12.248C2.5 12.3861 2.61193 12.498 2.75 12.498L13.25 12.498C13.3881 12.498 13.5 12.3861 13.5 12.248V7.56756Z" />
  </svg>
);

OutlineUnread.displayName = 'OutlineUnread';

export default OutlineUnread;
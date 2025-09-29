import React from 'react';

export interface OutlineSaveProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSave: React.FC<OutlineSaveProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 12.5004C6.33578 12.5004 6 12.8362 6 13.2504C6 13.6646 6.33578 14.0004 6.75 14.0004H13.25C14.2165 14.0004 15 13.2169 15 12.2504V3.74951C15 2.78301 14.2165 1.99951 13.25 1.99951H6.75C6.33578 1.99951 6 2.3353 6 2.74951C6 3.16372 6.33578 3.49951 6.75 3.49951L13.25 3.49951C13.3881 3.49951 13.5 3.61144 13.5 3.74951V12.2504C13.5 12.3885 13.3881 12.5004 13.25 12.5004H6.75ZM1.75 7.24943C1.33579 7.24943 1 7.58521 1 7.99943C1 8.41364 1.33579 8.74943 1.75 8.74943L6.29361 8.74943L5.24777 9.69241C4.94014 9.96979 4.91561 10.444 5.19299 10.7517C5.47036 11.0593 5.9446 11.0838 6.25223 10.8064L8.74763 8.55646C8.90539 8.41422 8.99543 8.21175 8.9954 7.99933C8.99536 7.78691 8.90525 7.58447 8.74745 7.44227L6.25205 5.19378C5.94433 4.9165 5.4701 4.94118 5.19283 5.2489C4.91555 5.55662 4.94024 6.03086 5.24796 6.30813L6.29261 7.24943L1.75 7.24943ZM11 8.99943C11.5523 8.99943 12 8.55171 12 7.99943C12 7.44714 11.5523 6.99943 11 6.99943C10.4477 6.99943 10 7.44714 10 7.99943C10 8.55171 10.4477 8.99943 11 8.99943Z" />
  </svg>
);

OutlineSave.displayName = 'OutlineSave';

export default OutlineSave;
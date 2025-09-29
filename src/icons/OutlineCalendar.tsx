import React from 'react';

export interface OutlineCalendarProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCalendar: React.FC<OutlineCalendarProps> = ({ 
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
    <path fill="currentColor" d="M5.29998 8C5.1343 8 4.99998 8.13431 4.99998 8.3V8.7C4.99998 8.86569 5.1343 9 5.29998 9H5.69998C5.86567 9 5.99998 8.86569 5.99998 8.7V8.3C5.99998 8.13431 5.86567 8 5.69998 8H5.29998Z" />
    <path fill="currentColor" d="M4.99998 10.3C4.99998 10.1343 5.1343 10 5.29998 10H5.69998C5.86567 10 5.99998 10.1343 5.99998 10.3V10.7C5.99998 10.8657 5.86567 11 5.69998 11H5.29998C5.1343 11 4.99998 10.8657 4.99998 10.7V10.3Z" />
    <path fill="currentColor" d="M7.29998 8C7.1343 8 6.99998 8.13431 6.99998 8.3V8.7C6.99998 8.86569 7.1343 9 7.29998 9H7.69998C7.86567 9 7.99998 8.86569 7.99998 8.7V8.3C7.99998 8.13431 7.86567 8 7.69998 8H7.29998Z" />
    <path fill="currentColor" d="M6.99998 10.3C6.99998 10.1343 7.1343 10 7.29998 10H7.69998C7.86567 10 7.99998 10.1343 7.99998 10.3V10.7C7.99998 10.8657 7.86567 11 7.69998 11H7.29998C7.1343 11 6.99998 10.8657 6.99998 10.7V10.3Z" />
    <path fill="currentColor" d="M9.29998 8C9.1343 8 8.99998 8.13431 8.99998 8.3V8.7C8.99998 8.86569 9.1343 9 9.29998 9H9.69998C9.86567 9 9.99998 8.86569 9.99998 8.7V8.3C9.99998 8.13431 9.86567 8 9.69998 8H9.29998Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.99994 3.75C1.99994 2.7835 2.78344 2 3.74994 2H12.2499C13.2164 2 13.9999 2.7835 13.9999 3.75V12.25C13.9999 13.2165 13.2164 14 12.2499 14H3.74994C2.78344 14 1.99994 13.2165 1.99994 12.25V3.75ZM3.74994 3.5C3.61187 3.5 3.49994 3.61193 3.49994 3.75V5H12.4999V3.75C12.4999 3.61193 12.388 3.5 12.2499 3.5H3.74994ZM3.49994 12.25V6.5H12.4999V12.25C12.4999 12.3881 12.388 12.5 12.2499 12.5H3.74994C3.61187 12.5 3.49994 12.3881 3.49994 12.25Z" />
  </svg>
);

OutlineCalendar.displayName = 'OutlineCalendar';

export default OutlineCalendar;
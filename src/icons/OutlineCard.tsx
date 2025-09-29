import React from 'react';

export interface OutlineCardProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCard: React.FC<OutlineCardProps> = ({ 
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
    <path fill="currentColor" d="M8.75 8.50269C8.33579 8.50269 8 8.83847 8 9.25269C8 9.6669 8.33579 10.0027 8.75 10.0027L11.25 10.0027C11.6642 10.0027 12 9.6669 12 9.25269C12 8.83847 11.6642 8.50269 11.25 8.50269L8.75 8.50269Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1 4.75C1 3.7835 1.7835 3 2.75 3H13.25C14.2165 3 15 3.7835 15 4.75V11.25C15 12.2165 14.2165 13 13.25 13H2.75C1.7835 13 1 12.2165 1 11.25V4.75ZM2.75 4.5C2.61193 4.5 2.5 4.61193 2.5 4.75V6H13.5V4.75C13.5 4.61193 13.3881 4.5 13.25 4.5H2.75ZM2.5 11.25V7.5H13.5V11.25C13.5 11.3881 13.3881 11.5 13.25 11.5H2.75C2.61193 11.5 2.5 11.3881 2.5 11.25Z" />
  </svg>
);

OutlineCard.displayName = 'OutlineCard';

export default OutlineCard;
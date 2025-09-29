import React from 'react';

export interface OutlineCustomFieldAssigneeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldAssignee: React.FC<OutlineCustomFieldAssigneeProps> = ({ 
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
    <path fill="currentColor" d="M8 4.5C6.75736 4.5 5.75 5.50736 5.75 6.75C5.75 7.99264 6.75736 9 8 9C9.24264 9 10.25 7.99264 10.25 6.75C10.25 5.50736 9.24264 4.5 8 4.5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM12.0233 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H3.75C3.61193 3.5 3.5 3.61193 3.5 3.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H4.00851C4.43389 11.6681 5.60171 10.0024 8.09377 10.0024C10.5677 10.0024 11.6368 11.64 12.0233 12.5Z" />
  </svg>
);

OutlineCustomFieldAssignee.displayName = 'OutlineCustomFieldAssignee';

export default OutlineCustomFieldAssignee;
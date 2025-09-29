import React from 'react';

export interface OutlineShareAddProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineShareAdd: React.FC<OutlineShareAddProps> = ({ 
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
    <path fill="currentColor" d="M3.99951 1.75C3.99951 1.33579 4.3353 1 4.74951 1H11.2499C11.6642 1 11.9999 1.33579 11.9999 1.75C11.9999 2.16421 11.6642 2.5 11.2499 2.5H4.74951C4.3353 2.5 3.99951 2.16421 3.99951 1.75Z" />
    <path fill="currentColor" d="M2 5.75C2 4.7835 2.7835 4 3.75 4H12.25C13.2165 4 14 4.7835 14 5.75V6.25C14 6.66421 13.6642 7 13.25 7C12.8358 7 12.5 6.66421 12.5 6.25V5.75C12.5 5.61193 12.3881 5.5 12.25 5.5H3.75C3.61193 5.5 3.5 5.61193 3.5 5.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H6.2485C6.66272 12.5 6.9985 12.8358 6.9985 13.25C6.9985 13.6642 6.66272 14 6.2485 14H3.75C2.7835 14 2 13.2165 2 12.25V5.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 16C14.433 16 16 14.433 16 12.5C16 10.567 14.433 9 12.5 9C10.567 9 9 10.567 9 12.5C9 14.433 10.567 16 12.5 16ZM13 10.5C13 10.2239 12.7761 10 12.5 10C12.2238 10 12 10.2239 12 10.5V12.002H10.5034C10.2272 12.002 10.0034 12.2258 10.0034 12.502C10.0034 12.7781 10.2272 13.002 10.5034 13.002H12V14.5C12 14.7761 12.2238 15 12.5 15C12.7761 15 13 14.7761 13 14.5V13.002H14.5C14.7761 13.002 15 12.7781 15 12.502C15 12.2258 14.7761 12.002 14.5 12.002H13V10.5Z" />
  </svg>
);

OutlineShareAdd.displayName = 'OutlineShareAdd';

export default OutlineShareAdd;
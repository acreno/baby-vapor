import React from 'react';

export interface OutlinePendingProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePending: React.FC<OutlinePendingProps> = ({ 
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
    <path fill="currentColor" d="M8 6C6.89547 6 6 5.10453 6 4H10C10 5.10453 9.10453 6 8 6Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 15C3.33579 15 3 14.6642 3 14.25V12.9242C3 10.8314 3.66374 8.87153 5.48294 8C3.66374 7.12847 3 5.1686 3 3.07576V1.75C3 1.33579 3.33579 1 3.75 1H12.2462C12.6604 1 12.9962 1.33579 12.9962 1.75V3.07576C12.9962 5.16834 12.3333 7.1284 10.5141 8C12.3333 8.8716 12.9962 10.8317 12.9962 12.9242V14.25C12.9962 14.6642 12.6604 15 12.2462 15H3.75ZM4.5 12.9242V13.5H11.4962V12.9242C11.4962 10.9022 10.8222 9.63786 9.51531 9.21331C9.20627 9.11292 8.99703 8.82494 8.99703 8.5V7.5C8.99703 7.17506 9.20627 6.88709 9.51531 6.78669C10.8222 6.36214 11.4962 5.09781 11.4962 3.07576V2.5H4.5V3.07576C4.5 5.09751 5.17461 6.36208 6.48172 6.78669C6.79076 6.88709 7 7.17506 7 7.5V8.5C7 8.82494 6.79076 9.11292 6.48172 9.21331C5.17461 9.63792 4.5 10.9025 4.5 12.9242Z" />
  </svg>
);

OutlinePending.displayName = 'OutlinePending';

export default OutlinePending;
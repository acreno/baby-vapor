import React from 'react';

export interface FillPrimaryNavKeyboardProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavKeyboard: React.FC<FillPrimaryNavKeyboardProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2.99561C2.23122 2.99561 1 4.22682 1 5.74561V10.2471C1 11.7659 2.23122 12.9971 3.75 12.9971H12.25C13.7688 12.9971 15 11.7659 15 10.2471V5.74561C15 4.22682 13.7688 2.99561 12.25 2.99561H3.75ZM6 10.75C6 10.3358 6.33579 10 6.75 10H9.25C9.66421 10 10 10.3358 10 10.75C10 11.1642 9.66421 11.5 9.25 11.5H6.75C6.33579 11.5 6 11.1642 6 10.75ZM3.75 5C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.25C4.66421 6.5 5 6.16421 5 5.75C5 5.33579 4.66421 5 4.25 5H3.75ZM5 7.75C5 7.33579 5.33579 7 5.75 7H6.25C6.66421 7 7 7.33579 7 7.75C7 8.16421 6.66421 8.5 6.25 8.5H5.75C5.33579 8.5 5 8.16421 5 7.75ZM9.75 7C9.33579 7 9 7.33579 9 7.75C9 8.16421 9.33579 8.5 9.75 8.5H10.25C10.6642 8.5 11 8.16421 11 7.75C11 7.33579 10.6642 7 10.25 7H9.75ZM7 5.75C7 5.33579 7.33579 5 7.75 5H8.25C8.66421 5 9 5.33579 9 5.75C9 6.16421 8.66421 6.5 8.25 6.5H7.75C7.33579 6.5 7 6.16421 7 5.75ZM11.75 5C11.3358 5 11 5.33579 11 5.75C11 6.16421 11.3358 6.5 11.75 6.5H12.25C12.6642 6.5 13 6.16421 13 5.75C13 5.33579 12.6642 5 12.25 5H11.75Z" />
  </svg>
);

FillPrimaryNavKeyboard.displayName = 'FillPrimaryNavKeyboard';

export default FillPrimaryNavKeyboard;
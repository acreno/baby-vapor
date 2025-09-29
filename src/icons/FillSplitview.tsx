import React from 'react';

export interface FillSplitviewProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillSplitview: React.FC<FillSplitviewProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.5 5.16669C8.5 4.89054 8.27614 4.66669 8 4.66669C7.72386 4.66669 7.5 4.89054 7.5 5.16669V10.8334C7.5 11.1095 7.72386 11.3334 8 11.3334C8.27614 11.3334 8.5 11.1095 8.5 10.8334V5.16669ZM2 6.33335C2 5.78107 2.44772 5.33335 3 5.33335H5.33333C5.88562 5.33335 6.33333 5.78107 6.33333 6.33335V9.66669C6.33333 10.219 5.88562 10.6667 5.33333 10.6667H3C2.44772 10.6667 2 10.219 2 9.66669V6.33335ZM9.66667 6.33335C9.66667 5.78107 10.1144 5.33335 10.6667 5.33335H13C13.5523 5.33335 14 5.78107 14 6.33335V9.66669C14 10.219 13.5523 10.6667 13 10.6667H10.6667C10.1144 10.6667 9.66667 10.219 9.66667 9.66669V6.33335Z" />
  </svg>
);

FillSplitview.displayName = 'FillSplitview';

export default FillSplitview;
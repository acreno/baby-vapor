import React from 'react';

export interface FillImageBackgroundRemoveProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillImageBackgroundRemove: React.FC<FillImageBackgroundRemoveProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M19 6.5V8.08691C18.8435 8.03153 18.6755 8 18.5 8C17.6716 8 17 8.67157 17 9.5C17 10.3284 17.6716 11 18.5 11H14V6.5H19Z" />
    <path fill="currentColor" d="M19 11H18.5C18.6756 11 18.8434 10.9676 19 10.9121V11Z" />
    <path fill="currentColor" opacity="0.25" d="M9 6.5V11H4.5V7.75C4.5 7.05964 5.05964 6.5 5.75 6.5H9Z" />
    <path fill="currentColor" opacity="0.25" d="M14 15.75L11.7324 13.5078C11.0495 12.8324 9.94996 12.8339 9.26855 13.5107L9 13.7773V11H14V15.75Z" />
    <path fill="currentColor" opacity="0.25" d="M23.5 16H20.1973L19 14.7842V11H23.5V16Z" />
    <path fill="currentColor" d="M18.5 8C19.3284 8 20 8.67157 20 9.5C20 10.3284 19.3284 11 18.5 11C17.6716 11 17 10.3284 17 9.5C17 8.67157 17.6716 8 18.5 8Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M22.25 5C23.7688 5 25 6.23122 25 7.75V20.25C25 21.7688 23.7688 23 22.25 23H5.75C4.23122 23 3 21.7688 3 20.25V7.75C3 6.23122 4.23122 5 5.75 5H22.25ZM17.6777 15.5801C17.58 15.4808 17.4193 15.4801 17.3213 15.5791L11.4756 21.5H22.25C22.5989 21.5 22.9139 21.3565 23.1406 21.126L17.6777 15.5801ZM10.6777 14.5742C10.5804 14.4779 10.4236 14.478 10.3262 14.5742L4.50488 20.3564C4.55891 20.997 5.09551 21.5 5.75 21.5H9.36719L13.4736 17.3398L10.6777 14.5742ZM5.75 6.5C5.05964 6.5 4.5 7.05964 4.5 7.75V18.249L9.26855 13.5107C9.94996 12.8339 11.0495 12.8324 11.7324 13.5078L14.5273 16.2725L16.2539 14.5254C16.9397 13.831 18.0612 13.8321 18.7461 14.5273L23.5 19.3525V7.75C23.5 7.05964 22.9404 6.5 22.25 6.5H5.75Z" />
  </svg>
);

FillImageBackgroundRemove.displayName = 'FillImageBackgroundRemove';

export default FillImageBackgroundRemove;
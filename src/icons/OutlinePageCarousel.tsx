import React from 'react';

export interface OutlinePageCarouselProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePageCarousel: React.FC<OutlinePageCarouselProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.75 1C4.7835 1 4 1.7835 4 2.75V4.16841C3.40876 4.44927 3 5.0519 3 5.75V7.16841C2.40876 7.44927 2 8.0519 2 8.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V8.75C14 8.0519 13.5912 7.44927 13 7.16841V5.75C13 5.0519 12.5912 4.44927 12 4.16841V2.75C12 1.7835 11.2165 1 10.25 1H5.75ZM10.5 4V2.75C10.5 2.61193 10.3881 2.5 10.25 2.5H5.75C5.61193 2.5 5.5 2.61193 5.5 2.75V4H10.5ZM11.5 5.75V7H4.5V5.75C4.5 5.61193 4.61193 5.5 4.75 5.5H11.25C11.3881 5.5 11.5 5.61193 11.5 5.75ZM3.75 8.5C3.61193 8.5 3.5 8.61193 3.5 8.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V8.75C12.5 8.61193 12.3881 8.5 12.25 8.5H3.75Z" />
  </svg>
);

OutlinePageCarousel.displayName = 'OutlinePageCarousel';

export default OutlinePageCarousel;
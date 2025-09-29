import React from 'react';

export interface OutlineImageProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineImage: React.FC<OutlineImageProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V10.372L10.7895 8.55088C10.0894 7.80542 8.90188 7.81666 8.21594 8.57524L7.95941 8.85894L6.74387 7.5598C6.07473 6.84464 4.94894 6.81782 4.24651 7.50032L3.5 8.22564V3.75ZM6.94985 9.97542L5.64856 8.58464C5.55296 8.48247 5.39214 8.47864 5.29179 8.57614L3.5 10.3171V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H4.66703L6.94985 9.97542ZM6.68933 12.5H12.25C12.3047 12.5 12.3553 12.4824 12.3964 12.4527L9.69619 9.57781C9.59617 9.47132 9.42653 9.47293 9.32854 9.58129L6.68933 12.5ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" />
  </svg>
);

OutlineImage.displayName = 'OutlineImage';

export default OutlineImage;
import React from 'react';

export interface FillFiletypeImageProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillFiletypeImage: React.FC<FillFiletypeImageProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5ZM5.06235 5.25897L1.06602 12.2517C0.875524 12.5851 1.11621 12.9998 1.50013 12.9998H8.49097L8.50331 13H14.5007C14.8889 13 15.129 12.5769 14.93 12.2436L11.9295 7.21926C11.7355 6.89431 11.2647 6.89443 11.0708 7.21948L9.02058 10.6568L5.93039 5.25865C5.73827 4.92305 5.25422 4.92323 5.06235 5.25897Z" />
  </svg>
);

FillFiletypeImage.displayName = 'FillFiletypeImage';

export default FillFiletypeImage;
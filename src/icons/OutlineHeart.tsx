import React from 'react';

export interface OutlineHeartProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineHeart: React.FC<OutlineHeartProps> = ({ 
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
    <path fill="currentColor" d="M12.47 3.52998C11.4171 2.81998 9.67541 2.62998 8.00257 4.17998C6.32974 2.62998 4.58802 2.81998 3.53512 3.52998C2.03941 4.53998 1.56709 6.60998 2.43302 8.35998C4.54866 12.39 7.74673 12.97 7.88449 13C7.92385 13 7.96321 13 8.00257 13C8.04193 13 8.08129 13 8.12065 13C8.25842 12.98 11.4565 12.39 13.5721 8.35998V8.33998C14.4381 6.59998 13.9559 4.52998 12.47 3.52998ZM12.2634 7.65998C10.7086 10.62 8.53394 11.35 8.00257 11.49C7.46136 11.35 5.28668 10.62 3.74177 7.66998C3.14152 6.44998 3.59417 5.28998 4.35186 4.77998C4.64707 4.57998 4.96195 4.48998 5.28668 4.48998C5.98533 4.48998 6.74303 4.91998 7.44168 5.74998C7.72705 6.07998 8.2781 6.07998 8.56346 5.74998C9.58684 4.52998 10.748 4.16998 11.6533 4.77998C12.411 5.28998 12.8636 6.43998 12.2634 7.65998Z" />
  </svg>
);

OutlineHeart.displayName = 'OutlineHeart';

export default OutlineHeart;
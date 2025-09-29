import React from 'react';

export interface OutlineThumbsUp1Props {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineThumbsUp1: React.FC<OutlineThumbsUp1Props> = ({ 
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
    <path fill="currentColor"
        d="M20.8798 7.44107L21.1855 9.62507L21.6755 13.1251L21.875 14.5519C22.0716 15.9554 20.9813 17.2084 19.5644 17.2084H14.2188C13.7713 17.2084 13.5351 17.6675 13.7107 18.0787C14.1832 19.1818 14.4509 20.0842 14.6743 21.1826C14.7951 21.7771 14.8808 22.2128 14.8808 22.571C14.8808 23.3116 14.6164 23.8046 14.2967 24.1301C13.7506 24.6859 12.9079 24.3236 12.4578 23.6877C11.2975 22.0485 9.05384 18.9517 7.93042 17.8897C6.84892 16.8671 6.125 15.5243 6.125 14.0345V10.2084C6.125 6.98665 8.73658 4.37506 11.9583 4.37506H17.4067C19.1718 4.37506 20.6605 5.68932 20.8798 7.44107Z"
         stroke-width="1.5" stroke-miterlimit="5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

OutlineThumbsUp1.displayName = 'OutlineThumbsUp1';

export default OutlineThumbsUp1;
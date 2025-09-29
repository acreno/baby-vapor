import React from 'react';

export interface OutlineTagProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTag: React.FC<OutlineTagProps> = ({ 
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
    <path fill="currentColor" d="M12.0016 8C12.0016 8.55228 11.5539 9 11.0016 9C10.4493 9 10.0016 8.55228 10.0016 8C10.0016 7.44772 10.4493 7 11.0016 7C11.5539 7 12.0016 7.44772 12.0016 8Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.75257 3C1.78465 3 1 3.7835 1 4.75V11.2516C1 12.2181 1.78465 13.0016 2.75257 13.0016H9.67128C10.0592 13.0016 10.4362 12.873 10.7431 12.6361L13.9303 10.176C15.3567 9.07496 15.3565 6.925 13.9299 5.82423L10.743 3.36525C10.4361 3.12846 10.0592 3 9.67138 3H2.75257ZM2.5022 4.75C2.5022 4.61193 2.6143 4.5 2.75257 4.5H9.67138C9.72679 4.5 9.78063 4.51835 9.82447 4.55218L13.0114 7.01116C13.6599 7.51151 13.6599 8.48876 13.0116 8.98923L9.8244 11.4494C9.78055 11.4832 9.7267 11.5016 9.67128 11.5016H2.75257C2.6143 11.5016 2.5022 11.3896 2.5022 11.2516V4.75Z" />
  </svg>
);

OutlineTag.displayName = 'OutlineTag';

export default OutlineTag;
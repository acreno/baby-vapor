import React from 'react';

export interface OutlineZoomTo100Props {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineZoomTo100: React.FC<OutlineZoomTo100Props> = ({ 
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
    <path fill="currentColor" d="M8.49863 5.75006C8.49863 5.48996 8.36387 5.24842 8.14252 5.11182C7.92117 4.97522 7.64485 4.96305 7.41235 5.07968L6.41571 5.57962C6.04547 5.76534 5.89589 6.21604 6.08161 6.58628C6.25257 6.92709 6.64806 7.08093 6.99863 6.95837V9.25C6.99863 9.66421 7.33442 10 7.74863 10C8.16285 10 8.49863 9.66421 8.49863 9.25V5.75006Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5C13 8.74837 12.5841 9.8996 11.8833 10.8227L13.7803 12.7197C14.0732 13.0126 14.0732 13.4874 13.7803 13.7803C13.4874 14.0732 13.0125 14.0732 12.7196 13.7803L10.8226 11.8833C9.89954 12.5841 8.74834 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5ZM7.5 11.5C9.70914 11.5 11.5 9.70914 11.5 7.5C11.5 5.29086 9.70914 3.5 7.5 3.5C5.29086 3.5 3.5 5.29086 3.5 7.5C3.5 9.70914 5.29086 11.5 7.5 11.5Z" />
  </svg>
);

OutlineZoomTo100.displayName = 'OutlineZoomTo100';

export default OutlineZoomTo100;
import React from 'react';

export interface OutlineExpandProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineExpand: React.FC<OutlineExpandProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M8.16671 12C8.29932 12 8.42649 11.9473 8.52026 11.8536L10.1869 10.1869C10.3822 9.99162 10.3822 9.67504 10.1869 9.47978C9.99167 9.28452 9.67508 9.28452 9.47982 9.47978L8.16671 10.7929L6.85359 9.47978C6.65833 9.28452 6.34175 9.28452 6.14649 9.47978C5.95123 9.67504 5.95123 9.99162 6.14649 10.1869L7.81315 11.8536C7.90692 11.9473 8.0341 12 8.16671 12Z"
         />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M8.16671 4C8.29932 4 8.42649 4.05268 8.52026 4.14645L10.1869 5.81311C10.3822 6.00838 10.3822 6.32496 10.1869 6.52022C9.99167 6.71548 9.67508 6.71548 9.47982 6.52022L8.16671 5.20711L6.85359 6.52022C6.65833 6.71548 6.34175 6.71548 6.14649 6.52022C5.95123 6.32496 5.95123 6.00838 6.14649 5.81311L7.81315 4.14645C7.90692 4.05268 8.0341 4 8.16671 4Z"
         />
  </svg>
);

OutlineExpand.displayName = 'OutlineExpand';

export default OutlineExpand;
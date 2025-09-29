import React from 'react';

export interface OutlineHomeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineHome: React.FC<OutlineHomeProps> = ({ 
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
    <path fill="currentColor" d="M4.11111 12.1667H6.55556C6.70889 12.1667 6.83334 12.0422 6.83334 11.8889V9.11111C6.83334 8.80416 7.08195 8.55555 7.38889 8.55555H8.77778C9.08473 8.55555 9.33334 8.80416 9.33334 9.11111V11.8889C9.33334 12.0422 9.45778 12.1667 9.61111 12.1667H11.8889C12.0422 12.1667 12.1667 12.0422 12.1667 11.8889V7.58639C12.1667 7.07583 11.9325 6.59333 11.5314 6.27722L8.08334 3.16666L4.46861 6.27722C4.0675 6.59333 3.83334 7.07583 3.83334 7.58639V11.8889C3.83334 12.0422 3.95778 12.1667 4.11111 12.1667Z"  stroke-miterlimit="10" stroke-linejoin="round"/>
  </svg>
);

OutlineHome.displayName = 'OutlineHome';

export default OutlineHome;
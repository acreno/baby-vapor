import React from 'react';

export interface OutlineFiletypeMotionProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFiletypeMotion: React.FC<OutlineFiletypeMotionProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 5.74805C2 5.33383 2.33579 4.99805 2.75 4.99805C3.44574 4.99805 4.14371 5.14743 4.7789 5.42027C5.41706 5.69439 5.99509 6.0954 6.48073 6.59902C6.85294 6.98501 7.16535 7.42552 7.40867 7.9049C7.4681 7.8335 7.53015 7.76423 7.59474 7.69725C7.94129 7.33788 8.35418 7.05129 8.81059 6.85525C9.18576 6.69409 9.696 6.49805 10.2531 6.49805C10.6673 6.49805 11.0031 6.83383 11.0031 7.24805C11.0031 7.66226 10.6673 7.99805 10.2531 7.99805C10.0233 7.99805 9.75441 8.08236 9.4026 8.23348C9.13203 8.3497 8.88437 8.52083 8.6745 8.73846C8.46458 8.95615 8.29668 9.21606 8.18167 9.50401C8.04163 9.8546 8.00001 9.9886 8.00001 10.2517C8.00001 10.666 7.66422 11.0017 7.25001 11.0017C6.83579 11.0017 6.50001 10.666 6.50001 10.2517L6.5 10.248C6.5 9.75314 6.41814 9.40949 6.21854 8.90976C6.02824 8.43334 5.75 8.00218 5.40098 7.64023C5.05201 7.27835 4.63921 6.9928 4.18689 6.7985C3.73161 6.60294 3.23458 6.49805 2.75 6.49805C2.33579 6.49805 2 6.16226 2 5.74805ZM13 7.99805C13.5523 7.99805 14 7.55033 14 6.99805C14 6.44576 13.5523 5.99805 13 5.99805C12.4477 5.99805 12 6.44576 12 6.99805C12 7.55033 12.4477 7.99805 13 7.99805Z" />
  </svg>
);

OutlineFiletypeMotion.displayName = 'OutlineFiletypeMotion';

export default OutlineFiletypeMotion;
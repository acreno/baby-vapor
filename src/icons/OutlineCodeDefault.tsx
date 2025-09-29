import React from 'react';

export interface OutlineCodeDefaultProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCodeDefault: React.FC<OutlineCodeDefaultProps> = ({ 
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
    <path fill="currentColor" d="M6.03051 12.0383C5.91363 12.4357 6.14102 12.8526 6.53841 12.9695C6.93579 13.0864 7.35268 12.859 7.46955 12.4616L9.96955 3.96158C10.0864 3.56419 9.85904 3.1473 9.46165 3.03043C9.06427 2.91355 8.64738 3.14095 8.53051 3.53833L6.03051 12.0383Z" />
    <path fill="currentColor" d="M15 7.99998C15 8.21259 14.9098 8.41522 14.7517 8.55745L12.2517 10.8074C11.9439 11.0845 11.4696 11.0596 11.1925 10.7517C10.9154 10.4438 10.9404 9.9696 11.2483 9.69251L13.1289 7.99998L11.2483 6.30745C10.9404 6.03035 10.9154 5.55614 11.1925 5.24825C11.4696 4.94037 11.9439 4.91541 12.2517 5.19251L14.7517 7.44251C14.9098 7.58474 15 7.78736 15 7.99998Z" />
    <path fill="currentColor" d="M1 8.00026C0.999989 7.78765 1.09022 7.58502 1.24825 7.44278L3.74825 5.19253C4.05611 4.91542 4.53033 4.94036 4.80744 5.24822C5.08455 5.55609 5.05962 6.03031 4.75175 6.30742L2.87114 8.00016L4.75169 9.69248C5.05959 9.96956 5.08458 10.4438 4.8075 10.7517C4.53042 11.0596 4.0562 11.0846 3.74831 10.8075L1.24831 8.55772C1.09026 8.4155 1.00001 8.21288 1 8.00026Z" />
  </svg>
);

OutlineCodeDefault.displayName = 'OutlineCodeDefault';

export default OutlineCodeDefault;
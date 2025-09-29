import React from 'react';

export interface OutlineArrowCurvedDownRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowCurvedDownRight: React.FC<OutlineArrowCurvedDownRightProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.2473 11.8075C9.93888 12.0841 9.46471 12.0583 9.18816 11.7499C8.91161 11.4415 8.93741 10.9673 9.24579 10.6908L10.2931 9.75159H6.74854C5.22975 9.75159 3.99854 8.52037 3.99854 7.00159V5.75C3.99854 5.33579 4.33432 5 4.74854 5C5.16275 5 5.49854 5.33579 5.49854 5.75V7.00159C5.49854 7.69195 6.05818 8.25159 6.74854 8.25159H10.2924L9.24488 7.30913C8.93696 7.03208 8.91193 6.55787 9.18898 6.24995C9.46603 5.94202 9.94024 5.917 10.2482 6.19405L12.7516 8.44651C12.9099 8.58889 13.0002 8.7918 13 9.00467C12.9998 9.21753 12.9092 9.4203 12.7507 9.56242L10.2473 11.8075Z" />
  </svg>
);

OutlineArrowCurvedDownRight.displayName = 'OutlineArrowCurvedDownRight';

export default OutlineArrowCurvedDownRight;
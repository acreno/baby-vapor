import React from 'react';

export interface OutlineArrowTriangularDownProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowTriangularDown: React.FC<OutlineArrowTriangularDownProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75244 5C3.47713 5 3.22395 5.15073 3.09288 5.39267C2.96182 5.63461 2.97394 5.92886 3.12446 6.15922L7.37245 12.6603C7.51093 12.8722 7.74712 13 8.00043 13C8.25373 13 8.48992 12.8722 8.62841 12.6603L12.8764 6.15922C13.0269 5.92886 13.039 5.63461 12.908 5.39267C12.7769 5.15073 12.5237 5 12.2484 5H3.75244Z" />
  </svg>
);

OutlineArrowTriangularDown.displayName = 'OutlineArrowTriangularDown';

export default OutlineArrowTriangularDown;
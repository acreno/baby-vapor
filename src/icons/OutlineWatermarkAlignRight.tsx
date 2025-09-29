import React from 'react';

export interface OutlineWatermarkAlignRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineWatermarkAlignRight: React.FC<OutlineWatermarkAlignRightProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.24999 2C8.28349 2 7.49999 2.7835 7.49999 3.75V12.25C7.49999 13.2165 8.28349 14 9.24999 14H12.75C13.7165 14 14.5 13.2165 14.5 12.25V3.75C14.5 2.7835 13.7165 2 12.75 2H9.24999ZM8.99999 3.75C8.99999 3.61193 9.11192 3.5 9.24999 3.5H12.75C12.8881 3.5 13 3.61193 13 3.75V12.25C13 12.3881 12.8881 12.5 12.75 12.5H9.24999C9.11192 12.5 8.99999 12.3881 8.99999 12.25V3.75Z" />
    <path fill="currentColor" d="M2.0085 4.03999C1.70446 4.1434 1.5 4.42891 1.5 4.75005V11.25C1.5 11.5712 1.70446 11.8567 2.0085 11.9601C2.31253 12.0635 2.64867 11.9619 2.84447 11.7073L5.34446 8.45733C5.55184 8.18774 5.55184 7.81235 5.34446 7.54276L2.84447 4.29276C2.64867 4.03822 2.31253 3.93658 2.0085 4.03999Z" />
  </svg>
);

OutlineWatermarkAlignRight.displayName = 'OutlineWatermarkAlignRight';

export default OutlineWatermarkAlignRight;
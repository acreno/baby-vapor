import React from 'react';

export interface OutlineComposeArrowProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineComposeArrow: React.FC<OutlineComposeArrowProps> = ({ 
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
    <path fill="currentColor" d="M12 4.75012C12 4.55121 11.921 4.36044 11.7803 4.21978C11.6396 4.07913 11.4489 4.00012 11.2499 4.00012L6.75358 4.00026C6.33936 4.00027 6.00359 4.33607 6.0036 4.75028C6.00361 5.1645 6.33941 5.50027 6.75362 5.50026L9.43907 5.50018L4.21967 10.7196C3.92678 11.0125 3.92678 11.4873 4.21967 11.7802C4.51256 12.0731 4.98744 12.0731 5.28033 11.7802L10.5 6.56059L10.5 9.2528C10.5 9.66701 10.8358 10.0028 11.25 10.0028C11.6642 10.0028 12 9.66701 12 9.2528L12 4.75012Z" />
  </svg>
);

OutlineComposeArrow.displayName = 'OutlineComposeArrow';

export default OutlineComposeArrow;
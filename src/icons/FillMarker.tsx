import React from 'react';

export interface FillMarkerProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillMarker: React.FC<FillMarkerProps> = ({ 
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
    <path fill="currentColor" d="m11.251 1.00391c.9663.00013 1.7498.78369 1.75 1.75v6.39746c0 .39452-.134.77768-.3789 1.08693l-3.25003 4.1015-.13867.1553c-.67864.6771-1.78687.6776-2.46582.001l-.13867-.1563-3.25098-4.1015c-.24504-.30927-.37891-.69236-.37891-1.08693v-6.39746c.00014-.96626.78376-1.7498 1.75-1.75z" />
  </svg>
);

FillMarker.displayName = 'FillMarker';

export default FillMarker;
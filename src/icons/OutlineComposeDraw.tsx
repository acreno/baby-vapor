import React from 'react';

export interface OutlineComposeDrawProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineComposeDraw: React.FC<OutlineComposeDrawProps> = ({ 
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
    <path fill="currentColor" d="M7.21412 1.55739C7.47572 0.815996 8.52421 0.815994 8.78581 1.55738L10.0001 4.99866H10.1167C10.682 4.99866 11.1769 5.37804 11.3238 5.92393L12.9742 12.059C13.0818 12.459 12.8448 12.8704 12.4448 12.9781C12.0448 13.0857 11.6333 12.8486 11.5257 12.4486L9.92503 6.49866H6.07484L4.47419 12.4486C4.36659 12.8486 3.9551 13.0857 3.55511 12.9781C3.15511 12.8704 2.91809 12.459 3.02569 12.059L4.67612 5.92393C4.82297 5.37805 5.31791 4.99866 5.8832 4.99866H5.99984L7.21412 1.55739Z" />
  </svg>
);

OutlineComposeDraw.displayName = 'OutlineComposeDraw';

export default OutlineComposeDraw;
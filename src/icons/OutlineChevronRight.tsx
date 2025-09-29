import React from 'react';

export interface OutlineChevronRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineChevronRight: React.FC<OutlineChevronRightProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.2372 11.8012C5.93281 11.5202 5.91378 11.0457 6.1947 10.7414L8.72523 7.99936L6.19475 5.25798C5.9138 4.95361 5.93278 4.47912 6.23715 4.19817C6.54151 3.91721 7.01601 3.9362 7.29696 4.24056L10.297 7.4906C10.5621 7.77788 10.5622 8.22066 10.297 8.50796L7.29701 11.7587C7.01609 12.0631 6.5416 12.0821 6.2372 11.8012Z" />
  </svg>
);

OutlineChevronRight.displayName = 'OutlineChevronRight';

export default OutlineChevronRight;
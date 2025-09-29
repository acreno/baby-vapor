import React from 'react';

export interface OutlineFinalCutProProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFinalCutPro: React.FC<OutlineFinalCutProProps> = ({ 
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
    <path fill="currentColor" d="M9.68983 2.53316L7.70778 3.07043L9.50706 4.65488L11.4884 4.1178L9.70799 2.54995C9.70177 2.54447 9.69572 2.53887 9.68983 2.53316Z" />
    <path fill="currentColor" d="M12.6454 3.80418L13.1329 3.67203C13.3461 3.61423 13.4721 3.39453 13.4143 3.18131C13.1832 2.32844 12.3043 1.82445 11.4515 2.05564L10.8461 2.21973L12.6454 3.80418Z" />
    <path fill="currentColor" d="M4.53653 6.00222H5.49586L3.49998 7.99802V11.25C3.49998 11.9403 4.05962 12.5 4.74997 12.5H11.25C11.9403 12.5 12.5 11.9403 12.5 11.25V8.00222H11.2753L13.2753 6.00222H13.499C13.7751 6.00222 13.999 6.22607 13.999 6.50222L14 11.25C14 12.7688 12.7688 14 11.25 14H4.74997C3.23119 14 1.99998 12.7688 1.99998 11.25L1.999 6.50222C1.999 6.40783 2.02515 6.31955 2.07061 6.24423C1.84681 5.39486 2.35011 4.5227 3.19927 4.29253L3.69058 4.15935C3.69596 4.16452 3.70147 4.1696 3.70712 4.17458L5.48929 5.74395L4.53653 6.00222Z" />
    <path fill="currentColor" d="M4.847 3.84589L6.64628 5.43034L8.35008 4.96849L6.60153 3.42873C6.58504 3.4142 6.56973 3.39883 6.55561 3.38274L4.847 3.84589Z" />
    <path fill="currentColor" d="M10.0927 6.00222H11.8611L9.86101 8.00222H8.09263L10.0927 6.00222Z" />
    <path fill="currentColor" d="M8.67847 6.00222H6.9101L4.91002 8.00222H6.67839L8.67847 6.00222Z" />
  </svg>
);

OutlineFinalCutPro.displayName = 'OutlineFinalCutPro';

export default OutlineFinalCutPro;
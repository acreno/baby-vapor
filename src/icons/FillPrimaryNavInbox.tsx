import React from 'react';

export interface FillPrimaryNavInboxProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavInbox: React.FC<FillPrimaryNavInboxProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.8022 3.10007C3.06796 2.43566 3.71145 2 4.42703 2H11.573C12.2886 2 12.932 2.43566 13.1978 3.10007L14.8748 7.29265C14.9575 7.49936 15 7.71995 15 7.94258V12.25C15 13.2165 14.2165 14 13.25 14H2.75C1.7835 14 1 13.2165 1 12.25V7.94258C1 7.71995 1.04248 7.49936 1.12517 7.29265L2.8022 3.10007ZM4.42703 3.5C4.32481 3.5 4.23288 3.56224 4.19491 3.65715L2.51788 7.84973C2.50607 7.87926 2.5 7.91078 2.5 7.94258V8H5.21313C5.72177 8 6.2148 8.17742 6.60696 8.50133C7.41559 9.16924 8.58517 9.16954 9.39354 8.50132C9.78555 8.17727 10.2782 8 10.7868 8H13.5V7.94258C13.5 7.91078 13.4939 7.87926 13.4821 7.84973L11.8051 3.65715C11.7671 3.56224 11.6752 3.5 11.573 3.5H4.42703ZM6.50264 10.5C6.15465 10.5 5.91308 10.8466 6.03356 11.1731L6.09744 11.3462C6.24242 11.7391 6.61683 12 7.0356 12H8.96833C9.3871 12 9.76151 11.7391 9.90649 11.3462L9.97037 11.1731C10.0908 10.8466 9.84928 10.5 9.50129 10.5H6.50264Z" />
  </svg>
);

FillPrimaryNavInbox.displayName = 'FillPrimaryNavInbox';

export default FillPrimaryNavInbox;
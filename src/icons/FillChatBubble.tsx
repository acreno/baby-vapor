import React from 'react';

export interface FillChatBubbleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillChatBubble: React.FC<FillChatBubbleProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.66669 7.99977C2.66669 5.0545 5.05458 2.66675 8.00002 2.66675C10.9455 2.66675 13.3334 5.0545 13.3334 7.99977C13.3334 10.945 10.9455 13.3328 8.00002 13.3328C7.05934 13.3328 6.1766 13.0869 5.40917 12.6594L3.0331 13.3224C2.8166 13.383 2.61739 13.1835 2.67793 12.9673L3.34128 10.5925C2.91289 9.82453 2.66669 8.94127 2.66669 7.99977ZM5.83333 8.66676C6.20152 8.66676 6.5 8.36828 6.5 8.00009C6.5 7.6319 6.20152 7.33343 5.83333 7.33343C5.46514 7.33343 5.16667 7.6319 5.16667 8.00009C5.16667 8.36828 5.46514 8.66676 5.83333 8.66676ZM8.66667 8.00009C8.66667 8.36828 8.36819 8.66676 8 8.66676C7.63181 8.66676 7.33333 8.36828 7.33333 8.00009C7.33333 7.6319 7.63181 7.33343 8 7.33343C8.36819 7.33343 8.66667 7.6319 8.66667 8.00009ZM10.1667 8.66676C10.5349 8.66676 10.8333 8.36828 10.8333 8.00009C10.8333 7.6319 10.5349 7.33343 10.1667 7.33343C9.79848 7.33343 9.5 7.6319 9.5 8.00009C9.5 8.36828 9.79848 8.66676 10.1667 8.66676Z"  />
  </svg>
);

FillChatBubble.displayName = 'FillChatBubble';

export default FillChatBubble;
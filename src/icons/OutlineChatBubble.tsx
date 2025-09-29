import React from 'react';

export interface OutlineChatBubbleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineChatBubble: React.FC<OutlineChatBubbleProps> = ({ 
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
    <path fill="currentColor" d="M7.99996 2.66666C5.05452 2.66666 2.66663 5.05441 2.66663 7.99968C2.66663 8.94118 2.91282 9.82444 3.34122 10.5924L2.67787 12.9672C2.61733 13.1834 2.81654 13.3829 3.03304 13.3223L5.40911 12.6593C6.17654 13.0868 7.05927 13.3327 7.99996 13.3327C10.9454 13.3327 13.3333 10.945 13.3333 7.99968C13.3333 5.05441 10.9454 2.66666 7.99996 2.66666Z"  stroke-miterlimit="10" stroke-linejoin="round"/>
    <circle fill="currentColor" cx="5.83335" cy="8.00001" r="0.666667" />
    <circle fill="currentColor" cx="8.00004" cy="8.00001" r="0.666667" />
    <circle fill="currentColor" cx="10.1667" cy="8.00001" r="0.666667" />
  </svg>
);

OutlineChatBubble.displayName = 'OutlineChatBubble';

export default OutlineChatBubble;
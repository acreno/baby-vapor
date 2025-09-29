import React from 'react';

export interface OutlineCommentReplyUpProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCommentReplyUp: React.FC<OutlineCommentReplyUpProps> = ({ 
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
    <path fill="currentColor"
        d="M7.99999 2.66666C5.05455 2.66666 2.66666 5.05441 2.66666 7.99968C2.66666 8.94118 2.91285 9.82444 3.34125 10.5924L2.6779 12.9672C2.61736 13.1834 2.81657 13.3829 3.03307 13.3223L5.40914 12.6593C6.17657 13.0868 7.05931 13.3327 7.99999 13.3327C10.9454 13.3327 13.3333 10.945 13.3333 7.99968C13.3333 5.05441 10.9454 2.66666 7.99999 2.66666Z"
         stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path fill="currentColor" d="M8.00001 10.6389L8.00001 5.50003M6.33334 7.02775L8.00001 5.36108L9.66668 7.02775" 
        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

OutlineCommentReplyUp.displayName = 'OutlineCommentReplyUp';

export default OutlineCommentReplyUp;
import React from 'react';

export interface OutlinePinCommentsProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePinComments: React.FC<OutlinePinCommentsProps> = ({ 
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
    <path fill="currentColor" d="M8 8.5C8.82843 8.5 9.5 7.82843 9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7C6.5 7.82843 7.17157 8.5 8 8.5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.2496 2.74223C14.586 5.06517 14.5862 8.85364 12.2339 11.1765L8.65859 14.7311C8.28219 15.0896 7.68628 15.0896 7.32564 14.7311L3.75035 11.1765C1.41393 8.85358 1.41393 5.06519 3.7661 2.74223C6.10258 0.419258 9.91307 0.419258 12.2496 2.74223ZM11.1763 10.1128L7.99212 13.2785L4.80794 10.1128C3.06202 8.37695 3.06198 5.5458 4.82011 3.80949L4.82368 3.80596C6.57509 2.06468 9.44055 2.06466 11.192 3.80595C12.938 5.54186 12.938 8.37306 11.1799 10.1092L11.1763 10.1128Z" />
  </svg>
);

OutlinePinComments.displayName = 'OutlinePinComments';

export default OutlinePinComments;
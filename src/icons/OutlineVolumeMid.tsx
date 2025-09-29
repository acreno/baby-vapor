import React from 'react';

export interface OutlineVolumeMidProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineVolumeMid: React.FC<OutlineVolumeMidProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.99878 2.75001C8.99878 2.46168 8.8335 2.19888 8.57362 2.074C8.31374 1.94913 8.00528 1.98428 7.78017 2.16443L4.57928 4.72597C4.35762 4.90336 4.03391 5.00001 3.75 5.00001H2.75085C1.78436 5.00001 1.00085 5.78351 1.00085 6.75001V9.25001C1.00085 10.2165 1.78436 11 2.75085 11H3.75C4.03392 11 4.35761 11.0967 4.57928 11.2741L7.78015 13.8357C8.00526 14.0159 8.31373 14.051 8.57361 13.9262C8.83349 13.8013 8.99878 13.5385 8.99878 13.2502V2.75001ZM5.51651 5.89712L7.49878 4.31079V11.6893L5.51654 10.1029C5.02886 9.71265 4.37462 9.50001 3.75 9.50001H2.75085C2.61278 9.50001 2.50085 9.38808 2.50085 9.25001V6.75001C2.50085 6.61194 2.61278 6.50001 2.75085 6.50001H3.75C4.3746 6.50001 5.02885 6.28738 5.51651 5.89712Z" />
    <path fill="currentColor" d="M11.3937 5.85893C11.1738 5.50229 10.7091 5.393 10.3557 5.61483C10.0023 5.83665 9.89396 6.3056 10.1138 6.66224C10.3613 7.0638 10.4998 7.52721 10.5 8.0001C10.5002 8.473 10.362 8.93651 10.1148 9.33826C9.89528 9.69508 10.0039 10.1639 10.3575 10.3855C10.7111 10.607 11.1758 10.4974 11.3953 10.1406C11.7908 9.49776 12.0003 8.75614 12 7.99951C11.9997 7.24288 11.7897 6.50142 11.3937 5.85893Z" />
  </svg>
);

OutlineVolumeMid.displayName = 'OutlineVolumeMid';

export default OutlineVolumeMid;
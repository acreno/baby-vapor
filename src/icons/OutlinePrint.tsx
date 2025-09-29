import React from 'react';

export interface OutlinePrintProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePrint: React.FC<OutlinePrintProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.75 1C4.33579 1 4 1.33579 4 1.75V3.99561H3.25C2.55964 3.99561 2 4.55525 2 5.24561V10.7456C2 11.436 2.55964 11.9956 3.25 11.9956H4V14.25C4 14.6642 4.33579 15 4.75 15H11.25C11.6642 15 12 14.6642 12 14.25V11.9956H12.75C13.4404 11.9956 14 11.436 14 10.7456V5.24561C14 4.55525 13.4404 3.99561 12.75 3.99561H12V1.75C12 1.33579 11.6642 1 11.25 1H4.75ZM4 9.75V10.4956H3.5V5.49561H12.5V10.4956H12V9.75C12 9.33579 11.6642 9 11.25 9H4.75C4.33579 9 4 9.33579 4 9.75ZM10.5 3.99561V2.5H5.5V3.99561H10.5ZM5.5 10.5V13.5H10.5V10.5H5.5ZM10.75 8C11.1642 8 11.5 7.66421 11.5 7.25C11.5 6.83579 11.1642 6.5 10.75 6.5C10.3358 6.5 10 6.83579 10 7.25C10 7.66421 10.3358 8 10.75 8Z" />
  </svg>
);

OutlinePrint.displayName = 'OutlinePrint';

export default OutlinePrint;
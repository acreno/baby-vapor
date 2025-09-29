import React from 'react';

export interface OutlineSkipAheadProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSkipAhead: React.FC<OutlineSkipAheadProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.17423 3.2699C6.43966 2.95191 6.91262 2.9093 7.23061 3.17473L8.73248 4.42838C8.9035 4.57114 9.00221 4.78253 9.00187 5.0053C9.00153 5.22807 8.90217 5.43916 8.73072 5.58139L7.22885 6.82726C6.91004 7.09172 6.43722 7.04767 6.17276 6.72886C6.05192 6.5832 5.9955 6.40537 6.00026 6.22996C5.10112 6.82319 4.5 7.80994 4.5 8.9C4.5 10.8424 6.21168 12.5 8.00001 12.5C9.772 12.5 11.5 10.8591 11.5 8.75C11.5 8.33578 11.8358 8 12.25 8C12.6642 8 13 8.33578 13 8.75C13 11.6409 10.6463 14 8.00001 14C5.37006 14 3 11.6576 3 8.9C3 6.77727 4.47563 5.02999 6.36078 4.40257L6.26939 4.32628C5.9514 4.06085 5.90879 3.58789 6.17423 3.2699ZM9.17452 3.26954C9.44015 2.95172 9.91314 2.9094 10.231 3.17503L11.731 4.42868C11.9018 4.57143 12.0003 4.78269 12 5.0053C11.9997 5.22791 11.9004 5.43887 11.7292 5.5811L10.2292 6.82697C9.91056 7.09162 9.43771 7.04786 9.17305 6.72922C8.9084 6.41058 8.95216 5.93773 9.2708 5.67307L10.0783 5.00236L9.26904 4.32598C8.95121 4.06036 8.90889 3.58737 9.17452 3.26954Z" />
  </svg>
);

OutlineSkipAhead.displayName = 'OutlineSkipAhead';

export default OutlineSkipAhead;
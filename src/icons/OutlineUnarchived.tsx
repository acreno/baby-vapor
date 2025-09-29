import React from 'react';

export interface OutlineUnarchivedProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineUnarchived: React.FC<OutlineUnarchivedProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.445 2.2986C2.69308 1.36503 3.64475 0.811015 4.57061 1.06116L12.7132 3.26112C13.6391 3.51127 14.1885 4.47086 13.9404 5.40443L13.555 6.85485C13.4598 7.213 13.2611 7.51529 13 7.73775V11.2515C13 12.7703 11.7688 14.0015 10.25 14.0015H5.75C4.23122 14.0015 3 12.7703 3 11.2515V8.75C3 8.33579 3.33579 8 3.75 8C4.16421 8 4.5 8.33579 4.5 8.75V11.2515C4.5 11.9418 5.05964 12.5015 5.75 12.5015H10.25C10.9404 12.5015 11.5 11.9418 11.5 11.2515V8.1098C11.4765 8.10448 11.4529 8.09864 11.4294 8.09229L3.28679 5.89232C2.36093 5.64218 1.81149 4.68259 2.05957 3.74902L2.445 2.2986ZM4.18559 2.51005C4.05332 2.47432 3.91737 2.55346 3.88193 2.68683L3.4965 4.13725C3.46106 4.27062 3.53955 4.4077 3.67181 4.44344L11.8144 6.6434C11.9467 6.67913 12.0826 6.59999 12.1181 6.46662L12.5035 5.0162C12.5389 4.88283 12.4605 4.74575 12.3282 4.71001L4.18559 2.51005Z" />
    <path fill="currentColor" d="M6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H9.25C9.66421 10.5 10 10.1642 10 9.75C10 9.33579 9.66421 9 9.25 9L6.75 9Z" />
  </svg>
);

OutlineUnarchived.displayName = 'OutlineUnarchived';

export default OutlineUnarchived;
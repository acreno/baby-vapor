import React from 'react';

export interface FillArchiveProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillArchive: React.FC<FillArchiveProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.25C2 2.55964 2.55964 2 3.25 2H12.75C13.4404 2 14 2.55964 14 3.25V4.75C14 5.44012 13.4407 5.99961 12.7507 6C12.7505 6 12.7502 6 12.75 6H3.25H3.24971C2.55949 5.99984 2 5.44026 2 4.75V3.25ZM3 7.5V11.2515C3 12.7702 4.23122 14.0015 5.75 14.0015H10.25C11.7688 14.0015 13 12.7702 13 11.2515V7.5H3ZM6 9.75C6 9.33579 6.33579 9 6.75 9L9.25 9C9.66421 9 10 9.33579 10 9.75C10 10.1642 9.66421 10.5 9.25 10.5H6.75C6.33579 10.5 6 10.1642 6 9.75Z" />
  </svg>
);

FillArchive.displayName = 'FillArchive';

export default FillArchive;
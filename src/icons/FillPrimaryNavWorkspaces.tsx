import React from 'react';

export interface FillPrimaryNavWorkspacesProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavWorkspaces: React.FC<FillPrimaryNavWorkspacesProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 6.99998V11.25C2 12.7688 3.23122 14 4.75 14H11.25C12.7688 14 14 12.7688 14 11.25V6.99998H2ZM9.72734 10.945C10.0959 10.761 10.0959 10.236 9.72734 10.0521L7.72361 9.05188C7.39116 8.88593 7 9.12727 7 9.49834L7 11.4987C7 11.8698 7.39116 12.1111 7.72361 11.9452L9.72734 10.945Z" />
    <path fill="currentColor" d="M14 4.99998V4.75C14 3.23122 12.7688 2 11.25 2H10.5162L12.3162 4.99998H14Z" />
    <path fill="currentColor" d="M8.18382 2H5.67067L7.77066 4.99998H9.98381L8.18382 2Z" />
    <path fill="currentColor" d="M3.45553 2.3231C2.58935 2.78608 2 3.69921 2 4.75V4.99998H5.32934L3.45553 2.3231Z" />
  </svg>
);

FillPrimaryNavWorkspaces.displayName = 'FillPrimaryNavWorkspaces';

export default FillPrimaryNavWorkspaces;
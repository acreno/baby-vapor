import React from 'react';

export interface FillXProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillX: React.FC<FillXProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M20.7804 8.28033C21.0733 7.98744 21.0733 7.51256 20.7804 7.21967C20.4875 6.92678 20.0126 6.92678 19.7197 7.21967L14 12.9393L8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L12.9393 14L7.21967 19.7197C6.92678 20.0126 6.92678 20.4874 7.21967 20.7803C7.51256 21.0732 7.98744 21.0732 8.28033 20.7803L14 15.0607L19.7197 20.7803C20.0126 21.0732 20.4874 21.0732 20.7803 20.7803C21.0732 20.4874 21.0732 20.0126 20.7803 19.7197L15.0607 14L20.7804 8.28033Z" />
  </svg>
);

FillX.displayName = 'FillX';

export default FillX;
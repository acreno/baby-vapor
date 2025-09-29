import React from 'react';

export interface FillMagnifyingglassProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillMagnifyingglass: React.FC<FillMagnifyingglassProps> = ({ 
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
    <path fill="currentColor" d="M7.49805 5C8.8787 5.00007 9.99805 6.11933 9.99805 7.5C9.99805 8.88067 8.8787 9.99993 7.49805 10C6.11733 10 4.99805 8.88071 4.99805 7.5C4.99805 6.11929 6.11733 5 7.49805 5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C10.5376 2 13 4.46243 13 7.5C13 8.74828 12.5826 9.89824 11.8818 10.8213L13.7803 12.7197C14.0732 13.0126 14.0732 13.4874 13.7803 13.7803C13.4874 14.0732 13.0126 14.0732 12.7197 13.7803L10.8213 11.8818C9.89824 12.5826 8.74828 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2ZM7.5 3.5C5.29086 3.5 3.5 5.29086 3.5 7.5C3.5 9.70914 5.29086 11.5 7.5 11.5C9.70914 11.5 11.5 9.70914 11.5 7.5C11.5 5.29086 9.70914 3.5 7.5 3.5Z" />
  </svg>
);

FillMagnifyingglass.displayName = 'FillMagnifyingglass';

export default FillMagnifyingglass;
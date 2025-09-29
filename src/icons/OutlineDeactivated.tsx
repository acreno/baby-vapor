import React from 'react';

export interface OutlineDeactivatedProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineDeactivated: React.FC<OutlineDeactivatedProps> = ({ 
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
    <path fill="currentColor" d="M6.21966 8.71967C5.92677 9.01256 5.92677 9.48743 6.21966 9.78033C6.51255 10.0732 6.98743 10.0732 7.28032 9.78033L9.78032 7.28034C10.0732 6.98745 10.0732 6.51258 9.78032 6.21968C9.48743 5.92679 9.01256 5.92679 8.71966 6.21968L6.21966 8.71967Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z" />
  </svg>
);

OutlineDeactivated.displayName = 'OutlineDeactivated';

export default OutlineDeactivated;
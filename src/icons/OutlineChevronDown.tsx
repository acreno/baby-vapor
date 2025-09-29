import React from 'react';

export interface OutlineChevronDownProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineChevronDown: React.FC<OutlineChevronDownProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.19848 6.24135C4.4794 5.93696 4.95389 5.91793 5.25829 6.19885L8.00028 8.72938L10.7417 6.1989C11.046 5.91795 11.5205 5.93693 11.8015 6.2413C12.0824 6.54566 12.0634 7.02016 11.7591 7.30111L8.50904 10.3011C8.22176 10.5663 7.77898 10.5663 7.49168 10.3012L4.24099 7.30116C3.93659 7.02024 3.91756 6.54575 4.19848 6.24135Z" />
  </svg>
);

OutlineChevronDown.displayName = 'OutlineChevronDown';

export default OutlineChevronDown;
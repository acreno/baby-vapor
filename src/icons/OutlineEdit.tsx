import React from 'react';

export interface OutlineEditProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineEdit: React.FC<OutlineEditProps> = ({ 
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
    <path fill="currentColor" d="M13.22 2.78945C12.17 1.74011 10.46 1.74011 9.40995 2.78945L3.49995 8.68576C3.29995 8.88564 3.14995 9.12549 3.05995 9.39532L2.05995 12.4234C1.91995 12.8532 2.02995 13.3229 2.34995 13.6527C2.57995 13.8825 2.87995 14.0024 3.18995 14.0024C3.31995 14.0024 3.43995 13.9825 3.56995 13.9425L6.59995 12.9431C6.86995 12.8532 7.10995 12.7033 7.30995 12.5034L13.21 6.60706C14.26 5.55772 14.26 3.84879 13.21 2.79944L13.22 2.78945ZM6.24995 11.434C6.24995 11.434 6.17995 11.494 6.12995 11.504L3.66995 12.3235L4.48995 9.86503C4.48995 9.86503 4.52995 9.78508 4.55995 9.7451L8.73995 5.56771L10.45 7.23667L6.24995 11.434ZM12.16 5.53773L11.52 6.17733L9.80995 4.50838L10.47 3.84879C10.94 3.37908 11.7 3.37908 12.16 3.84879C12.63 4.31849 12.63 5.07802 12.16 5.53773Z" />
  </svg>
);

OutlineEdit.displayName = 'OutlineEdit';

export default OutlineEdit;
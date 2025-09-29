import React from 'react';

export interface FillCardMinimalProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillCardMinimal: React.FC<FillCardMinimalProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M2 3.875C2 2.83947 2.83947 2 3.875 2H12.125C13.1605 2 14 2.83947 14 3.875V12.125C14 13.1605 13.1605 14 12.125 14H3.875C2.83947 14 2 13.1605 2 12.125V3.875ZM3.875 3C3.39175 3 3 3.39175 3 3.875V12.125C3 12.6082 3.39175 13 3.875 13H12.125C12.6082 13 13 12.6082 13 12.125V3.875C13 3.39175 12.6082 3 12.125 3H3.875Z"
         />
  </svg>
);

FillCardMinimal.displayName = 'FillCardMinimal';

export default FillCardMinimal;
import React from 'react';

export interface OutlineArrowTriangularRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowTriangularRight: React.FC<OutlineArrowTriangularRightProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5 12.25C5 12.5253 5.15073 12.7785 5.39267 12.9096C5.63461 13.0406 5.92886 13.0285 6.15922 12.878L12.6603 8.63C12.8722 8.49151 13 8.25532 13 8.00201C13 7.74871 12.8722 7.51252 12.6603 7.37403L6.15922 3.12605C5.92886 2.97553 5.63461 2.9634 5.39267 3.09447C5.15073 3.22554 5 3.47872 5 3.75403L5 12.25Z" />
  </svg>
);

OutlineArrowTriangularRight.displayName = 'OutlineArrowTriangularRight';

export default OutlineArrowTriangularRight;
import React from 'react';

export interface OutlineArrowRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowRight: React.FC<OutlineArrowRightProps> = ({ 
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
    <path fill="currentColor" d="M12.76 8.54966C12.9128 8.40775 12.9996 8.20863 12.9996 8.00009C12.9996 7.79155 12.9128 7.59243 12.76 7.45052L9.26037 4.20044C8.95686 3.91857 8.48231 3.93611 8.20044 4.23963C7.91857 4.54314 7.93611 5.01769 8.23963 5.29957L10.3398 7.25H3.75C3.33579 7.25 3 7.58579 3 8C3 8.41422 3.33579 8.75 3.75 8.75H10.3399L8.23964 10.7004C7.93612 10.9823 7.91856 11.4568 8.20043 11.7604C8.48229 12.0639 8.95684 12.0814 9.26036 11.7996L12.76 8.54966Z" />
  </svg>
);

OutlineArrowRight.displayName = 'OutlineArrowRight';

export default OutlineArrowRight;
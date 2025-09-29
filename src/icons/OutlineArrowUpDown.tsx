import React from 'react';

export interface OutlineArrowUpDownProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowUpDown: React.FC<OutlineArrowUpDownProps> = ({ 
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
    <path fill="currentColor" d="M11.8457 5.7074C11.593 6.03556 11.122 6.09669 10.7939 5.84394L8.75152 4.27087L8.75152 11.7255L10.7944 10.1552C11.1228 9.90281 11.5937 9.9644 11.8461 10.2928C12.0986 10.6212 12.037 11.0921 11.7086 11.3445L8.45858 13.8426C8.18908 14.0498 7.81397 14.0498 7.54447 13.8427L4.29446 11.3447C3.96604 11.0923 3.90443 10.6215 4.15685 10.293C4.40927 9.96463 4.88013 9.90302 5.20855 10.1554L7.25152 11.7256V4.27122L5.21008 5.844C4.88196 6.09679 4.41103 6.03573 4.15823 5.7076C3.90543 5.37947 3.9665 4.90854 4.29463 4.65575L7.54385 2.15246C7.81359 1.94465 8.18947 1.94462 8.45923 2.1524L11.7092 4.65557C12.0373 4.90832 12.0985 5.37925 11.8457 5.7074Z" />
  </svg>
);

OutlineArrowUpDown.displayName = 'OutlineArrowUpDown';

export default OutlineArrowUpDown;
import React from 'react';

export interface OutlineArrowLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowLeft: React.FC<OutlineArrowLeftProps> = ({ 
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
    <path fill="currentColor" d="M3.24089 7.45032C3.08803 7.5922 3.00114 7.79132 3.0011 7.99988C3.00105 8.20843 3.08785 8.40759 3.24065 8.54953L6.73914 11.7994C7.04261 12.0813 7.51717 12.0638 7.79908 11.7604C8.08099 11.4569 8.06351 10.9823 7.76003 10.7004L5.66032 8.74992L12.2471 8.74992C12.6614 8.74992 12.9971 8.41414 12.9971 7.99992C12.9971 7.58571 12.6614 7.24992 12.2471 7.24992L5.66177 7.24992L7.7598 5.30265C8.0634 5.02086 8.08108 4.54632 7.7993 4.24272C7.51751 3.93912 7.04297 3.92144 6.73937 4.20322L3.24089 7.45032Z" />
  </svg>
);

OutlineArrowLeft.displayName = 'OutlineArrowLeft';

export default OutlineArrowLeft;
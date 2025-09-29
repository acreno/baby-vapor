import React from 'react';

export interface OutlineRectangleAngledProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineRectangleAngled: React.FC<OutlineRectangleAngledProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.29597 2.74263C1.36241 2.99278 0.80839 3.95237 1.05854 4.88594L2.74086 11.1645C2.99101 12.098 3.9506 12.652 4.88416 12.4019L4.99999 12.3709V13.2501C4.99999 14.2166 5.78349 15.0001 6.74999 15.0001H13.25C14.2165 15.0001 15 14.2166 15 13.2501V6.75007C15 5.78357 14.2165 5.00007 13.25 5.00007H11.4419L10.7178 2.29775C10.4676 1.36418 9.50806 0.81016 8.57449 1.06031L2.29597 2.74263ZM9.88897 5.00007L9.26891 2.68597C9.23317 2.55261 9.09609 2.47346 8.96272 2.5092L2.6842 4.19152C2.55084 4.22726 2.47169 4.36434 2.50743 4.49771L4.18975 10.7762C4.22549 10.9096 4.36257 10.9887 4.49594 10.953L4.99999 10.8179V6.75007C4.99999 5.78357 5.78349 5.00007 6.74999 5.00007H9.88897ZM6.49999 6.75007C6.49999 6.61199 6.61192 6.50007 6.74999 6.50007H13.25C13.3881 6.50007 13.5 6.61199 13.5 6.75007V13.2501C13.5 13.3881 13.3881 13.5001 13.25 13.5001H6.74999C6.61192 13.5001 6.49999 13.3881 6.49999 13.2501V6.75007Z" />
  </svg>
);

OutlineRectangleAngled.displayName = 'OutlineRectangleAngled';

export default OutlineRectangleAngled;
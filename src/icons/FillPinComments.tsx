import React from 'react';

export interface FillPinCommentsProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPinComments: React.FC<FillPinCommentsProps> = ({ 
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
    <path fill="currentColor" d="M7.99965 4.99997C9.10421 4.99997 9.99964 5.89541 9.99965 6.99997C9.99965 8.10454 9.10422 8.99997 7.99965 8.99997C6.8952 8.99984 5.99965 8.10446 5.99965 6.99997C5.99966 5.8955 6.8952 5.00011 7.99965 4.99997Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.76528 2.74216C6.1017 0.419247 9.91316 0.419313 12.2497 2.74216C14.5859 5.0651 14.5852 8.85393 12.2331 11.1767L8.65785 14.7314L8.58559 14.7939C8.23367 15.0686 7.73495 15.0687 7.39516 14.7939L7.32485 14.7314L3.74965 11.1767C1.41354 8.85391 1.41353 5.06508 3.76528 2.74216ZM10.8395 4.16013C9.28308 2.61286 6.73176 2.6128 5.17543 4.16013L5.17153 4.16501C3.61168 5.70561 3.61125 8.21764 5.15981 9.75779L7.99086 12.5722L10.8239 9.75779L10.8278 9.75388C12.3878 8.21331 12.3886 5.70035 10.8395 4.16013Z" />
  </svg>
);

FillPinComments.displayName = 'FillPinComments';

export default FillPinComments;
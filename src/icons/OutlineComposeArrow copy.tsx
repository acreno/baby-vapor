import React from 'react';

export interface OutlineComposeArrow copyProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineComposeArrow copy: React.FC<OutlineComposeArrow copyProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" d="M22.2951 4.03833C23.2921 3.80283 24.1866 4.68946 23.9683 5.68457L23.9703 5.68555L21.9561 15.9128C21.9539 15.9238 21.9519 15.9351 21.9493 15.946C21.693 16.9952 20.3901 17.3633 19.6225 16.6035C19.6055 16.5866 19.589 16.5692 19.5737 16.5508L17.5536 14.1249L5.21548 23.8392C4.91573 24.0752 4.4865 24.0488 4.21815 23.7776C3.94982 23.5063 3.92817 23.0764 4.16736 22.7791L13.956 10.6106L11.5062 8.78948C11.478 8.7685 11.451 8.74581 11.4261 8.72109C10.6531 7.95591 11.0196 6.63917 12.0766 6.38313L12.0854 6.38117L22.2951 4.03638V4.03833ZM12.6715 7.78512L15.4769 9.87199C15.6406 9.99368 15.748 10.1767 15.7739 10.3791C15.7996 10.5811 15.7422 10.785 15.6146 10.9438L9.47243 18.5771L17.2 12.4943L17.325 12.4141C17.6308 12.259 18.0127 12.3303 18.2403 12.6037L20.5348 15.3608L22.4699 5.53509L12.6715 7.78512Z" />
  </svg>
);

OutlineComposeArrow copy.displayName = 'OutlineComposeArrow copy';

export default OutlineComposeArrow copy;
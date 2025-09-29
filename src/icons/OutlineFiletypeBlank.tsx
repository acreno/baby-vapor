import React from 'react';

export interface OutlineFiletypeBlankProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFiletypeBlank: React.FC<OutlineFiletypeBlankProps> = ({ 
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
    <path fill="currentColor" d="M6.75998 8.67605L4.62762 8.07568C4.15674 7.94314 3.89143 7.45112 4.04243 6.99072C4.19719 6.52009 4.72264 6.27734 5.18693 6.46243L7.29389 7.30277L7.15512 4.90219C7.1269 4.4125 7.5211 4 8.01738 4H8.0583C8.55411 4 8.94832 4.41203 8.92056 4.90173L8.78085 7.36927L10.8069 6.55311C11.2726 6.3657 11.8013 6.60938 11.9552 7.0828L11.9585 7.09257C12.108 7.55389 11.8404 8.04591 11.3686 8.17613L9.18164 8.77976L10.6258 10.5972C10.9301 10.9799 10.8492 11.5361 10.4489 11.8193L10.4183 11.8407C10.0124 12.1276 9.44507 12.0156 9.18211 11.5961L7.93271 9.60429L6.62252 11.6035C6.36097 12.0109 5.80966 12.123 5.40652 11.8509C4.99303 11.5719 4.89142 10.9952 5.20189 10.6069L6.75998 8.67605Z" />
  </svg>
);

OutlineFiletypeBlank.displayName = 'OutlineFiletypeBlank';

export default OutlineFiletypeBlank;
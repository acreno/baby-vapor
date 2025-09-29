import React from 'react';

export interface OutlineCustomFieldSelectAlternativeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldSelectAlternative: React.FC<OutlineCustomFieldSelectAlternativeProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M10.5 8.5H17.5C20.5376 8.5 23 10.9624 23 14C23 17.0376 20.5376 19.5 17.5 19.5H10.5C7.46243 19.5 5 17.0376 5 14C5 10.9624 7.46243 8.5 10.5 8.5ZM3.5 14C3.5 10.134 6.63401 7 10.5 7H17.5C21.366 7 24.5 10.134 24.5 14C24.5 17.866 21.366 21 17.5 21H10.5C6.63401 21 3.5 17.866 3.5 14ZM18.0833 15.75C19.0498 15.75 19.8333 14.9665 19.8333 14C19.8333 13.0335 19.0498 12.25 18.0833 12.25C17.1168 12.25 16.3333 13.0335 16.3333 14C16.3333 14.9665 17.1168 15.75 18.0833 15.75Z"
         />
  </svg>
);

OutlineCustomFieldSelectAlternative.displayName = 'OutlineCustomFieldSelectAlternative';

export default OutlineCustomFieldSelectAlternative;
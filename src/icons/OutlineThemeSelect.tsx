import React from 'react';

export interface OutlineThemeSelectProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineThemeSelect: React.FC<OutlineThemeSelectProps> = ({ 
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
    <path fill="currentColor" d="M8.98965 4.12435C8.45453 3.98769 8 4.44772 8 5L8 11C8 11.5523 8.45454 12.0123 8.98965 11.8757C9.67966 11.6994 10.3163 11.3405 10.8284 10.8284C11.5786 10.0783 12 9.06087 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.3163 4.65947 9.67966 4.30056 8.98965 4.12435Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z" />
  </svg>
);

OutlineThemeSelect.displayName = 'OutlineThemeSelect';

export default OutlineThemeSelect;
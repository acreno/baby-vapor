import React from 'react';

export interface OutlineCustomFieldSelectProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldSelect: React.FC<OutlineCustomFieldSelectProps> = ({ 
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
    <path fill="currentColor" d="M10.8069 7.25122C11.0048 7.03098 11.0546 6.71496 10.934 6.44456C10.8134 6.17416 10.5451 6 10.249 6L5.75096 6C5.45471 6 5.18623 6.17438 5.06577 6.44503C4.9453 6.71568 4.99545 7.03188 5.19373 7.25199L7.44588 9.75199C7.58823 9.91 7.79096 10.0001 8.00363 10C8.2163 9.99985 8.41891 9.90942 8.56104 9.75122L10.8069 7.25122Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H3.75Z" />
  </svg>
);

OutlineCustomFieldSelect.displayName = 'OutlineCustomFieldSelect';

export default OutlineCustomFieldSelect;
import React from 'react';

export interface OutlineCardDefaultProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCardDefault: React.FC<OutlineCardDefaultProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1 4.75012C1 3.78362 1.7835 3.00012 2.75 3.00012H13.25C14.2165 3.00012 15 3.78362 15 4.75012V11.2539C15 12.2204 14.2165 13.0039 13.25 13.0039H2.75C1.7835 13.0039 1 12.2204 1 11.2539V4.75012ZM2.75 4.50012C2.61193 4.50012 2.5 4.61205 2.5 4.75012V11.2539C2.5 11.392 2.61193 11.5039 2.75 11.5039H13.25C13.3881 11.5039 13.5 11.392 13.5 11.2539V4.75012C13.5 4.61205 13.3881 4.50012 13.25 4.50012H2.75Z" />
  </svg>
);

OutlineCardDefault.displayName = 'OutlineCardDefault';

export default OutlineCardDefault;
import React from 'react';

export interface OutlineMarkerProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineMarker: React.FC<OutlineMarkerProps> = ({ 
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
    <path fill="currentColor" d="m13.0007 9.15161c0 .39463-.1338.77764-.3789 1.08689l-3.24997 4.1016-.13868.1553c-.67863.677-1.78686.6775-2.46582.0009l-.13867-.1562-3.25097-4.1016c-.24506-.30923-.37891-.69231-.37891-1.08689v-6.39746c0-.96637.78368-1.74979 1.75-1.75h6.50192c.9665 0 1.75.7835 1.75 1.75zm-8.25192-6.64746c-.1379.00021-.25.11206-.25.25v6.39746c0 .05638.01967.11109.05469.15527l3.25097 4.10152.04102.042c.08997.0709.21854.0708.30859 0l.04199-.042 3.25096-4.10152c.0349-.04413.0537-.09901.0537-.15527v-6.39746c0-.13807-.1119-.25-.25-.25z" />
  </svg>
);

OutlineMarker.displayName = 'OutlineMarker';

export default OutlineMarker;
import React from 'react';

export interface OutlineHashtagProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineHashtag: React.FC<OutlineHashtagProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.8561 2.01045C11.2661 2.06904 11.5511 2.44895 11.4925 2.859L11.186 5.00339H13.25C13.6642 5.00339 14 5.33918 14 5.75339C14 6.1676 13.6642 6.50339 13.25 6.50339H10.9717L10.5435 9.49997H12.25C12.6642 9.49997 13 9.83576 13 10.25C13 10.6642 12.6642 11 12.25 11H10.3291L9.99246 13.3561C9.93386 13.7661 9.55395 14.051 9.1439 13.9924C8.73386 13.9338 8.44895 13.5539 8.50754 13.1439L8.8139 11H6.32914L5.99246 13.3561C5.93386 13.7661 5.55395 14.051 5.1439 13.9924C4.73386 13.9338 4.44895 13.5539 4.50754 13.1439L4.8139 11H2.75C2.33579 11 2 10.6642 2 10.25C2 9.83576 2.33579 9.49997 2.75 9.49997H5.02825L5.45645 6.50339H3.75C3.33579 6.50339 3 6.1676 3 5.75339C3 5.33918 3.33579 5.00339 3.75 5.00339H5.6708L6.00755 2.64681C6.06614 2.23676 6.44605 1.95185 6.8561 2.01045C7.26615 2.06904 7.55106 2.44895 7.49246 2.859L7.18603 5.00339H9.6708L10.0075 2.64681C10.0661 2.23676 10.4461 1.95185 10.8561 2.01045ZM6.97169 6.50339L6.54348 9.49997H9.02825L9.45645 6.50339H6.97169Z" />
  </svg>
);

OutlineHashtag.displayName = 'OutlineHashtag';

export default OutlineHashtag;
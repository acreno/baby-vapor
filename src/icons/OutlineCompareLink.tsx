import React from 'react';

export interface OutlineCompareLinkProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCompareLink: React.FC<OutlineCompareLinkProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.5 7.99829C2.5 6.61758 3.61929 5.49829 5 5.49829H5.25C5.66421 5.49829 6 5.1625 6 4.74829C6 4.33408 5.66421 3.99829 5.25 3.99829H5C2.79086 3.99829 1 5.78915 1 7.99829C1 10.2074 2.79086 11.9983 5 11.9983H6C8.20914 11.9983 10 10.2074 10 7.99829V7.75C10 7.33579 9.66421 7 9.25 7C8.83579 7 8.5 7.33579 8.5 7.75V7.99829C8.5 9.379 7.38071 10.4983 6 10.4983H5C3.61929 10.4983 2.5 9.379 2.5 7.99829ZM13.5 7.99829C13.5 9.379 12.3807 10.4983 11 10.4983H10.75C10.3358 10.4983 10 10.8341 10 11.2483C10 11.6625 10.3358 11.9983 10.75 11.9983H11C13.2091 11.9983 15 10.2074 15 7.99829C15 5.78915 13.2091 3.99829 11 3.99829H10C7.79086 3.99829 6 5.78915 6 7.99829V8.24658C6 8.6608 6.33579 8.99658 6.75 8.99658C7.16421 8.99658 7.5 8.6608 7.5 8.24658V7.99829C7.5 6.61758 8.61929 5.49829 10 5.49829H11C12.3807 5.49829 13.5 6.61758 13.5 7.99829Z" />
  </svg>
);

OutlineCompareLink.displayName = 'OutlineCompareLink';

export default OutlineCompareLink;
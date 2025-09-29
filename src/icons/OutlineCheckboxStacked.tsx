import React from 'react';

export interface OutlineCheckboxStackedProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCheckboxStacked: React.FC<OutlineCheckboxStackedProps> = ({ 
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
    <path fill="currentColor" d="M11.6556 7.11921C12.004 7.34319 12.1049 7.80723 11.8809 8.15566L9.6309 11.6557C9.50175 11.8566 9.28464 11.9839 9.04626 11.9987C8.80789 12.0134 8.57675 11.9137 8.42385 11.7302L7.17384 10.2302C6.90867 9.91203 6.95166 9.4391 7.26986 9.17393C7.58807 8.90875 8.06099 8.95174 8.32617 9.26995L8.92184 9.98475L10.6191 7.34452C10.8431 6.9961 11.3071 6.89522 11.6556 7.11921Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 1C1.7835 1 1 1.7835 1 2.75V10.25C1 11.2165 1.7835 12 2.75 12H4V13.25C4 14.2165 4.7835 15 5.75 15H13.25C14.2165 15 15 14.2165 15 13.25V5.75C15 4.7835 14.2165 4 13.25 4H12V2.75C12 1.7835 11.2165 1 10.25 1H2.75ZM10.5 4V2.75C10.5 2.61193 10.3881 2.5 10.25 2.5H2.75C2.61193 2.5 2.5 2.61193 2.5 2.75V10.25C2.5 10.3881 2.61193 10.5 2.75 10.5H4V5.75C4 4.7835 4.7835 4 5.75 4H10.5ZM5.75 5.5C5.61193 5.5 5.5 5.61193 5.5 5.75V13.25C5.5 13.3881 5.61193 13.5 5.75 13.5H13.25C13.3881 13.5 13.5 13.3881 13.5 13.25V5.75C13.5 5.61193 13.3881 5.5 13.25 5.5H5.75Z" />
  </svg>
);

OutlineCheckboxStacked.displayName = 'OutlineCheckboxStacked';

export default OutlineCheckboxStacked;
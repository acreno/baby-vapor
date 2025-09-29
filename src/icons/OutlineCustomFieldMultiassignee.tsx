import React from 'react';

export interface OutlineCustomFieldMultiassigneeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldMultiassignee: React.FC<OutlineCustomFieldMultiassigneeProps> = ({ 
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
    <path fill="currentColor" d="M6.62612 6.13653C6.54408 6.40998 6.5 6.69984 6.5 7C6.5 7.60228 6.67748 8.16311 6.983 8.63304C6.71974 8.86163 6.37603 9 6 9C5.17157 9 4.5 8.32843 4.5 7.5C4.5 6.67157 5.17157 6 6 6C6.22349 6 6.43557 6.04888 6.62612 6.13653Z" />
    <path fill="currentColor" d="M11.5 7C11.5 8.10457 10.6046 9 9.5 9C8.39543 9 7.5 8.10457 7.5 7C7.5 5.89543 8.39543 5 9.5 5C10.6046 5 11.5 5.89543 11.5 7Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V10.7932C11.7861 10.2842 10.8495 10 9.875 10C9.21325 10 8.56896 10.131 8 10.3746C7.67108 10.5154 7.36912 10.693 7.1044 10.9026C6.65498 11.2584 6.32701 11.6952 6.14995 12.1735C6.07655 12.3718 5.89071 12.4958 5.69139 12.5H5.67058C5.61629 12.4989 5.56127 12.4888 5.50748 12.4689C5.24851 12.373 5.11628 12.0854 5.21214 11.8264C5.46048 11.1555 5.9088 10.5737 6.48364 10.1186C6.52457 10.0862 6.56609 10.0545 6.60818 10.0234C6.44874 10.0079 6.2874 10 6.125 10C5.15055 10 4.21394 10.2842 3.5 10.7932V3.75Z" />
  </svg>
);

OutlineCustomFieldMultiassignee.displayName = 'OutlineCustomFieldMultiassignee';

export default OutlineCustomFieldMultiassignee;
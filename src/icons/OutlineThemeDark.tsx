import React from 'react';

export interface OutlineThemeDarkProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineThemeDark: React.FC<OutlineThemeDarkProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.1674 4.49166C6.08459 4.55886 6.00403 4.6291 5.92589 4.70228C5.38367 5.21013 4.97506 5.84387 4.73626 6.54735C4.49746 7.25084 4.43584 8.00236 4.55685 8.73535C4.67787 9.46833 4.97779 10.1602 5.43004 10.7496C5.8823 11.3389 6.47293 11.8077 7.14962 12.1143C7.82631 12.4209 8.56817 12.5559 9.3095 12.5073C10.0508 12.4587 10.7687 12.2281 11.3996 11.8357C11.4931 11.7776 11.5842 11.7162 11.6728 11.6517C8.07349 11.5084 5.37229 8.00294 6.1674 4.49166ZM7.31283 2.22742C8.03978 2.01317 8.59685 2.81306 8.21725 3.41997C6.06662 6.85833 9.34166 11.1318 13.2336 9.95322C13.9127 9.74757 14.5464 10.4861 14.1494 11.1362C13.6601 11.9372 12.9899 12.6132 12.1917 13.1096C11.3513 13.6321 10.3951 13.9394 9.4076 14.0041C8.42013 14.0688 7.43194 13.889 6.53056 13.4806C5.62918 13.0722 4.84244 12.4478 4.24001 11.6627C3.63759 10.8776 3.23809 9.95606 3.07689 8.97969C2.91569 8.00332 2.99777 7.00226 3.31586 6.06519C3.63396 5.12812 4.17824 4.28396 4.9005 3.60749C5.58641 2.96507 6.41272 2.49271 7.31283 2.22742Z" />
  </svg>
);

OutlineThemeDark.displayName = 'OutlineThemeDark';

export default OutlineThemeDark;
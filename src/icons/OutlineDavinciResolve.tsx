import React from 'react';

export interface OutlineDavinciResolveProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineDavinciResolve: React.FC<OutlineDavinciResolveProps> = ({ 
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
    <path fill="currentColor" d="M8.15531 7.52483C8.54608 7.17585 9.5391 6.22185 9.5391 5.53908C9.5391 4.68907 8.85003 4 8.00002 4C7.15001 4 6.46094 4.68907 6.46094 5.53908C6.46094 6.22185 7.45396 7.17585 7.84472 7.52482C7.93408 7.60462 8.06596 7.60462 8.15531 7.52483Z" />
    <path fill="currentColor" d="M9.36168 10.5633C8.77039 10.222 8.44071 8.88497 8.33387 8.37208C8.30943 8.25479 8.37538 8.14058 8.48916 8.10309C8.98676 7.93917 10.3095 7.55619 10.9008 7.89757C11.6369 8.32258 11.8891 9.26387 11.4641 10C11.0391 10.7361 10.0978 10.9883 9.36168 10.5633Z" />
    <path fill="currentColor" d="M7.51073 8.1031C7.01313 7.93918 5.69043 7.5562 5.09913 7.89758C4.363 8.32259 4.11078 9.26387 4.53579 10C4.96079 10.7361 5.90208 10.9884 6.63821 10.5633C7.22951 10.222 7.55918 8.88498 7.66602 8.37208C7.69046 8.2548 7.62451 8.14058 7.51073 8.1031Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z" />
  </svg>
);

OutlineDavinciResolve.displayName = 'OutlineDavinciResolve';

export default OutlineDavinciResolve;
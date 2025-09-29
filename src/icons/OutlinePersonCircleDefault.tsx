import React from 'react';

export interface OutlinePersonCircleDefaultProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePersonCircleDefault: React.FC<OutlinePersonCircleDefaultProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4ZM7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 10.4173 13.7747 12.5484 11.9114 13.8061C11.8943 13.8185 11.8769 13.8304 11.8591 13.8419L11.8082 13.8745C10.9029 14.4626 9.85304 14.8471 8.72366 14.963C8.49078 14.9885 8.24923 15.0027 7.99997 15.0027C7.75035 15.0027 7.50847 14.9885 7.2753 14.9629C6.14603 14.8468 5.09635 14.4622 4.19114 13.874L4.14086 13.8419C4.12317 13.8304 4.10585 13.8186 4.08893 13.8063C2.2254 12.5486 1 10.4174 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM8 13.5C8.1932 13.5 8.38407 13.49 8.57213 13.4706C9.49771 13.3671 10.2584 13.0331 10.7415 12.764C10.3396 12.2333 9.51606 11.5007 7.99997 11.5007C6.48386 11.5007 5.66036 12.2333 5.25853 12.764C5.74144 13.0331 6.50179 13.3669 7.42701 13.4705C7.61535 13.49 7.80651 13.5 8 13.5ZM7.99997 10.0007C10.1128 10.0007 11.3228 11.0568 11.9288 11.849C12.9007 10.857 13.5 9.49849 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 9.49849 3.09927 10.857 4.07122 11.849C4.67718 11.0568 5.88715 10.0007 7.99997 10.0007Z" />
  </svg>
);

OutlinePersonCircleDefault.displayName = 'OutlinePersonCircleDefault';

export default OutlinePersonCircleDefault;
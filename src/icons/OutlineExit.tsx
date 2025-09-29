import React from 'react';

export interface OutlineExitProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineExit: React.FC<OutlineExitProps> = ({ 
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
    <path fill="currentColor" d="M8.00004 2.5C7.38097 2.5 6.73372 2.59546 6.02242 2.86824C5.63567 3.01656 5.20191 2.82327 5.05359 2.43652C4.90528 2.04977 5.09857 1.61601 5.48531 1.4677C6.38339 1.12329 7.21453 1 8.00004 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8.00004 15C7.21287 15 6.36419 14.8684 5.48586 14.5379C5.09817 14.392 4.90214 13.9595 5.048 13.5718C5.19386 13.1842 5.62638 12.9881 6.01406 13.134C6.71385 13.3973 7.38263 13.5 8.00004 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8.00004 2.5Z" />
    <path fill="currentColor" d="M3.70455 7.25L4.75175 6.30744C5.05962 6.03034 5.08456 5.55612 4.80745 5.24825C4.53034 4.94038 4.05613 4.91544 3.74825 5.19254L1.24825 7.44272C1.09015 7.58503 0.999905 7.78779 1 8.00051C1.00009 8.21323 1.09052 8.4159 1.24875 8.55807L3.74875 10.8042C4.05687 11.0811 4.53106 11.0557 4.8079 10.7476C5.08473 10.4395 5.05937 9.96527 4.75125 9.68843L3.70676 8.75L9.25 8.75C9.66421 8.75 10 8.41421 10 8C10 7.58579 9.66421 7.25 9.25 7.25L3.70455 7.25Z" />
  </svg>
);

OutlineExit.displayName = 'OutlineExit';

export default OutlineExit;
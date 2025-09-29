import React from 'react';

export interface FillPrimaryNavFeedbackProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavFeedback: React.FC<FillPrimaryNavFeedbackProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.0547 9.60341C11.0547 9.45222 11.2306 9.27408 11.4766 9.02493C12.0487 8.44557 13 7.48227 13 5.58101C13 3.00721 10.4877 1 8 1C5.51227 1 3 3.00721 3 5.58101C3 7.48227 3.95127 8.44557 4.52339 9.02493C4.76942 9.27408 4.94534 9.45222 4.94534 9.60341L4.94541 10.0002C4.94552 10.5524 5.3932 11 5.94541 11H10.0546C10.6068 11 11.0545 10.5524 11.0546 10.0002L11.0547 9.60341ZM7.99646 2.5C7.44418 2.5 6.99646 2.94772 6.99646 3.5C6.99646 4.05228 7.44418 4.5 7.99646 4.5C8.5216 4.5 8.88036 4.67028 9.10524 4.89498C9.33007 5.11962 9.5 5.47749 9.5 6.00066C9.5 6.55294 9.94772 7.00066 10.5 7.00066C11.0523 7.00066 11.5 6.55294 11.5 6.00066C11.5 5.02317 11.1699 4.13071 10.5189 3.48019C9.86787 2.82972 8.97486 2.5 7.99646 2.5Z" />
    <path fill="currentColor" d="M10 13C10 13.5304 9.78929 14.0391 9.41421 14.4142C9.03914 14.7893 8.53043 15 8 15C7.46957 15 6.96086 14.7893 6.58579 14.4142C6.21071 14.0391 6 13.5304 6 13H10Z" />
  </svg>
);

FillPrimaryNavFeedback.displayName = 'FillPrimaryNavFeedback';

export default FillPrimaryNavFeedback;
import React from 'react';

export interface FillFiletypePresentationProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillFiletypePresentation: React.FC<FillFiletypePresentationProps> = ({ 
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
    <path fill="currentColor" d="M2.03829 5.87257C1.79543 6.96547 2.62706 8.0022 3.74662 8.0022L12.2534 8.0022C13.3729 8.0022 14.2046 6.96547 13.9617 5.87257L13.4062 3.37257C13.2282 2.57188 12.5181 2.0022 11.6978 2.0022H4.30218C3.48195 2.0022 2.77178 2.57188 2.59385 3.37257L2.03829 5.87257Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 10.2522C2 9.83798 2.33579 9.5022 2.75 9.5022L13.25 9.5022C13.6642 9.5022 14 9.83798 14 10.2522C14 10.6664 13.6642 11.0022 13.25 11.0022H2.75C2.33579 11.0022 2 10.6664 2 10.2522Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.99722 13.2522C1.99722 12.838 2.33301 12.5022 2.74722 12.5022H13.2472C13.6614 12.5022 13.9972 12.838 13.9972 13.2522C13.9972 13.6664 13.6614 14.0022 13.2472 14.0022H2.74722C2.33301 14.0022 1.99722 13.6664 1.99722 13.2522Z" />
  </svg>
);

FillFiletypePresentation.displayName = 'FillFiletypePresentation';

export default FillFiletypePresentation;
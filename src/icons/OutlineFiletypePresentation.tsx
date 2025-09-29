import React from 'react';

export interface OutlineFiletypePresentationProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFiletypePresentation: React.FC<OutlineFiletypePresentationProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.74662 8.0022C2.62706 8.0022 1.79543 6.96547 2.03829 5.87257L2.59385 3.37257C2.77178 2.57188 3.48195 2.0022 4.30218 2.0022L11.6978 2.0022C12.5181 2.0022 13.2282 2.57188 13.4062 3.37257L13.9617 5.87257C14.2046 6.96547 13.3729 8.0022 12.2534 8.0022L3.74662 8.0022ZM3.50257 6.19797C3.46788 6.35409 3.58668 6.5022 3.74662 6.5022L12.2534 6.5022C12.4133 6.5022 12.5321 6.35409 12.4974 6.19796L11.9419 3.69796C11.9165 3.58358 11.815 3.5022 11.6978 3.5022L4.30218 3.5022C4.185 3.5022 4.08355 3.58358 4.05813 3.69797L3.50257 6.19797Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 10.2522C2 9.83798 2.33579 9.5022 2.75 9.5022L13.25 9.5022C13.6642 9.5022 14 9.83798 14 10.2522C14 10.6664 13.6642 11.0022 13.25 11.0022H2.75C2.33579 11.0022 2 10.6664 2 10.2522Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.99723 13.2522C1.99723 12.838 2.33301 12.5022 2.74723 12.5022H13.2472C13.6614 12.5022 13.9972 12.838 13.9972 13.2522C13.9972 13.6664 13.6614 14.0022 13.2472 14.0022H2.74723C2.33301 14.0022 1.99723 13.6664 1.99723 13.2522Z" />
  </svg>
);

OutlineFiletypePresentation.displayName = 'OutlineFiletypePresentation';

export default OutlineFiletypePresentation;
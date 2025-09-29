import React from 'react';

export interface OutlineChatBubbleRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineChatBubbleRight: React.FC<OutlineChatBubbleRightProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.7517 8.05746C11.9098 7.91523 12 7.71261 12 7.49999C12 7.28738 11.9098 7.08476 11.7517 6.94253L9.25179 4.69254C8.94391 4.41544 8.46969 4.4404 8.19259 4.74828C7.9155 5.05616 7.94045 5.53037 8.24833 5.80747L9.29557 6.75001H5.75008C5.33586 6.75001 5.00008 7.0858 5.00008 7.50001C5.00008 7.91423 5.33586 8.25001 5.75008 8.25001H9.29555L8.24833 9.19255C7.94045 9.46965 7.9155 9.94387 8.1926 10.2517C8.4697 10.5596 8.94391 10.5846 9.25179 10.3075L11.7517 8.05746Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.99762 7.49822C1.99762 3.92058 4.91787 1 8.49576 1C12.073 1 14.9976 3.91995 14.9976 7.49822C14.9976 11.0759 12.0736 14 8.49576 14C7.46633 14 6.4723 13.7523 5.60393 13.3235L3.35068 13.9609L3.34849 13.9615C2.90455 14.0856 2.51147 13.8947 2.28589 13.6447C2.06499 13.4 1.9293 13.022 2.03837 12.6252L2.65158 10.3384C2.22288 9.47381 1.99762 8.52557 1.99762 7.49822ZM8.49576 2.5C5.74636 2.5 3.49762 4.74895 3.49762 7.49822C3.49762 8.38281 3.70976 9.17178 4.10698 9.88384C4.20204 10.0543 4.22694 10.255 4.1764 10.4435L3.67587 12.31L5.48316 11.7988C5.67419 11.7447 5.87886 11.7687 6.0523 11.8653C6.76891 12.2645 7.61757 12.5 8.49576 12.5C11.2452 12.5 13.4976 10.2475 13.4976 7.49822C13.4976 4.74958 11.2458 2.5 8.49576 2.5Z" />
  </svg>
);

OutlineChatBubbleRight.displayName = 'OutlineChatBubbleRight';

export default OutlineChatBubbleRight;
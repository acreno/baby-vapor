import React from 'react';

export interface FillThemeDarkProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillThemeDark: React.FC<FillThemeDarkProps> = ({ 
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
    <path fill="currentColor" d="M14.1122 10.2267C13.922 9.97644 13.5416 9.85634 13.2413 9.94642C11.0888 10.597 9.35685 9.5761 8.45583 8.40509C7.56482 7.23407 7.03421 5.31241 8.22557 3.41077C8.38575 3.15054 8.36572 2.75019 8.18552 2.49998C7.9953 2.24976 7.62488 2.12966 7.32454 2.21974C6.42352 2.47996 5.59258 2.96038 4.9118 3.60093C4.19099 4.27151 3.64036 5.12225 3.33001 6.06306C2.99963 6.99386 2.91954 8.00474 3.07972 8.97558C3.23991 9.94642 3.64036 10.8772 4.24104 11.6579C4.84172 12.4386 5.63262 13.0691 6.53365 13.4795C7.31453 13.8298 8.1655 14.0199 9.02647 14.0199C9.15662 14.0199 9.28677 14.0199 9.41692 14.0099C10.398 13.9499 11.3691 13.6396 12.2101 13.1192C13.001 12.6287 13.6818 11.9381 14.1723 11.1475C14.3325 10.8772 14.3125 10.4869 14.1223 10.2367L14.1122 10.2267Z" />
  </svg>
);

FillThemeDark.displayName = 'FillThemeDark';

export default FillThemeDark;
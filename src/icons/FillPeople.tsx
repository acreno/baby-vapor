import React from 'react';

export interface FillPeopleProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPeople: React.FC<FillPeopleProps> = ({ 
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
    <path fill="currentColor" d="M13 5C13 6.65685 11.658 8 10 8C8.34196 8 7.00427 6.65685 7.00427 5C7.00427 3.34315 8.34196 2 10 2C11.658 2 13 3.34315 13 5Z" />
    <path fill="currentColor" d="M10 9C12.4518 9 13.9292 10.42 14.7298 11.6C15.06 12.08 15.0901 12.66 14.8299 13.15C14.5497 13.67 13.9893 14 13.3588 14H6.63402C6.00357 14 5.44317 13.68 5.16297 13.15C4.90279 12.66 4.94282 12.08 5.26304 11.6C6.06362 10.41 7.54825 9 10 9Z" />
    <path fill="currentColor" d="M4.03215 10.76C4.46246 10.13 4.95281 9.60001 5.4932 9.15001C5.17297 9.06001 4.84273 9 4.50249 9C3.08148 9 1.89062 9.82001 1.13008 11.3C0.939946 11.67 0.95996 12.09 1.17011 12.44C1.39027 12.8 1.78055 13 2.21085 13H3.56182C3.42172 12.24 3.57183 11.44 4.03215 10.77V10.76Z" />
    <path fill="currentColor" d="M5.50323 5C5.50323 5.86 5.76342 6.65 6.18372 7.33C5.7334 7.74 5.15046 8 4.5 8C3.11901 8 2 6.88 2 5.5C2 4.12 3.11901 3 4.5 3C4.99035 3 5.43318 3.15 5.81345 3.39C5.62332 3.89 5.50323 4.43 5.50323 5Z" />
  </svg>
);

FillPeople.displayName = 'FillPeople';

export default FillPeople;
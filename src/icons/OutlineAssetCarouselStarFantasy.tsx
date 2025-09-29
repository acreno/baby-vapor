import React from 'react';

export interface OutlineAssetCarouselStarFantasyProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineAssetCarouselStarFantasy: React.FC<OutlineAssetCarouselStarFantasyProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.16841 13H2.75C1.7835 13 1 12.2165 1 11.25V4.75C1 3.7835 1.7835 3 2.75 3H4.16841C4.44927 2.40876 5.0519 2 5.75 2H10.25C10.9481 2 11.5507 2.40876 11.8316 3H13.25C14.2165 3 15 3.7835 15 4.75V6.25C15 6.66421 14.6642 7 14.25 7C13.8358 7 13.5 6.66421 13.5 6.25V4.75C13.5 4.61193 13.3881 4.5 13.25 4.5H12V6.25C12 6.66421 11.6642 7 11.25 7C10.8358 7 10.5 6.66421 10.5 6.25V3.75C10.5 3.61193 10.3881 3.5 10.25 3.5H5.75C5.61193 3.5 5.5 3.61193 5.5 3.75V12.25C5.5 12.3881 5.61193 12.5 5.75 12.5H6.25C6.66421 12.5 7 12.8358 7 13.25C7 13.6642 6.66421 14 6.25 14H5.75C5.0519 14 4.44927 13.5912 4.16841 13ZM4 4.5H2.75C2.61193 4.5 2.5 4.61193 2.5 4.75V11.25C2.5 11.3881 2.61193 11.5 2.75 11.5H4V4.5Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 9C10.567 9 9 10.567 9 12.5C9 14.433 10.567 16 12.5 16C14.433 16 16 14.433 16 12.5C16 10.567 14.433 9 12.5 9ZM12.6931 10.4673L12.9337 11.3607C13.0263 11.7049 13.2951 11.9737 13.6393 12.0663L14.5327 12.3069C14.73 12.36 14.73 12.64 14.5327 12.6931L13.6393 12.9337C13.2951 13.0263 13.0263 13.2951 12.9337 13.6393L12.6931 14.5327C12.64 14.73 12.36 14.73 12.3069 14.5327L12.0663 13.6393C11.9737 13.2951 11.7049 13.0263 11.3607 12.9337L10.4673 12.6931C10.27 12.64 10.27 12.36 10.4673 12.3069L11.3607 12.0663C11.7049 11.9737 11.9737 11.7049 12.0663 11.3607L12.3069 10.4673C12.36 10.27 12.64 10.27 12.6931 10.4673Z" />
  </svg>
);

OutlineAssetCarouselStarFantasy.displayName = 'OutlineAssetCarouselStarFantasy';

export default OutlineAssetCarouselStarFantasy;
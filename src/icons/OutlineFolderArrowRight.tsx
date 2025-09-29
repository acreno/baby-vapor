import React from 'react';

export interface OutlineFolderArrowRightProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFolderArrowRight: React.FC<OutlineFolderArrowRightProps> = ({ 
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
    <path fill="currentColor" d="M9.2619 10.8194C9.5764 11.089 10.0499 11.0526 10.3194 10.7381L11.8194 8.98808C12.0602 8.70721 12.0602 8.29276 11.8194 8.01189L10.3194 6.26189C10.0499 5.94739 9.5764 5.91097 9.26191 6.18054C8.94741 6.4501 8.91099 6.92358 9.18056 7.23807L9.61935 7.75H7.49854C6.94625 7.75 6.49854 7.30228 6.49854 6.75C6.49854 6.33579 6.16275 6 5.74854 6C5.33432 6 4.99854 6.33579 4.99854 6.75C4.99854 8.13071 6.11782 9.25 7.49854 9.25H9.61932L9.18056 9.76189C8.91099 10.0764 8.94741 10.5499 9.2619 10.8194Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H13.25C14.2165 14 15 13.2165 15 12.25V4.75C15 3.7835 14.2165 3 13.25 3H9.23607C9.19726 3 9.15898 2.99096 9.12426 2.97361L7.54656 2.18475C7.30356 2.06325 7.03561 2 6.76393 2H3.75ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H6.76393C6.80274 3.5 6.84102 3.50904 6.87574 3.52639L8.45344 4.31525C8.69644 4.43675 8.96439 4.5 9.23607 4.5H13.25C13.3881 4.5 13.5 4.61193 13.5 4.75V12.25C13.5 12.3881 13.3881 12.5 13.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V3.75Z" />
  </svg>
);

OutlineFolderArrowRight.displayName = 'OutlineFolderArrowRight';

export default OutlineFolderArrowRight;
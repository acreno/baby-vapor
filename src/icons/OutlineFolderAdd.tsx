import React from 'react';

export interface OutlineFolderAddProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFolderAdd: React.FC<OutlineFolderAddProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.5H3.5V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H6.25C6.66421 12.5 7 12.8358 7 13.25C7 13.6642 6.66421 14 6.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75C2 2.7835 2.7835 2 3.75 2H6.76393C7.03561 2 7.30356 2.06325 7.54656 2.18475L9.12426 2.97361C9.15898 2.99096 9.19726 3 9.23607 3H13.25C14.2165 3 15 3.7835 15 4.75V6.75C15 7.16421 14.6642 7.5 14.25 7.5ZM3.5 3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H6.76393C6.80274 3.5 6.84102 3.50904 6.87573 3.52639L8.45344 4.31525C8.69644 4.43675 8.96439 4.5 9.23607 4.5H13.25C13.3881 4.5 13.5 4.61193 13.5 4.75V6H3.5V3.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 16C14.433 16 16 14.433 16 12.5C16 10.567 14.433 9 12.5 9C10.567 9 9 10.567 9 12.5C9 14.433 10.567 16 12.5 16ZM13 10.5C13 10.2239 12.7761 10 12.5 10C12.2238 10 12 10.2239 12 10.5V12.002H10.5034C10.2272 12.002 10.0034 12.2258 10.0034 12.502C10.0034 12.7781 10.2272 13.002 10.5034 13.002H12V14.5C12 14.7761 12.2238 15 12.5 15C12.7761 15 13 14.7761 13 14.5V13.002H14.5C14.7761 13.002 15 12.7781 15 12.502C15 12.2258 14.7761 12.002 14.5 12.002H13V10.5Z" />
  </svg>
);

OutlineFolderAdd.displayName = 'OutlineFolderAdd';

export default OutlineFolderAdd;
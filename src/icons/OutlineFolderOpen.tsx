import React from 'react';

export interface OutlineFolderOpenProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFolderOpen: React.FC<OutlineFolderOpenProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2.00642 12.25H2.00001V3.75C2.00001 2.7835 2.78386 2 3.7508 2H6.7661C7.0379 2 7.30597 2.06325 7.54907 2.18475L9.1275 2.97361C9.16223 2.99096 9.20052 3 9.23935 3H13.2551C14.222 3 15.0059 3.7835 15.0059 4.75V6.17329C15.7152 6.51387 16.1461 7.31564 15.9544 8.14583L14.9156 12.6436C14.7322 13.4376 14.0249 14 13.2097 14H3.75796C2.76807 14 2.00443 13.1907 2.00642 12.25ZM3.50069 3.75C3.50069 3.61193 3.61267 3.5 3.7508 3.5H6.7661C6.80493 3.5 6.84322 3.50904 6.87795 3.52639L8.45637 4.31525C8.69948 4.43675 8.96755 4.5 9.23935 4.5H13.2551C13.3932 4.5 13.5052 4.61193 13.5052 4.75V6.0022H4.79677C4.28959 6.0022 3.82416 6.21988 3.50069 6.57559V3.75ZM4.55307 7.69596C4.57927 7.58254 4.68031 7.5022 4.79677 7.5022H14.2485C14.4093 7.5022 14.5283 7.65177 14.4922 7.80843L13.4534 12.3062C13.4272 12.4197 13.3261 12.5 13.2097 12.5H3.75796C3.59711 12.5 3.47808 12.3504 3.51426 12.1938L4.55307 7.69596Z" />
  </svg>
);

OutlineFolderOpen.displayName = 'OutlineFolderOpen';

export default OutlineFolderOpen;
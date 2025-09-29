import React from 'react';

export interface OutlinePanelAssetViewerProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlinePanelAssetViewer: React.FC<OutlinePanelAssetViewerProps> = ({ 
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
    <path fill="currentColor" d="M6.75 5C6.33579 5 6 5.33579 6 5.75V10.25C6 10.6642 6.33579 11 6.75 11H9.24595C9.66017 11 9.99595 10.6642 9.99595 10.25V5.75C9.99595 5.33579 9.66017 5 9.24595 5H6.75Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 2.7835 2.7835 2 3.75 2H12.25C13.2165 2 14 2.7835 14 3.75V12.25C14 13.2165 13.2165 14 12.25 14H3.75C2.7835 14 2 13.2165 2 12.25V3.75ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V12.25C3.5 12.3881 3.61193 12.5 3.75 12.5H12.25C12.3881 12.5 12.5 12.3881 12.5 12.25V3.75C12.5 3.61193 12.3881 3.5 12.25 3.5H3.75Z" />
  </svg>
);

OutlinePanelAssetViewer.displayName = 'OutlinePanelAssetViewer';

export default OutlinePanelAssetViewer;
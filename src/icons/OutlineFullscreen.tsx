import React from 'react';

export interface OutlineFullscreenProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineFullscreen: React.FC<OutlineFullscreenProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 3.83333C12.6667 3.55719 12.4428 3.33333 12.1667 3.33333L8.27779 3.33333C8.00165 3.33333 7.77779 3.55719 7.77779 3.83333C7.77779 4.10947 8.00165 4.33333 8.27779 4.33333L11.6667 4.33333V7.72222C11.6667 7.99836 11.8905 8.22222 12.1667 8.22222C12.4428 8.22222 12.6667 7.99836 12.6667 7.72222V3.83333ZM3.33334 12.1667C3.33334 12.4428 3.5572 12.6667 3.83334 12.6667H7.72223C7.99837 12.6667 8.22223 12.4428 8.22223 12.1667C8.22223 11.8905 7.99837 11.6667 7.72223 11.6667H4.33334L4.33334 8.27777C4.33334 8.00163 4.10949 7.77777 3.83334 7.77777C3.5572 7.77777 3.33334 8.00163 3.33334 8.27777L3.33334 12.1667Z" />
  </svg>
);

OutlineFullscreen.displayName = 'OutlineFullscreen';

export default OutlineFullscreen;
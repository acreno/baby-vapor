import React from 'react';

export interface OutlineLockStarFantasyProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineLockStarFantasy: React.FC<OutlineLockStarFantasyProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.99707 3.99815V5.00439H4.75354C3.78704 5.00439 3.00354 5.7879 3.00354 6.75439V12.25C3.00354 13.2165 3.78704 14 4.75354 14H6.25C6.66421 14 7 13.6642 7 13.25C7 12.8358 6.66421 12.5 6.25 12.5H4.75354C4.61547 12.5 4.50354 12.3881 4.50354 12.25V6.75439C4.50354 6.61632 4.61547 6.50439 4.75354 6.50439H11.5478C11.652 6.7934 11.9286 7 12.2535 7C12.6678 7 13.0035 6.66421 13.0035 6.25C13.0035 5.56207 12.4459 5.00439 11.7579 5.00439H10.9971V3.99815C10.9971 2.26901 9.64025 1 7.99707 1C6.35389 1 4.99707 2.26901 4.99707 3.99815ZM7.99707 2.5C7.15486 2.5 6.49707 3.12463 6.49707 3.99815V5.00439H9.49707V3.99815C9.49707 3.12463 8.83928 2.5 7.99707 2.5Z" />
    <path fill="currentColor" d="M12.7388 9.183C12.6731 8.939 12.3269 8.939 12.2612 9.183L11.9044 10.5084C11.7211 11.1892 11.1892 11.7211 10.5084 11.9044L9.183 12.2612C8.939 12.3269 8.939 12.6731 9.183 12.7388L10.5084 13.0956C11.1892 13.2789 11.7211 13.8108 11.9044 14.4916L12.2612 15.817C12.3269 16.061 12.6731 16.061 12.7388 15.817L13.0956 14.4916C13.2789 13.8108 13.8108 13.2789 14.4916 13.0956L15.817 12.7388C16.061 12.6731 16.061 12.3269 15.817 12.2612L14.4916 11.9044C13.8108 11.7211 13.2789 11.1892 13.0956 10.5084L12.7388 9.183Z" />
  </svg>
);

OutlineLockStarFantasy.displayName = 'OutlineLockStarFantasy';

export default OutlineLockStarFantasy;
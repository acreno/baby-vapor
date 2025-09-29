import React from 'react';

export interface OutlineCustomFieldMultiSelectProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineCustomFieldMultiSelect: React.FC<OutlineCustomFieldMultiSelectProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor',
  style,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ color, ...style }}
    {...props}
  >
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
        d="M18.6666 7.625H12.8333C10.4401 7.625 8.49996 9.5651 8.49996 11.9583C8.49996 14.3516 10.4401 16.2917 12.8333 16.2917H18.6666C21.0599 16.2917 23 14.3516 23 11.9583C23 9.5651 21.0599 7.625 18.6666 7.625ZM12.8333 6.125C10.2772 6.125 8.10517 7.76898 7.31675 10.0573C5.29515 11.0301 3.91663 13.1725 3.91663 15.627C3.91663 18.9674 6.48323 21.75 9.73888 21.75H14.8111C17.4142 21.75 19.5796 19.9677 20.3406 17.5479C22.7464 16.8285 24.5 14.5982 24.5 11.9583C24.5 8.73667 21.8883 6.125 18.6666 6.125H12.8333ZM5.41663 15.627C5.41663 14.1745 6.03992 12.8933 7.00068 12.0507C7.05004 15.2298 9.64249 17.7917 12.8333 17.7917H18.6322C17.9001 19.2671 16.4471 20.25 14.8111 20.25H9.73888C7.39188 20.25 5.41663 18.2215 5.41663 15.627ZM19.25 13.7083C20.2165 13.7083 21 12.9248 21 11.9583C21 10.9918 20.2165 10.2083 19.25 10.2083C18.2835 10.2083 17.5 10.9918 17.5 11.9583C17.5 12.9248 18.2835 13.7083 19.25 13.7083Z"
         />
  </svg>
);

OutlineCustomFieldMultiSelect.displayName = 'OutlineCustomFieldMultiSelect';

export default OutlineCustomFieldMultiSelect;
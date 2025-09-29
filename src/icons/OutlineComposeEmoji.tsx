import React from 'react';

export interface OutlineComposeEmojiProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineComposeEmoji: React.FC<OutlineComposeEmojiProps> = ({ 
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
    <path fill="currentColor" d="M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" />
    <path fill="currentColor" d="M10.9444 10.0406C11.1044 9.65856 10.9244 9.21913 10.5423 9.05914C10.1603 8.89914 9.72083 9.07916 9.56083 9.46123C9.43196 9.76898 9.21503 10.0318 8.9373 10.2167C8.65956 10.4016 8.33339 10.5003 7.99974 10.5005C7.66609 10.5006 7.33983 10.4022 7.06193 10.2176C6.78402 10.0329 6.56685 9.77031 6.43769 9.46268C6.27734 9.08076 5.83774 8.90114 5.45583 9.0615C5.07391 9.22185 4.89429 9.66144 5.05465 10.0434C5.29823 10.6235 5.70777 11.1188 6.23186 11.467C6.75595 11.8152 7.37123 12.0008 8.00044 12.0005C8.62965 12.0002 9.24475 11.814 9.76852 11.4653C10.2923 11.1166 10.7014 10.621 10.9444 10.0406Z" />
    <path fill="currentColor" d="M7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z" />
  </svg>
);

OutlineComposeEmoji.displayName = 'OutlineComposeEmoji';

export default OutlineComposeEmoji;
import React from 'react';

export interface FillThumbsUpProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillThumbsUp: React.FC<FillThumbsUpProps> = ({ 
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
    <path fill="currentColor" d="M13.228 12.0296L13.4567 10.6155L13.834 8.34146L13.9826 7.41376C14.1313 6.50869 13.308 5.69412 12.2218 5.69412H8.15138C7.80837 5.69412 7.63686 5.39997 7.76263 5.12845C8.11708 4.4157 8.32289 3.8274 8.4944 3.11466C8.58587 2.73 8.65447 2.44717 8.65447 2.20959C8.65447 1.70048 8.42579 1.37239 8.16282 1.15744C7.73977 0.818035 7.16808 1.06693 6.82506 1.47421C5.94466 2.53767 4.22959 4.55146 3.37206 5.24158C2.54882 5.90907 2 6.78021 2 7.74185V10.2195C2 12.3125 3.98948 13.9982 6.43631 13.9982H10.5868C11.9245 13.9982 13.0679 13.1497 13.228 12.007V12.0296Z" />
  </svg>
);

FillThumbsUp.displayName = 'FillThumbsUp';

export default FillThumbsUp;
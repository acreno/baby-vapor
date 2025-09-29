import React from 'react';

export interface OutlineSpeakerProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineSpeaker: React.FC<OutlineSpeakerProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5736 2.074C11.8335 2.19888 11.9988 2.46168 11.9988 2.75001V13.2502C11.9988 13.5385 11.8335 13.8013 11.5736 13.9262C11.3137 14.051 11.0053 14.0159 10.7802 13.8357L7.57928 11.2741C7.35761 11.0967 7.08215 11 6.79823 11H5.75085C4.78436 11 4.00085 10.2165 4.00085 9.25001V6.75001C4.00085 5.78351 4.78436 5.00001 5.75085 5.00001H6.79826C7.08217 5.00001 7.35762 4.90336 7.57928 4.72597L10.7802 2.16443C11.0053 1.98428 11.3137 1.94913 11.5736 2.074ZM10.4988 4.31079L8.51651 5.89712C8.02885 6.28738 7.42286 6.50001 6.79826 6.50001H5.75085C5.61278 6.50001 5.50085 6.61194 5.50085 6.75001V9.25001C5.50085 9.38808 5.61278 9.50001 5.75085 9.50001H6.79823C7.42285 9.50001 8.02886 9.71265 8.51654 10.1029L10.4988 11.6893V4.31079Z" />
  </svg>
);

OutlineSpeaker.displayName = 'OutlineSpeaker';

export default OutlineSpeaker;
import React from 'react';

export interface OutlineTranscriptionAlertProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineTranscriptionAlert: React.FC<OutlineTranscriptionAlertProps> = ({ 
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
    <path fill="currentColor" d="M4 2.75C4 1.7835 4.7835 1 5.75 1H13.25C14.2165 1 15 1.7835 15 2.75V6.25C15 6.66421 14.6642 7 14.25 7C13.8358 7 13.5 6.66421 13.5 6.25V2.75C13.5 2.61193 13.3881 2.5 13.25 2.5H5.75C5.61193 2.5 5.5 2.61193 5.5 2.75V3.24597C5.5 3.66018 5.16421 3.99597 4.75 3.99597C4.33579 3.99597 4 3.66018 4 3.24597V2.75Z" />
    <path fill="currentColor" d="M7.75 4.5C7.33579 4.5 7 4.83579 7 5.25C7 5.66421 7.33579 6 7.75 6H11.25C11.6642 6 12 5.66421 12 5.25C12 4.83579 11.6642 4.5 11.25 4.5H7.75Z" />
    <path fill="currentColor" d="M8.5 8.75C8.5 8.33579 8.16421 8 7.75 8C7.33579 8 7 8.33579 7 8.75V9.25C7 9.66421 7.33579 10 7.75 10C8.16421 10 8.5 9.66421 8.5 9.25V8.75Z" />
    <path fill="currentColor" d="M2.49817 9.75C2.49817 9.33579 2.16238 9 1.74817 9C1.33396 9 0.998169 9.33579 0.998169 9.75V12.2499C0.998169 12.6641 1.33396 12.9999 1.74817 12.9999C2.16238 12.9999 2.49817 12.6641 2.49817 12.2499V9.75Z" />
    <path fill="currentColor" d="M4.75 6C5.16421 6 5.5 6.33579 5.5 6.75V14.2535C5.5 14.6677 5.16421 15.0035 4.75 15.0035C4.33579 15.0035 4 14.6677 4 14.2535V6.75C4 6.33579 4.33579 6 4.75 6Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.8929 13.551L13.3922 8.55302C13.023 7.81529 11.9702 7.81576 11.6018 8.55383L9.1067 13.5518C8.77446 14.2174 9.25836 15 10.0021 15H14.9979C15.742 15 16.2259 14.2166 15.8929 13.551ZM12.5042 9.00027C12.228 9.00027 12.0042 9.22412 12.0042 9.50027V11.5003C12.0042 11.7764 12.228 12.0003 12.5042 12.0003C12.7803 12.0003 13.0042 11.7764 13.0042 11.5003V9.50027C13.0042 9.22412 12.7803 9.00027 12.5042 9.00027ZM12.5042 13.9987C12.8494 13.9987 13.1292 13.7189 13.1292 13.3737C13.1292 13.0285 12.8494 12.7487 12.5042 12.7487C12.159 12.7487 11.8792 13.0285 11.8792 13.3737C11.8792 13.7189 12.159 13.9987 12.5042 13.9987Z" />
  </svg>
);

OutlineTranscriptionAlert.displayName = 'OutlineTranscriptionAlert';

export default OutlineTranscriptionAlert;
import React from 'react';

export interface FillPrimaryNavHomeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const FillPrimaryNavHome: React.FC<FillPrimaryNavHomeProps> = ({ 
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
    <path fill="currentColor" d="M7.07988 3.31292C7.62186 2.89104 8.38112 2.89115 8.92297 3.31317L13.3855 6.78886C13.8212 7.12823 14.4496 7.05012 14.7889 6.6144C15.1283 6.17868 15.0502 5.55035 14.6145 5.21099L10.1519 1.7353C8.88759 0.750565 7.11598 0.750321 5.85138 1.7347L1.38573 5.21082C0.949919 5.55006 0.871633 6.17837 1.21088 6.61418C1.55012 7.04999 2.17842 7.12828 2.61424 6.78903L7.07988 3.31292Z" />
    <path fill="currentColor" d="M8.95302 5.83856C8.39256 5.40187 7.60697 5.40215 7.04682 5.83923L2.67279 9.25233C2.18419 9.63359 1.93368 10.2448 2.01418 10.8593L2.41417 13.9124C2.4957 14.5347 3.02599 15.0001 3.65358 15.0001H4.54681C5.13405 15.0001 5.63683 14.5863 6.21923 14.0002C6.49579 13.7042 6.78563 13.4195 7.06856 13.1295C7.34462 12.8536 7.72642 12.7053 8.10821 12.7053C8.46895 12.7053 8.85075 12.8536 9.12681 13.1295C9.41935 13.4219 9.72916 13.7041 10.0068 14.0107C10.5848 14.5912 11.0851 14.9994 11.6688 14.9994L12.2843 15.0001C12.903 15.0001 13.4285 14.5476 13.5205 13.9358L13.979 10.8848C14.0729 10.2598 13.8226 9.63273 13.324 9.24428L8.95302 5.83856Z" />
  </svg>
);

FillPrimaryNavHome.displayName = 'FillPrimaryNavHome';

export default FillPrimaryNavHome;
import React from 'react';

export interface OutlineLockitSlateProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineLockitSlate: React.FC<OutlineLockitSlateProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.90393 2.61228L7.92258 3.14935L9.72186 4.7338L11.7032 4.19673L9.90393 2.61228ZM12.8602 3.88311L13.0364 3.83534C13.3029 3.76309 13.4604 3.48847 13.3882 3.22194L13.2574 2.73936C13.1129 2.20631 12.5636 1.89132 12.0306 2.03581L11.0609 2.29866L12.8602 3.88311ZM2.62018 4.58665C2.08713 4.73114 1.77214 5.2804 1.91663 5.81344L2.04594 6.29048C2.01584 6.35478 1.99902 6.42655 1.99902 6.50224V8.00224H2V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V7.74998H13.999V6.50224C13.999 6.22609 13.7752 6.00224 13.499 6.00224H13.2754L11.2753 8.00224H12.5V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V7.99804L5.49588 6.00224H5.04243L5.70421 5.82285L3.90493 4.2384L2.62018 4.58665ZM5.06191 3.92478L6.8612 5.50923L8.56488 5.04742L6.76559 3.46297L5.06191 3.92478ZM10.0927 6.00224H11.8611L9.86103 8.00224H8.09266L10.0927 6.00224ZM8.67849 6.00224H6.91012L4.91004 8.00224H6.67841L8.67849 6.00224Z" />
  </svg>
);

OutlineLockitSlate.displayName = 'OutlineLockitSlate';

export default OutlineLockitSlate;
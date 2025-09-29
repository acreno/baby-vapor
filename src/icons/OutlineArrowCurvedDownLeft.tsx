import React from 'react';

export interface OutlineArrowCurvedDownLeftProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineArrowCurvedDownLeft: React.FC<OutlineArrowCurvedDownLeftProps> = ({ 
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
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.75275 11.8082C6.06112 12.0848 6.53529 12.059 6.81184 11.7506C7.08839 11.4422 7.06259 10.9681 6.75421 10.6915L5.70692 9.75232H9.25147C10.7702 9.75232 12.0015 8.5211 12.0015 7.00232V5.75073C12.0015 5.33652 11.6657 5.00073 11.2515 5.00073C10.8373 5.00073 10.5015 5.33652 10.5015 5.75073V7.00232C10.5015 7.69268 9.94182 8.25232 9.25147 8.25232H5.70764L6.75512 7.30987C7.06304 7.03282 7.08807 6.5586 6.81102 6.25068C6.53397 5.94276 6.05976 5.91773 5.75184 6.19478L3.24836 8.44724C3.09012 8.58962 2.99983 8.79253 3 9.0054C3.00017 9.21826 3.09079 9.42103 3.24927 9.56315L5.75275 11.8082Z" />
  </svg>
);

OutlineArrowCurvedDownLeft.displayName = 'OutlineArrowCurvedDownLeft';

export default OutlineArrowCurvedDownLeft;
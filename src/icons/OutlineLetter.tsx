import React from 'react';

export interface OutlineLetterProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

export const OutlineLetter: React.FC<OutlineLetterProps> = ({ 
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
    <path fill="currentColor" d="M13.53 12.05h-.08c-.33 0-.62-.2-.72-.51L9.17 2.38c-.08-.21.07-.43.29-.43.22 0 .43-.21.43-.47s-.21-.47-.47-.47H6.58c-.26 0-.47.21-.47.47s.31.47.43.47c.22 0 .37.22.29.43L3.31 11.5c-.12.31-.39.52-.72.52h-.08c-.26 0-.47.21-.47.47s.21.47.47.47h1.87c.26 0 .47-.21.47-.47s-.21-.47-.47-.47c-.07 0-.11-.04-.13-.07-.02-.03-.04-.1-.02-.18l.65-1.69h5.68l.65 1.69c.02.08 0 .15-.02.18-.02.03-.06.07-.13.07-.26 0-.47.21-.47.47s.21.47.47.47h2.5c.26 0 .47-.21.47-.47s-.21-.47-.47-.47zM5.21 9.21l2.47-6.42 2.47 6.42H5.21z" />
  </svg>
);

OutlineLetter.displayName = 'OutlineLetter';

export default OutlineLetter;
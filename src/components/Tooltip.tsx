import React, { useState, useRef, useEffect, ReactNode } from 'react';
import './Tooltip.css';

// Tooltip component types based on Figma design system
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Content to show in tooltip */
  content: ReactNode;
  /** Position of tooltip relative to trigger */
  position?: TooltipPosition;
  /** Element that triggers the tooltip */
  children: ReactNode;
  /** Delay before showing tooltip (ms) */
  delay?: number;
  /** Custom className for tooltip content */
  className?: string;
  /** Whether tooltip is disabled */
  disabled?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
  delay = 200,
  className = '',
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const tooltipClasses = [
    'vapor-tooltip',
    `vapor-tooltip--${position}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div 
      className="vapor-tooltip-wrapper"
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && !disabled && (
        <div className={tooltipClasses} role="tooltip">
          <div className="vapor-tooltip__content">
            {content}
          </div>
          <div className="vapor-tooltip__arrow" />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;

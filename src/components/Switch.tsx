import React, { forwardRef, useCallback } from 'react';
import './Switch.css';

// Switch component types based on Figma design system
export type SwitchLabelPosition = 'left' | 'right' | 'none';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Position of the label */
  labelPosition?: SwitchLabelPosition;
  /** Whether switch is checked */
  checked?: boolean;
  /** Whether switch is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Custom className */
  className?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  label,
  labelPosition = 'right',
  checked = false,
  disabled = false,
  onChange,
  className = '',
  ...props
}, ref) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(event);
    }
  }, [disabled, onChange]);

  const switchClasses = [
    'vapor-switch-container',
    disabled && 'vapor-switch-container--disabled',
    className,
  ].filter(Boolean).join(' ');

  const labelClasses = [
    'vapor-switch__label',
    disabled && 'vapor-switch__label--disabled',
  ].filter(Boolean).join(' ');

  return (
    <label className={switchClasses}>
      {/* Label Left */}
      {labelPosition === 'left' && label && (
        <span className={labelClasses}>
          {label}
        </span>
      )}
      
      {/* Hidden Input */}
      <input
        ref={ref}
        type="checkbox"
        className="vapor-switch__input"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      
      {/* Visual Switch */}
      <span className="vapor-switch">
        <span className="vapor-switch__thumb" />
      </span>
      
      {/* Label Right */}
      {labelPosition === 'right' && label && (
        <span className={labelClasses}>
          {label}
        </span>
      )}
    </label>
  );
});

Switch.displayName = 'Switch';

export default Switch;

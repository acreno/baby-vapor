import React, { forwardRef, ReactNode } from 'react';
import './Checkbox.css';

// Checkbox component types based on Figma design system
export type CheckboxLabelPosition = 'left' | 'right' | 'none';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Checkbox label text */
  label?: ReactNode;
  /** Label position relative to checkbox */
  labelPosition?: CheckboxLabelPosition;
  /** Whether checkbox is checked */
  checked?: boolean;
  /** Whether checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Whether checkbox is disabled */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Click handler for the label */
  onLabelClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  labelPosition = 'right',
  checked = false,
  indeterminate = false,
  disabled = false,
  className = '',
  onChange,
  onLabelClick,
  id,
  ...props
}, ref) => {
  // Generate unique ID if not provided
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  // Handle indeterminate state on mount and updates
  const checkboxRef = React.useRef<HTMLInputElement | null>(null);
  
  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Combine refs
  React.useImperativeHandle(ref, () => checkboxRef.current!);

  // Combine all CSS classes
  const containerClasses = [
    'vapor-checkbox-container',
    `vapor-checkbox-container--label-${labelPosition}`,
    disabled && 'vapor-checkbox-container--disabled',
    className,
  ].filter(Boolean).join(' ');

  const checkboxClasses = [
    'vapor-checkbox',
    checked && 'vapor-checkbox--checked',
    indeterminate && 'vapor-checkbox--indeterminate',
    disabled && 'vapor-checkbox--disabled',
  ].filter(Boolean).join(' ');

  return (
    <label 
      className={containerClasses}
      htmlFor={checkboxId}
      onClick={onLabelClick}
    >
      {labelPosition === 'left' && label && (
        <span className="vapor-checkbox__label vapor-checkbox__label--left">
          {label}
        </span>
      )}
      
      <div className="vapor-checkbox__wrapper">
        <input
          ref={checkboxRef}
          type="checkbox"
          id={checkboxId}
          className="vapor-checkbox__input"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <div className={checkboxClasses}>
          {checked && !indeterminate && (
            <svg
              className="vapor-checkbox__icon vapor-checkbox__icon--check"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 8L6.5 11.5L13 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && (
            <svg
              className="vapor-checkbox__icon vapor-checkbox__icon--minus"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>

      {labelPosition === 'right' && label && (
        <span className="vapor-checkbox__label vapor-checkbox__label--right">
          {label}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;

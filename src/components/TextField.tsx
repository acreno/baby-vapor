import React, { forwardRef, useState, useCallback } from 'react';
import { Icon, IconName } from '../icons/index';
import './TextField.css';

export type TextFieldSize = 'small' | 'medium';
export type TextFieldVariant = 'default' | 'positive' | 'negative';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the text field */
  size?: TextFieldSize;
  /** Variant for validation states */
  variant?: TextFieldVariant;
  /** Label for the text field */
  label?: string;
  /** Hint text displayed below the field */
  hint?: string;
  /** Left icon name */
  leftIcon?: IconName;
  /** Right icon name (like close button) */
  rightIcon?: IconName;
  /** Keyboard shortcut text (e.g., "Kg", "⌘K") */
  shortcut?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Whether the field is read-only/uneditable */
  readOnly?: boolean;
  /** Show clear button when field has value */
  showClearButton?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Custom className */
  className?: string;
  /** Value of the input */
  value?: string;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  size = 'medium',
  variant = 'default',
  label,
  hint,
  leftIcon,
  rightIcon,
  shortcut,
  disabled = false,
  readOnly = false,
  showClearButton = false,
  onClear,
  className = '',
  value,
  onChange,
  placeholder = 'Placeholder',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFocus = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    props.onFocus?.(event);
  }, [props]);

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    props.onBlur?.(event);
  }, [props]);

  const handleClear = useCallback(() => {
    if (onClear) {
      onClear();
    }
  }, [onClear]);

  const hasValue = value && value.length > 0;
  const showValidationIcon = variant !== 'default' && !disabled && !readOnly;
  const showRightIcon = rightIcon || (showClearButton && hasValue) || shortcut;

  const containerClasses = [
    'vapor-textfield',
    `vapor-textfield--${size}`,
    `vapor-textfield--${variant}`,
    isFocused && 'vapor-textfield--focused',
    isHovered && !disabled && 'vapor-textfield--hovered',
    disabled && 'vapor-textfield--disabled',
    readOnly && 'vapor-textfield--readonly',
    className,
  ].filter(Boolean).join(' ');

  const validationIcon: IconName | null = 
    variant === 'positive' ? 'fill.check.circle' : 
    variant === 'negative' ? 'fill.error' : 
    null;

  return (
    <div className={containerClasses}>
      {label && (
        <label className="vapor-textfield__label">
          {label}
        </label>
      )}
      
      <div 
        className="vapor-textfield__field"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Icon */}
        {leftIcon && (
          <div className="vapor-textfield__icon vapor-textfield__icon--left">
            <Icon 
              name={leftIcon} 
              size={16}
            />
          </div>
        )}
        
        {/* Input */}
        <input
          ref={ref}
          type="text"
          className="vapor-textfield__input"
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          {...props}
        />
        
        {/* Right Section */}
        {showRightIcon && (
          <div className="vapor-textfield__right">
            {/* Keyboard Shortcut */}
            {shortcut && !showClearButton && (
              <span className="vapor-textfield__shortcut">
                {shortcut}
              </span>
            )}
            
            {/* Validation Icon */}
            {showValidationIcon && validationIcon && (
              <div className={`vapor-textfield__icon vapor-textfield__icon--validation vapor-textfield__icon--${variant}`}>
                <Icon 
                  name={validationIcon} 
                  size={16}
                />
              </div>
            )}
            
            {/* Clear Button or Right Icon */}
            {showClearButton && hasValue && !disabled && !readOnly ? (
              <button
                type="button"
                className="vapor-textfield__clear"
                onClick={handleClear}
                tabIndex={-1}
              >
                <Icon 
                  name="fill.x.circle" 
                  size={16}
                />
              </button>
            ) : rightIcon ? (
              <div className="vapor-textfield__icon vapor-textfield__icon--right">
                <Icon 
                  name={rightIcon} 
                  size={16}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
      
      {/* Hint Text */}
      {hint && (
        <div className={`vapor-textfield__hint vapor-textfield__hint--${variant}`}>
          {variant !== 'default' && (
            <div className="vapor-textfield__hint-icon">
              <div className="vapor-textfield__hint-indicator" />
            </div>
          )}
          <span>{hint}</span>
        </div>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';

export default TextField;


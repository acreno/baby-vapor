import React, { forwardRef, useCallback, useRef, useState, useEffect } from 'react';
import { Icon, IconName } from '../icons/index';
import './Slider.css';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Current value of the slider */
  value?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Whether slider is disabled */
  disabled?: boolean;
  /** Show icon before slider */
  showIconBefore?: boolean;
  /** Show icon after slider */
  showIconAfter?: boolean;
  /** Icon name before slider */
  iconBefore?: IconName;
  /** Icon name after slider */
  iconAfter?: IconName;
  /** Show input field with value */
  showInput?: boolean;
  /** Whether slider is segmented */
  segmented?: boolean;
  /** Number of segments (only used when segmented is true) */
  segments?: number;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Custom className */
  className?: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showIconBefore = false,
  showIconAfter = false,
  iconBefore = 'fill.magnifyingglass',
  iconAfter = 'fill.magnifyingglass',
  showInput = true,
  segmented = false,
  segments = 5,
  onChange,
  className = '',
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [inputValue, setInputValue] = useState(String(Math.round(value)));
  const sliderRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync internal value with prop value
  useEffect(() => {
    setInternalValue(value);
    setInputValue(String(Math.round(value)));
  }, [value]);

  const calculateValue = useCallback((clientX: number) => {
    if (!sliderRef.current) return internalValue;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const trackWidth = rect.width;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, offsetX / trackWidth));
    let newValue = min + percentage * (max - min);
    
    // Snap to step
    newValue = Math.round(newValue / step) * step;
    
    // Clamp value
    newValue = Math.max(min, Math.min(max, newValue));
    
    return newValue;
  }, [min, max, step, internalValue]);

  const handleMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    event.preventDefault();
    setIsDragging(true);
    
    const newValue = calculateValue(event.clientX);
    setInternalValue(newValue);
    setInputValue(String(Math.round(newValue)));
    onChange?.(newValue);
  }, [disabled, calculateValue, onChange]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!isDragging || disabled) return;
    
    const newValue = calculateValue(event.clientX);
    setInternalValue(newValue);
    setInputValue(String(Math.round(newValue)));
    onChange?.(newValue);
  }, [isDragging, disabled, calculateValue, onChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = event.target.value;
    setInputValue(inputVal);
    
    const numValue = parseInt(inputVal, 10);
    if (!isNaN(numValue)) {
      const clampedValue = Math.max(min, Math.min(max, numValue));
      setInternalValue(clampedValue);
      onChange?.(clampedValue);
    }
  }, [min, max, onChange]);

  const handleInputBlur = useCallback(() => {
    // Ensure input shows the actual value
    setInputValue(String(Math.round(internalValue)));
  }, [internalValue]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    let newValue = internalValue;
    
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        newValue = Math.min(max, internalValue + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        newValue = Math.max(min, internalValue - step);
        break;
      case 'Home':
        event.preventDefault();
        newValue = min;
        break;
      case 'End':
        event.preventDefault();
        newValue = max;
        break;
      default:
        return;
    }
    
    setInternalValue(newValue);
    setInputValue(String(Math.round(newValue)));
    onChange?.(newValue);
  }, [disabled, internalValue, min, max, step, onChange]);

  const percentage = ((internalValue - min) / (max - min)) * 100;

  const sliderClasses = [
    'vapor-slider',
    disabled && 'vapor-slider--disabled',
    isDragging && 'vapor-slider--active',
    segmented && 'vapor-slider--segmented',
    className,
  ].filter(Boolean).join(' ');

  // Calculate knob size based on state
  const knobSize = disabled ? 8 : (isDragging ? 12 : 8);

  // Calculate segment styles if segmented
  const renderSegments = () => {
    if (!segmented) return null;
    
    const segmentArray = Array.from({ length: segments }, (_, i) => i);
    const segmentPercentage = 100 / segments;
    const activeSegments = Math.floor(percentage / segmentPercentage);
    
    return (
      <div className="vapor-slider__segments">
        {segmentArray.map((_, index) => (
          <div
            key={index}
            className={`vapor-slider__segment ${index < activeSegments ? 'vapor-slider__segment--active' : ''}`}
            style={{ width: `calc(${segmentPercentage}% - 2px)` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={sliderClasses}>
      {/* Icon Before */}
      {showIconBefore && (
        <div className="vapor-slider__icon">
          <Icon 
            name={iconBefore} 
            size={16}
            className={disabled ? 'vapor-slider__icon--disabled' : ''}
          />
        </div>
      )}
      
      {/* Slider Track Container */}
      <div 
        ref={sliderRef}
        className="vapor-slider__container"
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={internalValue}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        <div className="vapor-slider__track">
          {/* Base Track */}
          <div className="vapor-slider__track-base" />
          
          {/* Active Track */}
          <div 
            className="vapor-slider__track-active"
            style={{ width: `${percentage}%` }}
          >
            {segmented && renderSegments()}
            {!segmented && <div className="vapor-slider__track-fill" />}
          </div>
          
          {/* Knob */}
          <div 
            className="vapor-slider__knob"
            style={{ 
              left: `${percentage}%`,
              width: `${knobSize}px`,
              height: `${knobSize}px`,
            }}
          />
        </div>
        
        {/* Hidden native input for accessibility */}
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={internalValue}
          disabled={disabled}
          className="vapor-slider__input"
          aria-hidden="true"
          tabIndex={-1}
          {...props}
        />
      </div>
      
      {/* Icon After */}
      {showIconAfter && (
        <div className="vapor-slider__icon">
          <Icon 
            name={iconAfter} 
            size={16}
            className={disabled ? 'vapor-slider__icon--disabled' : ''}
          />
        </div>
      )}
      
      {/* Value Input */}
      {showInput && (
        <div className="vapor-slider__value-container">
          <input
            ref={inputRef}
            type="text"
            value={`${inputValue}%`}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            disabled={disabled}
            className="vapor-slider__value-input"
          />
        </div>
      )}
    </div>
  );
});

Slider.displayName = 'Slider';

export default Slider;


import React, { useState, useEffect, useMemo } from 'react';
import { TextField } from '../components/TextField';
import { Switch } from '../components/Switch';
import { Button } from '../components/Button';
import './ConcentricCornersPlayground.css';

// Token definitions
const RADII_TOKENS = {
  '0': 0,
  '2': 2,
  '4': 4,
  '6': 6,
  '8': 8,
  '16': 16,
} as const;

const SPACING_TOKENS = {
  '8': 8,
  '12': 12,
  '16': 16,
  '20': 20,
  '24': 24,
  '28': 28,
  '32': 32,
  '36': 36,
  '40': 40,
  '44': 44,
  '48': 48,
} as const;

type PlatformMode = 'web' | 'mobile' | 'premiere';
type DensityMode = 'regular' | 'compact' | 'spacious';

export const ConcentricCornersPlayground: React.FC = () => {
  // State
  const [platformMode, setPlatformMode] = useState<PlatformMode>('web');
  const [densityMode, setDensityMode] = useState<DensityMode>('regular');
  const [outerRadiusToken, setOuterRadiusToken] = useState<keyof typeof RADII_TOKENS>('8');
  const [spacingToken, setSpacingToken] = useState<keyof typeof SPACING_TOKENS>('16');
  const [outerRadius, setOuterRadius] = useState<number>(8);
  const [innerRadius, setInnerRadius] = useState<number>(0);
  const [concentricLock, setConcentricLock] = useState<boolean>(true);

  // Get values from tokens
  const radiusValue = RADII_TOKENS[outerRadiusToken];
  const spacingValue = SPACING_TOKENS[spacingToken];

  // Compute inner radius when concentric lock is on
  useEffect(() => {
    if (concentricLock) {
      const computed = Math.max(0, outerRadius - spacingValue);
      setInnerRadius(computed);
    }
  }, [concentricLock, outerRadius, spacingValue]);

  // Update outer radius when token changes
  useEffect(() => {
    setOuterRadius(radiusValue);
  }, [radiusValue]);

  // Platform-specific radius adjustments (simulated)
  const platformMultiplier = useMemo(() => {
    switch (platformMode) {
      case 'mobile':
        return 1.2;
      case 'premiere':
        return 0.8;
      default:
        return 1;
    }
  }, [platformMode]);

  // Density-specific spacing adjustments
  const densityMultiplier = useMemo(() => {
    switch (densityMode) {
      case 'compact':
        return 0.75;
      case 'spacious':
        return 1.5;
      default:
        return 1;
    }
  }, [densityMode]);

  const effectiveOuterRadius = outerRadius * platformMultiplier;
  const effectiveSpacing = spacingValue * densityMultiplier;
  const effectiveInnerRadius = concentricLock 
    ? Math.max(0, effectiveOuterRadius - effectiveSpacing) 
    : innerRadius;

  return (
    <div className="concentric-playground">
      <div className="concentric-playground__layout">
        {/* Control Panel */}
        <div className="concentric-playground__controls card">
          <h2 className="text-200 font-medium mb-6">Concentric Corners</h2>
          
          {/* Platform Mode */}
          <div className="control-section">
            <label className="control-label">Platform Mode</label>
            <div className="button-group">
              <Button
                size="small"
                variant={platformMode === 'web' ? 'primary' : 'secondary'}
                onClick={() => setPlatformMode('web')}
              >
                Web
              </Button>
              <Button
                size="small"
                variant={platformMode === 'mobile' ? 'primary' : 'secondary'}
                onClick={() => setPlatformMode('mobile')}
              >
                Mobile
              </Button>
              <Button
                size="small"
                variant={platformMode === 'premiere' ? 'primary' : 'secondary'}
                onClick={() => setPlatformMode('premiere')}
              >
                Premiere
              </Button>
            </div>
          </div>

          {/* Density Mode */}
          <div className="control-section">
            <label className="control-label">Density Mode</label>
            <div className="button-group">
              <Button
                size="small"
                variant={densityMode === 'compact' ? 'primary' : 'secondary'}
                onClick={() => setDensityMode('compact')}
              >
                Compact
              </Button>
              <Button
                size="small"
                variant={densityMode === 'regular' ? 'primary' : 'secondary'}
                onClick={() => setDensityMode('regular')}
              >
                Regular
              </Button>
              <Button
                size="small"
                variant={densityMode === 'spacious' ? 'primary' : 'secondary'}
                onClick={() => setDensityMode('spacious')}
              >
                Spacious
              </Button>
            </div>
          </div>

          {/* Outer Radius Token */}
          <div className="control-section">
            <label className="control-label">
              Outer Radius Token (R)
              <span className="token-value">{radiusValue}px</span>
            </label>
            <select 
              className="token-select"
              value={outerRadiusToken}
              onChange={(e) => setOuterRadiusToken(e.target.value as keyof typeof RADII_TOKENS)}
            >
              {Object.keys(RADII_TOKENS).map(key => (
                <option key={key} value={key}>
                  radii-{key} ({RADII_TOKENS[key as keyof typeof RADII_TOKENS]}px)
                </option>
              ))}
            </select>
          </div>

          {/* Spacing Token */}
          <div className="control-section">
            <label className="control-label">
              Spacing Token (d)
              <span className="token-value">{spacingValue}px</span>
            </label>
            <select 
              className="token-select"
              value={spacingToken}
              onChange={(e) => setSpacingToken(e.target.value as keyof typeof SPACING_TOKENS)}
            >
              {Object.keys(SPACING_TOKENS).map(key => (
                <option key={key} value={key}>
                  component-sizes-{key} ({SPACING_TOKENS[key as keyof typeof SPACING_TOKENS]}px)
                </option>
              ))}
            </select>
          </div>

          {/* Outer Radius Input */}
          <div className="control-section">
            <label className="control-label">Outer Radius (R)</label>
            <TextField
              size="small"
              type="number"
              value={String(outerRadius)}
              onChange={(e) => setOuterRadius(Number(e.target.value) || 0)}
              hint={`Effective: ${effectiveOuterRadius.toFixed(1)}px`}
            />
          </div>

          {/* Inner Radius Input */}
          <div className="control-section">
            <label className="control-label">Inner Radius (r)</label>
            <TextField
              size="small"
              type="number"
              value={String(innerRadius)}
              onChange={(e) => setInnerRadius(Number(e.target.value) || 0)}
              disabled={concentricLock}
              hint={concentricLock ? 'Computed from formula' : `Manual: ${innerRadius}px`}
            />
          </div>

          {/* Concentric Lock */}
          <div className="control-section">
            <Switch
              label="Concentric Lock"
              labelPosition="right"
              checked={concentricLock}
              onChange={(e) => setConcentricLock(e.target.checked)}
            />
            {concentricLock && (
              <div className="formula-display">
                <code className="formula-text">
                  r = max(0, R − d)
                </code>
                <div className="formula-values">
                  <div className="text-60 text-text-tertiary">
                    r = max(0, {effectiveOuterRadius.toFixed(1)} − {effectiveSpacing.toFixed(1)})
                  </div>
                  <div className="text-60 text-text-secondary">
                    r = {effectiveInnerRadius.toFixed(1)}px
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Current Values Summary */}
          <div className="control-section values-summary">
            <h3 className="text-80 font-medium mb-2">Current Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-label">Outer Radius (R):</span>
                <span className="value-number">{effectiveOuterRadius.toFixed(1)}px</span>
              </div>
              <div className="value-item">
                <span className="value-label">Spacing (d):</span>
                <span className="value-number">{effectiveSpacing.toFixed(1)}px</span>
              </div>
              <div className="value-item">
                <span className="value-label">Inner Radius (r):</span>
                <span className="value-number">{effectiveInnerRadius.toFixed(1)}px</span>
              </div>
            </div>
          </div>

          {/* CSS Formula Section */}
          <div className="control-section css-formula-section">
            <h3 className="text-80 font-medium mb-2">CSS Formula</h3>
            <div className="css-code-block">
              <div className="css-line">
                <span className="css-comment">/* Define custom properties */</span>
              </div>
              <div className="css-line">
                <span className="css-property">--outer-radius:</span>{' '}
                <span className="css-value">{effectiveOuterRadius.toFixed(1)}px;</span>
              </div>
              <div className="css-line">
                <span className="css-property">--spacing:</span>{' '}
                <span className="css-value">{effectiveSpacing.toFixed(1)}px;</span>
              </div>
              <div className="css-line css-line-divider" />
              <div className="css-line">
                <span className="css-comment">/* Calculate inner radius */</span>
              </div>
              <div className="css-line">
                <span className="css-property">--inner-radius:</span>{' '}
                <span className="css-function">max</span>
                <span className="css-punctuation">(</span>
                <span className="css-value">0px</span>
                <span className="css-punctuation">,</span>{' '}
                <span className="css-function">calc</span>
                <span className="css-punctuation">(</span>
                <span className="css-var">var(--outer-radius)</span>{' '}
                <span className="css-operator">-</span>{' '}
                <span className="css-var">var(--spacing)</span>
                <span className="css-punctuation">));</span>
              </div>
              <div className="css-line css-line-divider" />
              <div className="css-line">
                <span className="css-comment">/* Result: {effectiveInnerRadius.toFixed(1)}px */</span>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="concentric-playground__preview card">
          <h3 className="text-100 font-medium mb-6">Live Preview</h3>
          
          <div className="preview-container">
            <div 
              className="preview-outer"
              style={{
                borderRadius: `${effectiveOuterRadius}px`,
                padding: `${effectiveSpacing}px`,
              }}
            >
              <div 
                className="preview-content"
                style={{
                  borderRadius: `${effectiveInnerRadius}px`,
                }}
              >
                <div className="preview-image">
                  <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none">
                    <rect width="200" height="150" fill="url(#gradient)" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="preview-label">
                  <div className="text-70 font-medium">VFX</div>
                  <div className="text-60 text-text-tertiary">24 Items</div>
                </div>
              </div>
            </div>

            {/* Measurement Labels */}
            <div className="measurement-labels">
              <div className="measurement-label measurement-outer">
                <span>R = {effectiveOuterRadius.toFixed(1)}px</span>
              </div>
              <div className="measurement-label measurement-spacing">
                <span>d = {effectiveSpacing.toFixed(1)}px</span>
              </div>
              <div className="measurement-label measurement-inner">
                <span>r = {effectiveInnerRadius.toFixed(1)}px</span>
              </div>
            </div>
          </div>

          {/* Platform & Density Info */}
          <div className="preview-info">
            <div className="info-item">
              <span className="text-60 text-text-tertiary">Platform:</span>
              <span className="text-60 font-medium">{platformMode}</span>
              <span className="text-60 text-text-tertiary">({platformMultiplier}×)</span>
            </div>
            <div className="info-item">
              <span className="text-60 text-text-tertiary">Density:</span>
              <span className="text-60 font-medium">{densityMode}</span>
              <span className="text-60 text-text-tertiary">({densityMultiplier}×)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcentricCornersPlayground;


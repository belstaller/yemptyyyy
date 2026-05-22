import React, { useState, CSSProperties } from 'react';

const PINK = '#E91E63';
const PINK_HOVER = '#C2185B';
const PINK_ACTIVE = '#880E4F';
const PINK_DISABLED_BG = '#F8BBD9';
const PINK_DISABLED_TEXT = '#9E9E9E';
const TEXT_COLOR = '#FFFFFF';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, onClick, className, style }) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const backgroundColor = (() => {
    if (disabled) return PINK_DISABLED_BG;
    if (active) return PINK_ACTIVE;
    if (hovered) return PINK_HOVER;
    return PINK;
  })();

  const buttonStyle: CSSProperties = {
    backgroundColor,
    color: disabled ? PINK_DISABLED_TEXT : TEXT_COLOR,
    border: 'none',
    borderRadius: '4px',
    padding: '0.625em 1.25em',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    transition: 'background-color 0.15s ease',
    opacity: disabled ? 0.7 : 1,
    ...style,
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={buttonStyle}
      data-testid="pink-button"
      onMouseEnter={() => { if (!disabled) setHovered(true); }}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => { if (!disabled) setActive(true); }}
      onMouseUp={() => setActive(false)}
    >
      {children}
    </button>
  );
};

export default Button;

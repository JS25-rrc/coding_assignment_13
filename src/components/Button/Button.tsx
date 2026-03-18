import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const paddingMap = {
  small: '0.4rem 0.9rem',
  medium: '0.65rem 1.4rem',
  large: '0.9rem 2rem',
};
const fontMap = {
  small: '0.82rem',
  medium: '1rem',
  large: '1.15rem',
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size = 'medium' }) => paddingMap[size]};
  font-size: ${({ size = 'medium' }) => fontMap[size]};
  font-family: inherit;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#a0a0a0' : backgroundColor || '#4f46e5'};
  color: ${({ color, disabled }) => (disabled ? '#e0e0e0' : color || '#ffffff')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition:
    background-color 0.2s,
    opacity 0.2s;
  &:hover:not(:disabled) {
    opacity: 0.87;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  onClick,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    size={size}
    onClick={!disabled ? onClick : undefined}
  >
    {label}
  </StyledButton>
);

export default Button;

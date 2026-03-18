import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e5e7eb' : backgroundColor || 'transparent'};
  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#111827')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition: background-color 0.2s;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StyledInput = styled.input`
  width: 1.1rem;
  height: 1.1rem;
  accent-color: #4f46e5;
  cursor: inherit;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label = 'Option',
  name = 'radio',
  value = 'option',
  checked = false,
  disabled = false,
  backgroundColor,
  color,
  onSelect,
}) => (
  <Wrapper disabled={disabled} backgroundColor={backgroundColor}>
    <StyledInput
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSelect?.(e.target.value)}
      readOnly={!onSelect}
    />
    <span style={{ color: disabled ? '#9ca3af' : color || '#111827' }}>{label}</span>
  </Wrapper>
);

export default RadioButton;

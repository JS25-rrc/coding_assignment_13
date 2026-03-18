import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<DropdownProps>`
  display: block;
  width: 100%;
  max-width: 320px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid ${({ disabled }) => (disabled ? '#d1d5db' : '#6366f1')};
  border-radius: 6px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e5e7eb' : backgroundColor || '#ffffff'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#111827')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition:
    background-color 0.2s,
    border-color 0.2s;
  &:focus {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Dropdown: React.FC<DropdownProps> = ({
  options = defaultOptions,
  placeholder = 'Select an option',
  backgroundColor,
  color,
  disabled = false,
  onSelect,
}) => (
  <StyledSelect
    disabled={disabled}
    backgroundColor={backgroundColor}
    color={color}
    defaultValue=""
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelect?.(e.target.value)}
  >
    <option value="" disabled>
      {placeholder}
    </option>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;

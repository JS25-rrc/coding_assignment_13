import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  padding: 0.25rem 0.6rem;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: 500;
  font-family: inherit;
  border-radius: 4px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#111827')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition: background-color 0.2s;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Label: React.FC<LabelProps> = ({
  text = 'Label',
  backgroundColor,
  color,
  disabled = false,
  fontSize,
}) => (
  <StyledLabel
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    fontSize={fontSize}
  >
    {text}
  </StyledLabel>
);

export default Label;

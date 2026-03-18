import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-family: inherit;
  line-height: 1.6;
  margin: 0;
  padding: ${({ backgroundColor }) => (backgroundColor ? '0.5rem 0.75rem' : '0')};
  border-radius: 4px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#f3f4f6' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#111827')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition: background-color 0.2s;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Text: React.FC<TextProps> = ({
  content = 'Text content',
  backgroundColor,
  color,
  disabled = false,
  fontSize,
  fontWeight,
  as = 'p',
}) => (
  <StyledText
    as={as}
    backgroundColor={backgroundColor}
    color={color}
    disabled={disabled}
    fontSize={fontSize}
    fontWeight={fontWeight}
  >
    {content}
  </StyledText>
);

export default Text;

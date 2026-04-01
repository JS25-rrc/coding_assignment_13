import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const Wrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 340px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e5e7eb' : backgroundColor || '#ffffff'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#111827')};
  box-shadow: ${({ disabled }) =>
    disabled ? '0 1px 4px rgba(0,0,0,0.06)' : '0 4px 16px rgba(0,0,0,0.10)'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition:
    background-color 0.2s,
    box-shadow 0.2s,
    opacity 0.2s;
  &:hover {
    box-shadow: ${({ disabled }) =>
      disabled ? '0 1px 4px rgba(0,0,0,0.06)' : '0 8px 24px rgba(0,0,0,0.13)'};
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 180px;
  object-fit: cover;
  filter: ${({ disabled }) => (disabled ? 'grayscale(80%)' : 'none')};
  transition: filter 0.2s;
`;

const Body = styled.div`
  padding: 1.25rem;
  flex: 1;
`;

const Title = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ disabled }) => (disabled ? '#9ca3af' : 'inherit')};
`;

const Description = styled.p<{ disabled?: boolean }>`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${({ disabled }) => (disabled ? '#b0b8c4' : '#4b5563')};
`;

const Footer = styled.div<{ disabled?: boolean }>`
  padding: 0.75rem 1.25rem;
  border-top: 1px solid ${({ disabled }) => (disabled ? '#d1d5db' : '#e5e7eb')};
  font-size: 0.85rem;
  background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : '#f9fafb')};
  color: ${({ disabled }) => (disabled ? '#9ca3af' : '#6b7280')};
`;

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'Card description.',
  imageSrc = 'https://placehold.co/340x180',
  imageAlt = 'Card image',
  backgroundColor,
  color,
  disabled = false,
  footerText = 'Footer',
}) => (
  <Wrapper backgroundColor={backgroundColor} color={color} disabled={disabled}>
    <CardImage src={imageSrc} alt={imageAlt.,.} disabled={disabled} />
    <Body>
      <Title disabled={disabled}>{title}</Title>
      <Description disabled={disabled}>{description}</Description>
    </Body>
    <Footer disabled={disabled}>{footerText}</Footer>
  </Wrapper>
);

export default Card;

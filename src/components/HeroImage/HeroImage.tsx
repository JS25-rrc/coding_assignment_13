import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroWrapper = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '420px'};
  background-image: ${({ src, disabled }) => (!disabled && src ? `url(${src})` : 'none')};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || '#1e1b4b'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  filter: ${({ disabled }) => (disabled ? 'grayscale(80%)' : 'none')};
  transition:
    opacity 0.2s,
    filter 0.2s;
  @media (max-width: 600px) {
    height: 240px;
  }
`;

const Overlay = styled.div<{ overlayColor?: string; disabled?: boolean }>`
  position: absolute;
  inset: 0;
  background-color: ${({ overlayColor, disabled }) =>
    disabled ? 'rgba(150,150,150,0.55)' : overlayColor || 'rgba(0,0,0,0.45)'};
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
`;

const HeroTitle = styled.h1<{ color?: string; disabled?: boolean }>`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 800;
  margin: 0 0 0.75rem;
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#ffffff')};
`;

const HeroSubtitle = styled.p<{ color?: string; disabled?: boolean }>`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin: 0;
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#e5e7eb')};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src = 'https://placehold.co/1200x420',
  title = 'Hero Title',
  subtitle = 'Subtitle goes here',
  backgroundColor,
  color,
  disabled = false,
  height,
  overlayColor,
}) => (
  <HeroWrapper src={src} height={height} backgroundColor={backgroundColor} disabled={disabled}>
    <Overlay overlayColor={overlayColor} disabled={disabled} />
    <Content>
      <HeroTitle color={color} disabled={disabled}>
        {title}
      </HeroTitle>
      <HeroSubtitle color={color} disabled={disabled}>
        {subtitle}
      </HeroSubtitle>
    </Content>
  </HeroWrapper>
);

export default HeroImage;

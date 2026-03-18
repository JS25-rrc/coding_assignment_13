import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  display: block;
  max-width: 100%;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  transition:
    opacity 0.2s,
    filter 0.2s;
`;

const Img: React.FC<ImgProps> = ({
  src = 'https://placehold.co/400x250',
  alt = 'Image',
  width,
  height,
  disabled = false,
  backgroundColor,
  borderRadius,
  objectFit = 'cover',
}) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    disabled={disabled}
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    objectFit={objectFit}
  />
);

export default Img;

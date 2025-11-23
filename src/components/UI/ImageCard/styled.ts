import styled from 'styled-components';
import { colors } from 'styles/Variables';

interface CardImageProps {
  loaded: boolean;
}

export const CardGrid = styled.figure`
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f1f1;
  cursor: pointer;
  transition: transform 0.3s;
  height: 15rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 74%;
`;
export const CardImage = styled.img<CardImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`;

export const CardFooter = styled.figcaption`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 20px;

  svg {
    color: ${colors.special};
    //fill: ${colors.special};
    margin-left: 10px;
    margin-top: 10px;
    flex-shrink: 0;
  }

  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 1.3;
    color: #393939;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

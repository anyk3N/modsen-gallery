import styled from 'styled-components';
import mixins from 'styles/mixins';

interface CardImageProps {
  $loaded: boolean;
}

export const CardGrid = styled.figure`
  position: relative;
  overflow: hidden;
  border: 1px solid ${p => p.theme.colors.border};
  cursor: pointer;
  ${mixins.transition('transform, box-shadow', '300ms')}
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
  ${mixins.imageCover}
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  ${mixins.transition('opacity', '250ms', 'ease')}
`;

export const CardFooter = styled.figcaption`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 20px;

  svg {
    color: ${p => p.theme.colors.accent};
    margin-left: 10px;
    margin-top: 10px;
    flex-shrink: 0;
  }

  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 1.3;
    color: ${p => p.theme.colors.textSecondary};
    ${mixins.ellipsis(2)}

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

import styled from 'styled-components';
import mixins from 'styles/mixins';

export const ThemeCard = styled.figure`
  position: relative;
  overflow: hidden;
  ${mixins.transition('transform', '300ms')}
  height: 15rem;

  &:hover {
    transform: scale(1.03);
  }

  img {
    ${mixins.imageCover}
  }

  figcaption {
    position: absolute;
    bottom: 12px;
    left: 15px;
    color: ${p => p.theme.colors.primary};
    font-size: 20px;
    text-shadow:
      -1px 1px 2px #00000080,
      1px 1px 2px #00000080,
      1px -1px 0 #00000080,
      -1px -1px 0 #00000080;
  }
`;

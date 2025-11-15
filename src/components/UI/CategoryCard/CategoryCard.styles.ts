import styled from 'styled-components';

export const ThemeCard = styled.figure`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  height: 15rem;

  &:hover {
    transform: scale(1.03);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  figcaption {
    position: absolute;
    bottom: 30px;
    left: 35px;
    color: white;
    font-size: 20px;
    text-shadow:
      -1px 1px 2px #00000080,
      1px 1px 2px #00000080,
      1px -1px 0 #00000080,
      -1px -1px 0 #00000080;
  }
`;

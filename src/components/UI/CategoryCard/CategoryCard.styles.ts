import styled from 'styled-components';

export const ThemeCard = styled.figure`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  padding: 12px;
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
      -1px 1px 2px rgba(0, 0, 0, 0.5),
      1px 1px 2px rgba(0, 0, 0, 0.5),
      1px -1px 0 rgba(0, 0, 0, 0.5),
      -1px -1px 0 rgba(0, 0, 0, 0.5);
  }
`;

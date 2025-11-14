import styled from 'styled-components';
import bgImage from 'assets/bg/background.svg';
import { colors } from 'styles/Variables';

export const TitleContainer = styled.section`
  width: 100%;
  height: 45vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: clamp(48px, 7vw, 96px);
  text-transform: capitalize;
  text-align: center;
  color: ${colors.text};
  margin: 0;
  line-height: 1.2;
  text-shadow:
    -1px 1px 2px #00000080,
    1px 1px 2px #00000080,
    1px -1px 0 #00000080,
    -1px -1px 0 #00000080;
  span {
    color: ${colors.special};
  }
`;

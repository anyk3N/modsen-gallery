import bgImage from 'assets/bg/background.svg';
import styled from 'styled-components';

export const TitleContainer = styled.section`
  width: 100%;
  height: clamp(200px, 35vw, 420px);
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.roboto};
  font-weight: 700;
  font-size: clamp(48px, 7vw, 96px);
  text-transform: capitalize;
  text-align: center;
  color: ${p => p.theme.colors.textPrimary};
  margin: 0;
  line-height: 1.2;
  text-shadow:
    -1px 1px 2px #00000080,
    1px 1px 2px #00000080,
    1px -1px 0 #00000080,
    -1px -1px 0 #00000080;
  span {
    color: ${p => p.theme.colors.accent};
  }
`;

import styled from 'styled-components';
import { colors } from 'styles/Variables';

export const TitleContainer = styled.div`
  max-width: 909px;
  min-height: 80vh;
  margin: 40px auto;
  text-align: center;
`;

export const Title1 = styled.h2`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 700;
  font-size: clamp(32px, 6vw, 64px);
  text-transform: capitalize;
  text-align: center;
  color: #393939;
  line-height: 1.2;
  margin-bottom: 20px;
  span {
    color: ${colors.special};
  }
`;

export const Title2 = styled.h2`
  margin: 42px auto;
  line-height: 44px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #393939;
  font-weight: 400;
  p {
    color: ${colors.special};
  }
`;

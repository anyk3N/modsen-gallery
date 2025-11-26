import styled from 'styled-components';
import mixins from 'styles/mixins';

export const TitleContainer = styled.div`
  ${mixins.container('909px')}
  padding: 0px;
  min-height: 80vh;
  text-align: center;
`;

export const Title1 = styled.h2`
  font-family: ${p => p.theme.fonts.lexend};
  font-weight: 700;
  font-size: clamp(32px, 6vw, 64px);
  text-transform: capitalize;
  text-align: center;
  color: ${p => p.theme.colors.textSecondary};
  line-height: 1.2;
  margin-bottom: 20px;
  span {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Title2 = styled.h2`
  margin: 42px auto;
  line-height: 44px;
  font-family: ${p => p.theme.fonts.roboto};
  text-align: center;
  color: ${p => p.theme.colors.textSecondary};
  font-weight: 400;
  p {
    color: ${p => p.theme.colors.accent};
  }
  h1 {
    font-size: 40px;
    font-weight: 400;
  }
`;

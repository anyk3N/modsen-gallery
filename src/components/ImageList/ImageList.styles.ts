import styled from 'styled-components';

export const NoPhotoTitle = styled.div`
  line-height: 80px;
  min-height: 80vh;
  margin: 60px auto;
  padding: 20px;
  max-width: 684px;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 700;
  font-size: clamp(32px, 6vw, 64px);
  text-transform: capitalize;
  text-align: center;
  color: #393939;
  span {
    color: #f17900;
  }
`;

export const ErrorTitle = styled.h1`
  max-width: 909px;
  text-align: center;
  margin: 0 auto;
  padding: 30px 0;
  min-height: 80vh;
`;

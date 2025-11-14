import styled from 'styled-components';

export const ThemeGrid = styled.div`
  max-width: 909px;
  margin: 40px auto;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
`;

import styled from 'styled-components';

export const ThemeGrid = styled.div<{ $loading?: boolean }>`
  max-width: 909px;
  min-height: 80vh;
  margin: 40px auto;
  display: grid;
  grid-gap: 15px;
  padding: 0 12px;
  grid-template-columns: repeat(auto-fit, minmax(285px, max-content));
  justify-content: center;
  opacity: ${({ $loading }) => ($loading ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

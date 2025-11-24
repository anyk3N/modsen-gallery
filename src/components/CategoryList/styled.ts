import styled from 'styled-components';
import mixins from 'styles/mixins';

export const ThemeGrid = styled.div<{ $loading?: boolean }>`
  ${mixins.container('909px')}
  min-height: 80vh;
  display: grid;
  grid-gap: 15px;
  padding: 0 12px;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  justify-content: center;

  opacity: ${({ $loading }) => ($loading ? 0.5 : 1)};
  ${mixins.transition('opacity', '300ms', 'ease')}
  ${({ theme }) => mixins.mqMin(theme, 'xxl')} {
    grid-template-columns: repeat(auto-fit, minmax(285px, 285px));
    justify-content: left;
  }
`;

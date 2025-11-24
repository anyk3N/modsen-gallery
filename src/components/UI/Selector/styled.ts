import arrow from 'assets/icons/sort-arrow.svg';
import styled from 'styled-components';
import mixins from 'styles/mixins';

export const SortContainer = styled.div`
  max-width: 909px;
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: ${p => p.theme.fonts.lexend};
  justify-content: right;
  margin: 0 auto;
  padding: 20px 20px 0 20px;

  ${({ theme }) => mixins.mqMax(theme, 600)} {
    justify-content: center;
  }
`;

export const SortLabel = styled.span`
  font-weight: 700;
  font-size: 17px;
  line-height: 150%;
  color: ${p => p.theme.colors.textSecondary};
`;

export const SortDropdown = styled.div`
  position: relative;
`;

export const SortButton = styled.button`
  background: ${p => p.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  ${mixins.transition('all', '300ms')}
  color: ${p => p.theme.colors.divider};
  border: 1px solid ${p => p.theme.colors.divider};
  border-radius: 16px;
  padding: 16px;
  width: 146px;
  height: 41px;

  &:hover {
    border-color: ${p => p.theme.colors.hover};
  }

  &:after {
    content: url(${arrow});
    font-size: 10px;
    margin-left: 8px;
  }
`;

export const SortOptions = styled.div<{ open: boolean }>`
  display: ${p => (p.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background: ${p => p.theme.colors.primary};
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  margin-top: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const SortOption = styled.div`
  padding: 8px 15px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: ${p => p.theme.colors.textPrimary};
  }
  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

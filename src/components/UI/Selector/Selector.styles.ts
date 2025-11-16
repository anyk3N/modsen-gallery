import styled from 'styled-components';
import arrow from 'assets/icons/sort-arrow.svg';

export const SortContainer = styled.div`
  max-width: 909px;
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: 'Lexend Deca', sans-serif;
  justify-content: right;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SortLabel = styled.span`
  font-weight: 700;
  font-size: 17px;
  line-height: 150%;
  color: #393939;
`;

export const SortDropdown = styled.div`
  position: relative;
`;
export const SortButton = styled.button`
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  transition: all 0.3s;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 16px;
  padding: 16px;
  width: 146px;
  height: 41px;
  &:hover {
    border-color: #999;
  }

  &:after {
    content: url(${arrow});
    font-size: 10px;
    margin-left: 8px;
  }
`;

interface SortOptionsProps {
  open: boolean;
}
export const SortOptions = styled.div<SortOptionsProps>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
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
    background: #f5f5f5;
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

import styled from 'styled-components';

export const BurgerBtn = styled.button`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      display: block;
      height: 4px;
      width: 100%;
      background-color: orange;
      border-radius: 2px;
    }
  }
`;

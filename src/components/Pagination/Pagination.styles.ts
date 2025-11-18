import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  max-width: 909px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PageButton = styled.button<{
  $active?: boolean;
  $ellipsis?: boolean;
}>`
  padding: 8px 12px;
  border: ${({ $ellipsis }) => ($ellipsis ? 'none' : '1px solid #e1e1e1')};
  background: ${({ $ellipsis }) => ($ellipsis ? 'transparent' : 'white')};
  border-radius: ${({ $ellipsis }) => ($ellipsis ? '0' : '6px')};
  cursor: ${({ $ellipsis }) => ($ellipsis ? 'default' : 'pointer')};
  transition: all 0.2s ease;
  min-width: ${({ $ellipsis }) => ($ellipsis ? '30px' : '40px')};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;

  ${({ $active }) =>
    $active &&
    `
    background: #f17900;
    color: white;
    border-color: #f17900;
  `}

  &:hover {
    ${({ $ellipsis, disabled, $active }) =>
      !$ellipsis &&
      !disabled &&
      !$active &&
      `
        background: #f0f0f0;
        border-color: #f17900;
        color: #f17900;
      `}
  }

  &:disabled {
    ${({ $ellipsis }) =>
      !$ellipsis &&
      `
        cursor: not-allowed;
        opacity: 0.6;
      `}
  }
`;

export const ArrowButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e1e1e1;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: #f0f0f0;
    border-color: #007bff;
    color: #007bff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media (max-width: 480px) {
    min-width: 32px;
    height: 32px;
  }
`;

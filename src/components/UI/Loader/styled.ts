import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

export const Loader = styled.div`
  border: 8px solid ${p => p.theme.colors.textPrimary};
  border-top: 8px solid ${p => p.theme.colors.accent};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

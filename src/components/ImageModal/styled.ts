import styled from 'styled-components';
import mixins from 'styles/mixins';

export const Backdrop = styled.div`
  ${mixins.backdrop}
  backdrop-filter: blur(10px);
  background: #a8a8a866;
`;

export const Modal = styled.div`
  max-width: 700px;
  max-height: 600px;
  height: 86%;
  width: 100%;
  background: ${p => p.theme.colors.primary};
  box-shadow: 0 8px 32px #00000040;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  ${mixins.imageCover}
  height: 86%;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${p => p.theme.fonts.lexend};
  font-weight: 500;
  font-size: 17px;
  height: 14%;
  line-height: 150%;
  color: ${p => p.theme.colors.textSecondary};
  width: 100%;
  padding: 0 24px;
  svg {
    stroke: ${p => p.theme.colors.accent};
  }
`;

export const ArrowButton = styled.button<{ direction?: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${p => p.theme.colors.accent};
  border: none;
  font-size: 40px;
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
  z-index: 2;
  width: 56px;
  height: 58px;
  border-radius: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #0000001f;
  ${mixins.transition('background', '200ms')}

  left: ${({ direction }) => (direction === 'left' ? '-72px' : 'auto')};
  right: ${({ direction }) => (direction === 'right' ? '-72px' : 'auto')};

  ${({ theme }) => mixins.mqMax(theme, 850)} {
    top: 105%;
    transform: translateY(0);
    left: ${({ direction }) => (direction === 'left' ? '100px' : 'auto')};
    right: ${({ direction }) => (direction === 'right' ? '100px' : 'auto')};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: -50px;
  background: transparent;
  border: none;
  font-size: 50px;
  color: #fff;
  cursor: pointer;
  z-index: 3;
  width: 56px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mixins.transition('background', '200ms')}
  ${({ theme }) => mixins.mqMax(theme, 850)} {
    right: -15px;
    top: -20px;
  }
`;

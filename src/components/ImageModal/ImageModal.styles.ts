import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  backdrop-filter: blur(10px);
  background: #a8a8a866;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  max-width: 700px;
  max-height: 600px;
  height: 86%;
  width: 100%;
  background: #fff;
  box-shadow: 0 8px 32px #00000040;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: 86%;
  object-fit: cover;
  display: block;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 500;
  font-size: 17px;
  height: 14%;
  line-height: 150%;
  color: #393939;
  align-content: center;
  width: 100%;
  padding: 0 24px;
  svg {
    stroke: #f17900;
  }
`;

export const ArrowButton = styled.button<{ direction?: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #f17900;
  border: none;
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  z-index: 2;
  width: 56px;
  height: 58px;
  border-radius: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #0000001f;
  transition: background 0.2s;

  left: ${({ direction }) => (direction === 'left' ? '-72px' : 'auto')};
  right: ${({ direction }) => (direction === 'right' ? '-72px' : 'auto')};
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
  transition: background 0.2s;
`;

import styled from 'styled-components';
import { colors } from 'styles/Variables';

export const CardGrid = styled.figure`
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f1f1;
  cursor: pointer;

  transition: transform 0.3s;
  height: 15rem;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 74%;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardFooter = styled.figcaption`
  display: flex;
  justify-content: space-between;

  padding: 22px;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 16px;
  height: 26%;
  width: 100%;
  color: #111111;
  svg {
    color: ${colors.special};
    //fill: ${colors.special};
    margin-left: 10px;
  }
  p {
    line-height: 1.1;
  }
`;

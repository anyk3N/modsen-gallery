import bgImage from 'assets/bg/background.svg';
import styled from 'styled-components';

export const TitleContainer = styled.section`
  width: 100%;
  height: clamp(200px, 35vw, 420px);
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 700;
  font-size: clamp(32px, 6vw, 64px);
  text-transform: capitalize;
  text-align: center;
  color: ${props => props.theme.colors.textPrimary};
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow:
    -1px 1px 2px #00000080,
    1px 1px 2px #00000080,
    1px -1px 0 #00000080,
    -1px -1px 0 #00000080;
  span {
    color: ${props => props.theme.colors.accent};
  }
`;

export const SearchBar = styled.form`
  position: relative;
  max-width: 808px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  border: none;
  outline: none;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 54px;
  border-radius: 8px;
  width: 100%;
  padding-left: 54px;
  font-family: ${props => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 16px;
  color: #000000;
`;

export const SearchBtn = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 18px;
  left: 35px;
  background: transparent;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: white;
  text-align: left;
  margin: 8px;
  font-size: 14px;
  min-height: 21px;
`;

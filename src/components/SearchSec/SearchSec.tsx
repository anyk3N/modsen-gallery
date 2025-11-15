import React from 'react';
import {
  SearchBar,
  SearchBtn,
  SearchInput,
  Title,
  TitleContainer,
} from './SearchSec.styles';
import searchIcon from 'assets/icons/searchIcon.svg';

const SearchSec = () => {
  return (
    <TitleContainer>
      <Title>
        let&apos;s find some
        <span> Images</span>
        <br /> here!
      </Title>
      <SearchBar>
        <SearchBtn>
          <img src={searchIcon} alt="search icon" />
        </SearchBtn>
        <SearchInput type="text" placeholder="Search..." />
      </SearchBar>
    </TitleContainer>
  );
};

export default SearchSec;

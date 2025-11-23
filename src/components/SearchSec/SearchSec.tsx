import searchIcon from 'assets/icons/searchIcon.svg';
import {
  SearchBar,
  SearchBtn,
  SearchInput,
  Title,
  TitleContainer,
} from 'components/SearchSec/SearchSec.styles';
import { MIN_QUERY_LENGTH } from 'constants/constants';
import React, { useEffect, useState } from 'react';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchSec = ({ onSearch }: SearchBarProps) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.trim().length >= MIN_QUERY_LENGTH) {
        onSearch(search.trim());
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    onSearch(search.trim());
  };

  return (
    <TitleContainer>
      <Title>
        let&apos;s find some
        <span> Images</span>
        <br /> here!
      </Title>
      <SearchBar onSubmit={handleSubmit}>
        <SearchBtn>
          <img src={searchIcon} alt="search icon" />
        </SearchBtn>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </SearchBar>

      {error && <p>{error}</p>}
    </TitleContainer>
  );
};

export default SearchSec;

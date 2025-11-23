import searchIcon from 'assets/icons/searchIcon.svg';
import { MIN_QUERY_LENGTH } from 'constants/constants';
import React, { useEffect, useState } from 'react';

import * as S from './styled';

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
        setError('');
      } else if (search.trim().length > 0) {
        setError(`Введите минимум ${MIN_QUERY_LENGTH} символов`);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (search.trim().length < MIN_QUERY_LENGTH) {
      setError(`Введите минимум ${MIN_QUERY_LENGTH} символов`);
      return;
    }
    onSearch(search.trim());
  };

  return (
    <S.TitleContainer>
      <S.Title>
        let&apos;s find some
        <span> Images</span>
        <br /> here!
      </S.Title>
      <S.SearchBar onSubmit={handleSubmit}>
        <S.SearchBtn>
          <img src={searchIcon} alt="search icon" />
        </S.SearchBtn>
        <S.SearchInput
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </S.SearchBar>

      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.TitleContainer>
  );
};

export default SearchSec;

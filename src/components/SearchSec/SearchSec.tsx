import searchIcon from 'assets/icons/searchIcon.svg';
import { MIN_QUERY_LENGTH } from 'constants/constants';
import { useDebounceSearch } from 'hooks/useDebounce';
import React, { useCallback, useState } from 'react';
import { isValidQuery } from 'utils/helpers/validation';

import * as S from './styled';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchSec = ({ onSearch }: SearchBarProps) => {
  const [search, setSearch] = useState('');
  const { error, setError } = useDebounceSearch({ onSearch, query: search });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      if (!isValidQuery(search)) {
        setError(`Введите минимум ${MIN_QUERY_LENGTH} символов`);
        return;
      }
      onSearch(search.trim());
    },
    [search, onSearch, setError],
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

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
          onChange={handleInputChange}
        />
      </S.SearchBar>

      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.TitleContainer>
  );
};

export default React.memo(SearchSec);

import { MIN_QUERY_LENGTH, SEARCH_DEBOUNCE_DELAY_MS } from 'constants/constants';
import { useEffect, useState } from 'react';

import { isValidQuery } from '../utils/helpers/validation';

interface DebounceSearchOptions {
  query: string;
  onSearch: (query: string) => void;
}

export const useDebounceSearch = ({ onSearch, query }: DebounceSearchOptions) => {
  const [error, setError] = useState('');

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length === 0) {
      setError('');
      return;
    }

    const timeout = setTimeout(() => {
      if (isValidQuery(query)) {
        onSearch(trimmedQuery);
        setError('');
      } else {
        setError(`Введите минимум ${MIN_QUERY_LENGTH} символов`);
      }
    }, SEARCH_DEBOUNCE_DELAY_MS);

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  return { error, setError };
};

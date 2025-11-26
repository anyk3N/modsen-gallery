import { MIN_QUERY_LENGTH } from 'constants/constants';

export const isValidQuery = (query: string): boolean => {
  return query.trim().length >= MIN_QUERY_LENGTH;
};

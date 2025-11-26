import { MAX_PAGES } from 'constants/constants';

export const limitTotalPages = (totalPages: number): number => {
  return Math.min(totalPages, MAX_PAGES);
};

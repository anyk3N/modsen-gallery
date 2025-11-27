import { useMemo } from 'react';
import { generateVisiblePages } from 'utils/helpers/pagination';

export const usePagination = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  const visiblePages = useMemo(() => {
    return generateVisiblePages(currentPage, totalPages);
  }, [currentPage, totalPages]);

  return visiblePages;
};

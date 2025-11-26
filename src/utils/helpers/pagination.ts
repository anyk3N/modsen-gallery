import { MAX_PAGES } from 'constants/constants';
import {
  EDGE_PAGE_THRESHOLD,
  MAX_PAGES_TO_SHOW_WITHOUT_ELLIPSIS,
  PAGES_AROUND_CURRENT,
} from 'constants/constants';

export const generateVisiblePages = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  if (totalPages <= MAX_PAGES_TO_SHOW_WITHOUT_ELLIPSIS) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];
  pages.push(1);

  let startPage = Math.max(2, currentPage - PAGES_AROUND_CURRENT);
  let endPage = Math.min(totalPages - 1, currentPage + PAGES_AROUND_CURRENT);

  if (currentPage <= EDGE_PAGE_THRESHOLD) {
    startPage = 2;
    endPage = EDGE_PAGE_THRESHOLD + PAGES_AROUND_CURRENT;
  }

  if (currentPage >= totalPages - PAGES_AROUND_CURRENT - 1) {
    startPage = totalPages - EDGE_PAGE_THRESHOLD + PAGES_AROUND_CURRENT - 1;
    endPage = totalPages - 1;
  }

  if (startPage > 2) {
    pages.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) {
    pages.push('...');
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return Array.from(new Set(pages));
};

export const limitTotalPages = (totalPages: number): number => {
  return Math.min(totalPages, MAX_PAGES);
};

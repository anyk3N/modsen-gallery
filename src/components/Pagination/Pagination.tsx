import { usePagination } from 'hooks/usePagination';
import React, { useCallback } from 'react';

import * as S from './styled';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const visiblePages = usePagination(currentPage, totalPages);

  const handlePageClick = useCallback(
    (page: number | string) => {
      if (typeof page === 'number') {
        onPageChange(page);
      }
    },
    [onPageChange],
  );

  const handlePrevClick = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [onPageChange, currentPage]);

  const handleNextClick = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [onPageChange, currentPage]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <S.PaginationWrapper>
      <S.ArrowButton
        disabled={currentPage === 1}
        onClick={handlePrevClick}
        aria-label="Предыдущая страница">
        ←
      </S.ArrowButton>

      {visiblePages.map((page, idx) => (
        <S.PageButton
          key={idx}
          $active={page === currentPage}
          $ellipsis={page === '...'}
          disabled={page === '...' || page === currentPage}
          onClick={() => handlePageClick(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={page === '...' ? 'More pages' : `Page ${page}`}>
          {page}
        </S.PageButton>
      ))}

      <S.ArrowButton
        disabled={currentPage === totalPages}
        onClick={handleNextClick}
        aria-label="Следующая страница">
        →
      </S.ArrowButton>
    </S.PaginationWrapper>
  );
};

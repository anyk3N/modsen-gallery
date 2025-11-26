import React from 'react';

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
  const getVisiblePages = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      startPage = 2;
      endPage = 4;
    }

    if (currentPage >= totalPages - 2) {
      startPage = totalPages - 3;
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

    pages.push(totalPages);

    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <S.PaginationWrapper>
      <S.ArrowButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Предыдущая страница">
        ←
      </S.ArrowButton>

      {visiblePages.map((page, idx) => (
        <S.PageButton
          key={idx}
          $active={page === currentPage}
          $ellipsis={page === '...'}
          disabled={page === '...' || page === currentPage}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          aria-label={page === '...' ? 'More pages' : `Page ${page}`}>
          {page}
        </S.PageButton>
      ))}

      <S.ArrowButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Следующая страница">
        →
      </S.ArrowButton>
    </S.PaginationWrapper>
  );
};

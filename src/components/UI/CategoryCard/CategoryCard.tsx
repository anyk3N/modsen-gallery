import defaultImage from 'assets/icons/defaultImage.svg';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export interface CategoryCardProps {
  url: string;
  category: string;
}

export const CategoryCard = ({ url, category }: CategoryCardProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/images/${category}`);
  }, [navigate, category]);

  return (
    <S.ThemeCard onClick={handleClick}>
      <img loading="lazy" src={url || defaultImage} alt="category image" />
      <figcaption>{category}</figcaption>
    </S.ThemeCard>
  );
};

import defaultImage from 'assets/icons/defaultImage.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export interface CategoryCardProps {
  url: string;
  category: string;
}

const CategoryCard = ({ url, category }: CategoryCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/images/${category}`);
  };

  return (
    <S.ThemeCard onClick={handleClick}>
      <img src={url || defaultImage} alt="category image" />
      <figcaption>{category}</figcaption>
    </S.ThemeCard>
  );
};

export default CategoryCard;

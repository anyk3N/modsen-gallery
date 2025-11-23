import React from 'react';
import { ThemeCard } from 'components/UI/CategoryCard/CategoryCard.styles';
import defaultImage from 'assets/icons/defaultImage.svg';
import { useNavigate } from 'react-router-dom';

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
    <ThemeCard onClick={handleClick}>
      <img src={url || defaultImage} alt="category image" />
      <figcaption>{category}</figcaption>
    </ThemeCard>
  );
};

export default CategoryCard;

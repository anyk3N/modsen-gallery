import React from 'react';
import { ThemeCard } from './CategoryCard.styles';
import image from 'assets/bg/background.svg';

const CategoryCard = () => {
  return (
    <ThemeCard>
      <img src={image} alt="category image" />
      <figcaption>Blank</figcaption>
    </ThemeCard>
  );
};

export default CategoryCard;

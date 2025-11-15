import React from 'react';
import SearchSec from '../components/SearchSec/SearchSec';
import { ThemeGrid } from '../components/CategoryList/CategoryList.styles';
import ImageCard from '../components/UI/ImageCard/ImageCard';

const ImagesPage = () => {
  return (
    <>
      <SearchSec />
      <ThemeGrid>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </ThemeGrid>
    </>
  );
};

export default ImagesPage;

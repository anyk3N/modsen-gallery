import React, { useState } from 'react';
import { Title1, Title2, TitleContainer } from 'components/FavList/FavoriteList.styles';
import { ThemeGrid } from '../CategoryList/CategoryList.styles';
import ImageCard from '../UI/ImageCard/ImageCard';

const FavoriteList = () => {
  const [favs] = useState([1]);
  return (
    <TitleContainer>
      {favs.length === 0 ? (
        <Title1>
          Your <span>favourite </span>
          list <br />
          is empty
        </Title1>
      ) : (
        <>
          <Title2>
            <p>Saved by you.</p>
            <h2>Your favourite list</h2>
          </Title2>
          <ThemeGrid>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </ThemeGrid>
        </>
      )}
    </TitleContainer>
  );
};

export default FavoriteList;

import { ImageModal } from 'components/ImageModal/ImageModal';
import ImageCard from 'components/UI/ImageCard/ImageCard';
import { useModal } from 'hooks/useModal';
import React from 'react';
import { useFavourites } from 'utils/context/FavouriteContext';

import { ThemeGrid } from '../CategoryList/styled';
import * as S from './styled';

const FavoriteList = () => {
  const { favourites, toggleFavourite, isFavourite } = useFavourites();
  const { modalIndex, openModal, closeModal, handlePrev, handleNext } =
    useModal(favourites);

  return (
    <S.TitleContainer>
      {favourites.length === 0 ? (
        <S.Title1>
          Your <span>favourite </span>
          list <br />
          is empty
        </S.Title1>
      ) : (
        <>
          <S.Title2>
            <p>Saved by you.</p>
            <h1>Your favourite list</h1>
          </S.Title2>
          <ThemeGrid>
            {favourites.map((photo, idx) => (
              <ImageCard
                key={photo.id}
                index={idx}
                url={photo.urls.regular}
                title={photo.alt_description}
                photo={photo}
                onOpen={openModal}
                onToggleFavourite={toggleFavourite}
                isActive={isFavourite(photo.id)}
              />
            ))}
          </ThemeGrid>
          {modalIndex !== null && (
            <ImageModal
              photos={favourites}
              currentIndex={modalIndex}
              onClose={closeModal}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </>
      )}
    </S.TitleContainer>
  );
};

export default FavoriteList;

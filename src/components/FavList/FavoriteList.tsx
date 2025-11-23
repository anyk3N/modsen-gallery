import { ThemeGrid } from 'components/CategoryList/CategoryList.styles';
import { Title1, Title2, TitleContainer } from 'components/FavList/FavoriteList.styles';
import ImageModal from 'components/ImageModal/ImageModal';
import ImageCard from 'components/UI/ImageCard/ImageCard';
import { useModal } from 'hooks/useModal';
import React from 'react';
import { useFavourites } from 'utils/context/FavouriteContext';

const FavoriteList = () => {
  const { favourites, toggleFavourite, isFavourite } = useFavourites();
  const { modalIndex, openModal, closeModal, handlePrev, handleNext } =
    useModal(favourites);

  return (
    <TitleContainer>
      {favourites.length === 0 ? (
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
            {favourites.map((photo, idx) => (
              <ImageCard
                key={photo.id}
                title={photo.alt_description}
                url={photo.urls.regular}
                onClick={() => openModal(idx)}
                favClick={() => toggleFavourite(photo)}
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
    </TitleContainer>
  );
};

export default FavoriteList;

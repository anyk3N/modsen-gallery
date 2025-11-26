import leftArrow from 'assets/icons/left arrow.svg';
import rightArrow from 'assets/icons/right arrow.svg';
import { FavouriteIcon } from 'components/UI/Icons/Icons';
import { DIRECTION_LEFT, DIRECTION_RIGHT } from 'constants/constants';
import React from 'react';
import type { UnsplashPhoto } from 'types/types';
import { useFavourites } from 'utils/context/FavouriteContext';

import * as S from './styled';

export interface PhotoModalProps {
  photos: UnsplashPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ImageModal: React.FC<PhotoModalProps> = ({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  if (currentIndex === null) {
    return null;
  }
  const photo = photos[currentIndex];
  if (!photo) {
    return null;
  }

  const { toggleFavourite, isFavourite } = useFavourites();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleToggleFavourite = (photoToToggle: UnsplashPhoto) => {
    toggleFavourite(photoToToggle);

    if (!isFavourite(photoToToggle.id) && photos.length === 1) {
      onClose();
    }
  };

  return (
    <S.Backdrop onClick={handleBackdropClick}>
      <S.Modal>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        <S.ArrowButton direction={DIRECTION_LEFT} onClick={onPrev}>
          <img src={leftArrow} alt="prev"></img>
        </S.ArrowButton>
        <S.Image src={photo.urls.regular} alt={photo.alt_description} />
        <S.ArrowButton direction={DIRECTION_RIGHT} onClick={onNext}>
          <img src={rightArrow} alt="next" />
        </S.ArrowButton>
        {photo.alt_description && (
          <S.ModalTitle>
            {photo.alt_description}
            <FavouriteIcon
              $isActive={isFavourite(photo.id)}
              onClick={() => handleToggleFavourite(photo)}
            />
          </S.ModalTitle>
        )}
      </S.Modal>
    </S.Backdrop>
  );
};

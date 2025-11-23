import leftArrow from 'assets/icons/left arrow.svg';
import rightArrow from 'assets/icons/right arrow.svg';
import { FavouriteIcon } from 'components/UI/Icons/Icons';
import React from 'react';
import type { UnsplashPhoto } from 'types/types';
import { useFavourites } from 'utils/context/FavouriteContext';

import {
  ArrowButton,
  Backdrop,
  CloseButton,
  Image,
  Modal,
  Title,
} from './ImageModal.styles';

export interface PhotoModalProps {
  photos: UnsplashPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<PhotoModalProps> = ({
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
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ArrowButton direction={'left'} onClick={onPrev}>
          <img src={leftArrow} alt="prev"></img>
        </ArrowButton>
        <Image src={photo.urls.regular} alt={photo.alt_description} />
        <ArrowButton direction={'right'} onClick={onNext}>
          <img src={rightArrow} alt="next" />
        </ArrowButton>
        {photo.alt_description && (
          <Title>
            {photo.alt_description}
            <FavouriteIcon
              fill={isFavourite(photo.id) ? '#f17900' : 'white'}
              onClick={() => handleToggleFavourite(photo)}
            />
          </Title>
        )}
      </Modal>
    </Backdrop>
  );
};

export default ImageModal;

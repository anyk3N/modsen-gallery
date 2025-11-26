import { ThemeGrid } from 'components/CategoryList/styled';
import { SpinLoader } from 'components/UI/Loader/SpinLoader';
import { Selector } from 'components/UI/Selector/Selector';
import { searchSortOptions } from 'constants/sortOptions';
import { useModal } from 'hooks/useModal';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFavourites } from 'utils/context/FavouriteContext';

import { usePhotos } from '../../hooks/usePhotos';
import { ImageModal } from '../ImageModal/ImageModal';
import { Pagination } from '../Pagination/Pagination';
import ImageCard from '../UI/ImageCard/ImageCard';
import * as S from './styled';

export type ImagesListProps = {
  searchQuery: string;
};

const ImagesList = ({ searchQuery }: ImagesListProps) => {
  const { category } = useParams<{ category: string }>();
  const { photos, isLoading, error, totalPages, currentPage, setCurrentPage, setSort } =
    usePhotos(searchQuery, category);

  const { toggleFavourite, isFavourite } = useFavourites();

  const { modalIndex, openModal, closeModal, handlePrev, handleNext } = useModal(photos);

  const items = useMemo(
    () =>
      photos.map((photo, idx) => (
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
      )),
    [photos, openModal, toggleFavourite, isFavourite],
  );

  return (
    <>
      <Selector
        options={searchSortOptions}
        defaultValue={searchSortOptions[0].name}
        onSortChange={setSort}
      />
      {error && <S.ErrorTitle>Произошла ошибка {error}</S.ErrorTitle>}
      {isLoading && <SpinLoader />}
      {!error && photos.length > 0 && <ThemeGrid>{items}</ThemeGrid>}
      {!error && !isLoading && photos.length === 0 && (
        <S.NoPhotoTitle>
          The search didn&apos;t yield any results, please try <span>again.</span>
        </S.NoPhotoTitle>
      )}
      {!error && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
      {modalIndex !== null && (
        <ImageModal
          photos={photos}
          currentIndex={modalIndex}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default ImagesList;

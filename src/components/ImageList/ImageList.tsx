import { fetchPhotosByCategory, fetchRandomPhotos } from 'API/API';
import { ThemeGrid } from 'components/CategoryList/styled';
import ImageModal from 'components/ImageModal/ImageModal';
import Pagination from 'components/Pagination/Pagination';
import ImageCard from 'components/UI/ImageCard/ImageCard';
import SpinLoader from 'components/UI/Loader/SpinLoader';
import Selector from 'components/UI/Selector/Selector';
import { perPage } from 'constants/constants';
import { searchSortOptions } from 'constants/sortOptions';
import { useFetching } from 'hooks/useFetching';
import { useModal } from 'hooks/useModal';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { UnsplashPhoto } from 'types/types';
import { useFavourites } from 'utils/context/FavouriteContext';

import * as S from './styled';

export type ImagesListProps = {
  searchQuery: string;
};

const ImagesList = ({ searchQuery }: ImagesListProps) => {
  const { category } = useParams<{ category: string }>();
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('searchSortOptions[0].value');
  const { toggleFavourite, isFavourite } = useFavourites();

  const { modalIndex, openModal, closeModal, handlePrev, handleNext } = useModal(photos);

  const [fetchImages, isLoading, error] = useFetching(
    async (query: string | undefined, page: number, sort: string) => {
      let data;

      if (query) {
        data = await fetchPhotosByCategory(query, page, perPage, sort);
      } else {
        data = await fetchRandomPhotos(page, perPage, sort);
      }

      setPhotos(data.results);
      setTotalPages(data.totalPages);
    },
  );

  useEffect(() => {
    fetchImages(searchQuery || category, currentPage, sort);
  }, [searchQuery, category, currentPage, sort]);

  return (
    <>
      <Selector
        options={searchSortOptions}
        defaultValue={searchSortOptions[0].name}
        onSortChange={setSort}
      />
      {error && <S.ErrorTitle>Произошла ошибка {error}</S.ErrorTitle>}
      {isLoading && <SpinLoader />}
      {!error && photos.length > 0 && (
        <ThemeGrid>
          {photos.map((photo, idx) => (
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
      )}
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

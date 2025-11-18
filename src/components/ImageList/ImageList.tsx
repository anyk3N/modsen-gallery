import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Selector from 'components/UI/Selector/Selector';

import { useFetching } from 'hooks/useFetching';

import { searchSortOptions } from 'constants/sortOptions';
import type { ImagesListProps, UnsplashPhoto } from 'types/types';
import { fetchPhotosByCategory, fetchRandomPhotos } from 'utils/API/API';
import { ErrorTitle, NoPhotoTitle } from 'components/ImageList/ImageList.styles';
import ImageCard from 'components/UI/ImageCard/ImageCard';
import { ThemeGrid } from 'components/CategoryList/CategoryList.styles';
import SpinLoader from 'components/UI/Loader/SpinLoader';
import Pagination from 'components/Pagination/Pagination';
import { useModal } from 'hooks/useModal';
import ImageModal from 'components/ImageModal/ImageModal';
import { useFavourites } from 'utils/context/FavouriteContext';
import { perPage } from 'constants/constants';

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
      {error && <ErrorTitle>Произошла ошибка {error}</ErrorTitle>}
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
        <NoPhotoTitle>
          The search didn&apos;t yield any results, please try <span>again.</span>
        </NoPhotoTitle>
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

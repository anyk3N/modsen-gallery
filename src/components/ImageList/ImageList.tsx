import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Selector from 'components/UI/Selector/Selector';

import { useFetching } from 'hooks/useFetching';

import { searchSortOptions } from 'constants/sortOptions';
import type { ImagesListProps, UnsplashPhoto } from 'types/types';
import { fetchPhotosByCategory } from '../../utils/API/API';
import { NoPhotoTitle } from './ImageList.styles';
import ImageCard from '../UI/ImageCard/ImageCard';
import { ThemeGrid } from '../CategoryList/CategoryList.styles';
import SpinLoader from '../UI/Loader/SpinLoader';

const perPage = 12;

const ImagesList = ({ searchQuery }: ImagesListProps) => {
  const { category } = useParams<{ category: string }>();
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [totalPages, setTotalPages] = useState<number>(100);
  const [currentPage] = useState(1);
  const [sort, setSort] = useState<string>('searchSortOptions[0].value');
  const [fetchPhotos, isLoading, error] = useFetching(
    async (query: string | undefined, page: number, perPage: number, sort: string) => {
      const images = query
        ? await fetchPhotosByCategory(query, page, perPage, sort)
        : await fetchPhotosByCategory(query, page, perPage, sort);
      setPhotos(images);
      setTotalPages(totalPages);
    },
  );
  useEffect(() => {
    fetchPhotos(searchQuery || category, currentPage, perPage, sort);
  }, [searchQuery, category, currentPage, sort]);

  return (
    <>
      <Selector
        options={searchSortOptions}
        defaultValue={searchSortOptions[0].name}
        onSortChange={setSort}
      />
      {error && <h1>Произошла ошибка {error}</h1>}
      {isLoading && <SpinLoader />}

      {!isLoading && photos.length > 0 && (
        <ThemeGrid>
          {photos.map(photo => (
            <ImageCard
              key={photo.id}
              title={photo.alt_description}
              url={photo.urls.regular}
            />
          ))}
        </ThemeGrid>
      )}

      {!isLoading && photos.length === 0 && (
        <NoPhotoTitle>
          The search didn&apos;t yield any results, please try <span>again.</span>
        </NoPhotoTitle>
      )}
    </>
  );
};

export default ImagesList;

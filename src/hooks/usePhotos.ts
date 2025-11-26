import { fetchPhotosByCategory, fetchRandomPhotos } from 'API/API';
import { perPage } from 'constants/constants';
import { useCallback, useEffect, useState } from 'react';
import type { UnsplashPhoto } from 'types/types';

import { useFetching } from './useFetching';

type UsePhotosResult = {
  photos: UnsplashPhoto[];
  isLoading: boolean;
  error: string;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (p: number) => void;
  sort: string;
  setSort: (s: string) => void;
  refetch: () => void;
};

export const usePhotos = (searchQuery?: string, category?: string): UsePhotosResult => {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('relevant'); // дефолтное значение

  const loadCallback = useCallback(
    async (query: string | undefined, page: number, sortBy: string) => {
      const data = query
        ? await fetchPhotosByCategory(query, page, perPage, sortBy)
        : await fetchRandomPhotos(page, perPage, sortBy);

      setPhotos(data.results ?? []);
      setTotalPages(data.totalPages ?? 1);

      return data;
    },
    [],
  );

  const [fetchImages, isLoading, error] = useFetching(loadCallback);

  useEffect(() => {
    fetchImages(searchQuery || category, currentPage, sort);
  }, [fetchImages, searchQuery, category, currentPage, sort]);

  const refetch = useCallback(() => {
    fetchImages(searchQuery || category, currentPage, sort);
  }, [fetchImages, searchQuery, category, currentPage, sort]);

  return {
    photos,
    isLoading,
    error,
    totalPages,
    currentPage,
    setCurrentPage,
    sort,
    setSort,
    refetch,
  };
};

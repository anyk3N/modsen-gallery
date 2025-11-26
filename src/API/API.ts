import { apiKey, apiUrl } from 'constants/api';
import type { UnsplashPhoto } from 'types/types';
import { limitTotalPages } from 'utils/helpers/pagination';

export async function fetchCollections(): Promise<UnsplashPhoto[]> {
  const response = await fetch(`${apiUrl}/collections?per_page=12&client_id=${apiKey}`);
  if (!response.ok) {
    throw new Error('Ошибка загрузки коллекций');
  }
  return response.json();
}

export async function fetchRandomPhotos(
  page = 1,
  perPage = 12,
  orderBy: string,
): Promise<{ results: UnsplashPhoto[]; totalPages: number }> {
  const response = await fetch(
    `${apiUrl}/photos?page=${page}&per_page=${perPage}&order_by=${orderBy}&client_id=${apiKey}`,
  );
  const data = await response.json();
  return {
    results: data,
    totalPages: 20,
  };
}

export async function fetchPhotosByCategory(
  category: string,
  page = 1,
  perPage = 12,
  orderBy: string,
): Promise<{ results: UnsplashPhoto[]; totalPages: number }> {
  const response = await fetch(
    `${apiUrl}/search/photos?query=${category}&page=${page}&per_page=${perPage}&order_by=${orderBy}&client_id=${apiKey}`,
  );
  const data = await response.json();
  return {
    results: data.results,
    totalPages: limitTotalPages(data.total_pages),
  };
}

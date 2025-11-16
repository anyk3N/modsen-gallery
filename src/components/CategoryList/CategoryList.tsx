import React, { useEffect, useState } from 'react';
import CategoryCard from '../UI/CategoryCard/CategoryCard';
import { ThemeGrid } from './CategoryList.styles';
import { UnsplashPhoto } from '../../types/types';
import { fetchCollections } from '../../utils/API/API';
import { useFetching } from '../../hooks/useFetching';
import SpinLoader from '../Loader/SpinLoader';

const CategoryList = () => {
  const [categories, setCategories] = useState<UnsplashPhoto[]>([]);

  const [fetchCategories, isLoading, error] = useFetching(async () => {
    const posts = await fetchCollections();
    setCategories(posts);
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ThemeGrid>
      {error && <h1>Произошла ошибка {error}</h1>}
      {isLoading ? (
        <>
          <SpinLoader />
        </>
      ) : (
        <>
          {categories.map(photo => (
            <CategoryCard
              key={photo.id}
              category={photo.title}
              url={photo.cover_photo.urls.regular}
            />
          ))}
        </>
      )}
    </ThemeGrid>
  );
};

export default CategoryList;

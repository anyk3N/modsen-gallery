import { fetchCollections } from 'API/API';
import { CategoryCard } from 'components/UI/CategoryCard/CategoryCard';
import { SpinLoader } from 'components/UI/Loader/SpinLoader';
import { useFetching } from 'hooks/useFetching';
import React, { useEffect, useState } from 'react';
import { UnsplashPhoto } from 'types/types';

import { ErrorTitle } from '../ImageList/styled';
import * as S from './styled';

export const CategoryList = () => {
  const [categories, setCategories] = useState<UnsplashPhoto[]>([]);

  const [fetchCategories, isLoading, error] = useFetching(async () => {
    const posts = await fetchCollections();
    setCategories(posts);
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <S.ThemeGrid>
      {error && <ErrorTitle>Произошла ошибка {error}</ErrorTitle>}
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
    </S.ThemeGrid>
  );
};

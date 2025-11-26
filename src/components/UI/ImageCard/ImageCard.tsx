import { FavouriteIcon } from 'components/UI/Icons/Icons';
import React, { useCallback, useState } from 'react';
import type { UnsplashPhoto } from 'types/types';

import { SpinLoader } from '../Loader/SpinLoader';
import * as S from './styled';

export interface ImageCardProps {
  url: string;
  title?: string | null;
  index: number;
  photo: UnsplashPhoto;
  onOpen: (index: number) => void;
  onToggleFavourite: (photo: UnsplashPhoto) => void;
  isActive: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  url,
  title,
  index,
  photo,
  onOpen,
  onToggleFavourite,
  isActive,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleOpen = useCallback(() => {
    onOpen(index);
  }, [onOpen, index]);

  const handleFavClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onToggleFavourite(photo);
    },
    [onToggleFavourite, photo],
  );

  const handleImageLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <S.CardGrid onClick={handleOpen}>
      <S.ImageWrapper>
        {!loaded && (
          <S.LoaderWrapper>
            <SpinLoader />
          </S.LoaderWrapper>
        )}
        <S.CardImage
          src={url}
          alt={'image'}
          $loaded={loaded}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      </S.ImageWrapper>

      <S.CardFooter>
        <p>{title}</p>
        <div onClick={handleFavClick}>
          <FavouriteIcon $isActive={isActive} />
        </div>
      </S.CardFooter>
    </S.CardGrid>
  );
};

export default React.memo(ImageCard);

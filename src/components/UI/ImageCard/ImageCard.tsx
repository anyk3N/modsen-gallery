import { FavouriteIcon } from 'components/UI/Icons/Icons';
import React, { useCallback, useState } from 'react';

import { SpinLoader } from '../Loader/SpinLoader';
import * as S from './styled';

export interface ImageCardProps {
  url: string;
  title: string;
  onClick: () => void;
  favClick: () => void;
  isActive: boolean;
}

export const ImageCard = ({
  url,
  title,
  onClick,
  favClick,
  isActive,
}: ImageCardProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleFavClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      favClick();
    },
    [favClick],
  );

  const handleImageLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <S.CardGrid onClick={onClick}>
      <S.ImageWrapper>
        {!loaded && (
          <S.LoaderWrapper>
            <SpinLoader />
          </S.LoaderWrapper>
        )}
        <S.CardImage src={url} alt={title} $loaded={loaded} onLoad={handleImageLoad} />
      </S.ImageWrapper>

      <S.CardFooter>
        <p>{title}</p>
        <div onClick={handleFavClick}>
          <FavouriteIcon fill={isActive ? '#f17900' : 'white'} />
        </div>
      </S.CardFooter>
    </S.CardGrid>
  );
};

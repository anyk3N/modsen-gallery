import { FavouriteIcon } from 'components/UI/Icons/Icons';
import SpinLoader from 'components/UI/Loader/SpinLoader'; // твой спиннер
import React, { useState } from 'react';

import * as S from './styled';

export interface ImageCardProps {
  url: string;
  title: string;
  onClick: () => void;
  favClick: () => void;
  isActive: boolean;
}

const ImageCard = ({ url, title, onClick, favClick, isActive }: ImageCardProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    favClick();
  };

  return (
    <S.CardGrid onClick={onClick}>
      <S.ImageWrapper>
        {!loaded && (
          <S.LoaderWrapper>
            <SpinLoader />
          </S.LoaderWrapper>
        )}
        <S.CardImage
          src={url}
          alt={title}
          $loaded={loaded}
          onLoad={() => setLoaded(true)}
        />
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

export default ImageCard;

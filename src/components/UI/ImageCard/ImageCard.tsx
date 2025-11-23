import { FavouriteIcon } from 'components/UI/Icons/Icons';
import React from 'react';

import * as S from './styled';

export interface ImageCardProps {
  url: string;
  title: string;
  onClick: () => void;
  favClick: () => void;
  isActive: boolean;
}

const ImageCard = ({ url, title, onClick, favClick, isActive }: ImageCardProps) => {
  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    favClick();
  };

  return (
    <S.CardGrid onClick={onClick}>
      <S.ImageWrapper>
        <S.CardImage src={url} alt={title} />
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

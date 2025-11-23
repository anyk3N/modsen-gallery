import { FavouriteIcon } from 'components/UI/Icons/Icons';
import {
  CardFooter,
  CardGrid,
  CardImage,
  ImageWrapper,
} from 'components/UI/ImageCard/ImageCard.styles';
import React from 'react';

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
    <CardGrid onClick={onClick}>
      <ImageWrapper>
        <CardImage src={url} alt={title} />
      </ImageWrapper>

      <CardFooter>
        <p>{title}</p>
        <div onClick={handleFavClick}>
          <FavouriteIcon fill={isActive ? '#f17900' : 'white'} />
        </div>
      </CardFooter>
    </CardGrid>
  );
};

export default ImageCard;

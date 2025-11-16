import React from 'react';
import { CardFooter, CardImage, CardGrid, ImageWrapper } from './ImageCard.styles';
import { FavouriteIcon } from '../Icons/Icons';
import { ImageCardProps } from '../../../types/types';

const ImageCard = ({ url, title }: ImageCardProps) => {
  return (
    <CardGrid>
      <ImageWrapper>
        <CardImage src={url} alt="image" />
      </ImageWrapper>

      <CardFooter>
        <p>{title}</p>
        <FavouriteIcon />
      </CardFooter>
    </CardGrid>
  );
};

export default ImageCard;

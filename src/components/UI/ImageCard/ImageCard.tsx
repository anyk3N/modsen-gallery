import React from 'react';
import { CardFooter, CardImage, CardGrid, ImageWrapper } from './ImageCard.styles';
import image from '../../../assets/bg/background.svg';
import { FavouriteIcon } from '../../Icons/Icons';

const ImageCard = () => {
  return (
    <CardGrid>
      <ImageWrapper>
        <CardImage src={image} alt="image" />
      </ImageWrapper>

      <CardFooter>
        <p>Blank</p>
        <FavouriteIcon />
      </CardFooter>
    </CardGrid>
  );
};

export default ImageCard;

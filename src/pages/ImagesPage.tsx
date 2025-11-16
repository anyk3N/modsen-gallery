import React, { useState } from 'react';
import SearchSec from '../components/SearchSec/SearchSec';
import ImageList from '../components/ImageList/ImageList';

const ImagesPage = () => {
  const [searchQuery] = useState('');

  return (
    <>
      <SearchSec />
      <ImageList searchQuery={searchQuery} />
    </>
  );
};

export default ImagesPage;

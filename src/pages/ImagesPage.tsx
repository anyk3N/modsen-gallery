import React, { useState } from 'react';
import SearchSec from 'components/SearchSec/SearchSec';
import ImageList from 'components/ImageList/ImageList';

const ImagesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SearchSec onSearch={setSearchQuery} />
      <ImageList searchQuery={searchQuery} />
    </>
  );
};

export default ImagesPage;

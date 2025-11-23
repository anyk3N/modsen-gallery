import ImageList from 'components/ImageList/ImageList';
import SearchSec from 'components/SearchSec/SearchSec';
import React, { useState } from 'react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SearchSec onSearch={setSearchQuery} />
      <ImageList searchQuery={searchQuery} />
    </>
  );
};

export default Index;

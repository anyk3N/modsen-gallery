import { Loader, LoaderWrapper } from 'components/UI/Loader/SpinLoader.styles';
import React from 'react';

const SpinLoader = () => {
  return (
    <LoaderWrapper>
      <Loader></Loader>
    </LoaderWrapper>
  );
};

export default SpinLoader;

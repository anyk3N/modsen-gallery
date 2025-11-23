import React from 'react';

import * as S from './styled';

const Index = () => {
  return (
    <S.NotFoundSec>
      <S.Title>404</S.Title>
      <S.Title2>NOT FOUND</S.Title2>
      <S.Text>
        The page was <S.TextSpan>not found</S.TextSpan>, please return to the main page.
      </S.Text>
    </S.NotFoundSec>
  );
};

export default Index;

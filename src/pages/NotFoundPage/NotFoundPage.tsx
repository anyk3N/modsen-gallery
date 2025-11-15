import React from 'react';
import { NotFoundSec, TextSpan, Title, Title2, Text } from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <NotFoundSec>
      <Title>404</Title>
      <Title2>NOT FOUND</Title2>
      <Text>
        The page was <TextSpan>not found</TextSpan>, please return to the main page.
      </Text>
    </NotFoundSec>
  );
};

export default NotFoundPage;

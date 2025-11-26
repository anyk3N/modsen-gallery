import { NotFoundSec, Text, TextSpan, Title } from 'pages/NotFound/styled';
import React from 'react';

type Props = {
  error: Error;
};

const ErrorFallbackStyled: React.FC<Props> = ({ error }) => {
  return (
    <NotFoundSec>
      <Title>ERROR</Title>
      <Text>
        The page was <TextSpan>{error.message}</TextSpan>, please return to the main page.
      </Text>
    </NotFoundSec>
  );
};

export default ErrorFallbackStyled;

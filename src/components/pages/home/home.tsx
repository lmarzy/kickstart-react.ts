import React, { FunctionComponent, ReactElement } from 'react';
import { useApiRequest } from '../../../hooks';

import { Container } from '../../shared';

export const HomePage: FunctionComponent = (): ReactElement => {
  const { data, error, isLoaded } = useApiRequest('https://jsonplaceholder.typicode.com/todos');

  if (!isLoaded) {
    return <p>Is Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  console.log(data);

  return (
    <Container>
      <h1>Home Page</h1>
      {data && data.map((item) => <div key={item.id}>{item.id}</div>)}
    </Container>
  );
};

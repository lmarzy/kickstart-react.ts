import React, { FunctionComponent, ReactElement, useState } from 'react';
import { useApiRequest } from '../../hooks';

import { Container } from '../../components/common';

export const HomePage: FunctionComponent = (): ReactElement => {
  const { data, error, isLoaded } = useApiRequest('https://jsonplaceholder.typicode.com/todos');
  const [value, setValue] = useState(0);

  if (!isLoaded) {
    return <p>Is Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  console.log(data);

  return (
    <Container>
      <h1>Home Page</h1>
      {/* {data && data.map((item) => <div key={item.id}>{item.id}</div>)} */}

      <p>{value}</p>

      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </Container>
  );
};

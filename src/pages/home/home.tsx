import React, { FunctionComponent, ReactElement, useState } from 'react';

import { Container } from '../../components/common';
import { useTodos } from '../../hooks/get-todos/get-todos';

export const HomePage: FunctionComponent = (): ReactElement => {
  // const { data, error, isLoaded } = useApiRequest('https://jsonplaceholder.typicode.com/todos');
  const { data, error } = useTodos();

  console.log(data);

  // const [value, setValue] = useState(0);

  // if (!isLoaded) {
  //   return <p>Is Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error</p>;
  // }

  // const increment = () => {
  //   setValue(value + 1);
  // };

  // const decrement = () => {
  //   setValue(value - 1);
  // };

  return (
    <Container>
      <h1>Home Page</h1>
      {data && data.map((item: any) => <div key={item.id}>{item.id}</div>)}

      {/* <p>{value}</p>

      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button> */}
    </Container>
  );
};

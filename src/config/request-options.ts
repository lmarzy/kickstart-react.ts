export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const createUrl = (base: string, path: string) => `${base}${path}`;

export const getTodos = (): any => [
  createUrl(BASE_URL, '/todos'),
  {
    method: 'GET',
  },
];

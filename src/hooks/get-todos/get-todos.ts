import { getTodos } from '../../config/request-options';
import { useApiRequest } from '../api-request/api-request';

export const useTodos = (): any => {
  const request = getTodos();
  console.log(request);
  return useApiRequest(request);
};

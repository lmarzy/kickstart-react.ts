import { useApiRequest } from '../api-request/api-request';
import { getTodos } from '../../config/request-options';

export const useTodos = (): any => {
  const request = getTodos();
  console.log(request);
  return useApiRequest(request);
};

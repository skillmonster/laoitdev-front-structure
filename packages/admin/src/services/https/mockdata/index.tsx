import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
export const mockClient = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance);
  mock.onPost('/auth/login').reply(200, {});
};

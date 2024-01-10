import axios from 'axios';
import { localStorageToken } from '@services/cache';
import routes from '@ui/config/routes';
import { refreshToken } from './auth';

const refreshURL = '/delegates/token';
const baseURL = import.meta.env.VITE_BASE_URL;
const baseInstance = axios.create({
  baseURL: baseURL,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

baseInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && config.url !== refreshURL) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error) || error.response) {
      const originalRequest = error.config;
      const errMessage = error.response.data.error.status as string;
      if (
        originalRequest.url === refreshURL &&
        errMessage === 'UNAUTHENTICATED'
      ) {
        localStorageToken.removeAccessToken();
        routes.navigate('/login');
        return Promise.reject(error);
      }
      if (
        errMessage === 'UNAUTHENTICATED' &&
        !originalRequest._retry &&
        originalRequest.url !== '/delegates/login'
      ) {
        originalRequest._retry = true;
        try {
          const res = await refreshToken({
            token: localStorageToken.getRefreshToken(),
          });
          localStorageToken.setToken(res);
          originalRequest._retry = false;
          return baseInstance(originalRequest);
        } catch (err) {
          localStorageToken.removeAccessToken();
          routes.navigate('/login');
        }
      }
    }
    return Promise.reject(error);
  }
);

// mockClient(baseInstance);

export default baseInstance;

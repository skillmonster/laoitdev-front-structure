export const localStorageToken = (() => {
  const getAccessToken = () => {
    return localStorage.getItem('accessToken') || '';
  };
  const getRefreshToken = () => {
    return localStorage.getItem('refreshToken') || '';
  };
  const setAccessToken = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
  };
  const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem('refreshToken', refreshToken);
  };
  const setToken = ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };
  const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };
  return {
    getAccessToken,
    getRefreshToken,
    setToken,
    setRefreshToken,
    setAccessToken,
    removeAccessToken,
  };
})();

export const rememberMe = (() => {
  const getRememberMe = localStorage.getItem('rememberMe');
  const setRememberMe = (rememberMe: string) => {
    localStorage.setItem('rememberMe', rememberMe);
  };
  const removeRememberMe = () => {
    localStorage.removeItem('rememberMe');
  };
  return {
    getRememberMe,
    setRememberMe,
    removeRememberMe,
  };
})();

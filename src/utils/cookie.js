/* eslint-disable */
const isUserAuthenticated = () => {
  const value = localStorage.getItem('token') || '';
  if (value !== '') {
    return true;
  }
  return false;
};

export { isUserAuthenticated };

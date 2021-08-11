const isUserAuthenticated = () => {
  const value = localStorage.getItem('token') || '';
  if (value !== '') {
    return true;
  }
  return false;
};

const handleLogOut = () => {
  localStorage.removeItem('token');
};

export { isUserAuthenticated, handleLogOut };

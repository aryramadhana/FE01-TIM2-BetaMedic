import axios from 'axios';

const API_URL = 'https://api-betamedic.tokocode.com/api/';

const login = (username, password) => {
  return axios
    .post(`${API_URL }login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('data', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('data');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('data'));
};

export default {
  login,
  logout,
  getCurrentUser,
};

// import BaseService from './baseService';
// import API from '../config/rest';

// const login = (email, password) => {
//   return BaseService.post(API.LOGIN, { email, password });
// };

// export default { login };

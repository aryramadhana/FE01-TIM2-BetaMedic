/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { MDBBtn } from 'mdbreact';
import React from 'react';
// import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Login } from '../../pages/login';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
  //   // const isUserAuthenticated = () => {
  //   //   const config = {
  //   //     headers: {
  //   //       Accept: 'application/json',
  //   //       'Accept-Language': 'es',
  //   //       'Content-Type': 'application/json',
  //   //       Authorization: `Bearer` + localStorage.getItem('token'),
  //   //     },
  //   //   };
  //     // axios.get('https://try-smart-hospital-be.herokuapp.com/users', config).then(
  //     //   (res) => {
  //     //     console.log(res.data);
  //     //     // if (res.JSON('token')) return true;
  //     //     // return false;
  //     //   },
  //     //   (err) => {
  //     //     console.log(err);
  //     //   }
  //     // );
  //   };

  const listMenu = [
    'Beranda',
    'Cek Covid',
    'Tanya Dokter',
    'Booking Tes Covid',
    'Rumah Sakit',
  ];
  const link = '/Beranda';

  function handleLogOut() {
    localStorage.removeItem('token');
    window.location.assign(link);
    // removeCookie('token');
    // Cookies.remove('token');
  }
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}

      {isUserAuthenticated() ? (
        <MDBBtn
          type="button"
          color="danger"
          onClick={handleLogOut}
          style={{ float: 'right', marginTop: '12px' }}
        >
          Logout
        </MDBBtn>
      ) : (
        <Link to="/Login">
          <div className="menu">Login</div>
        </Link>
      )}
    </div>
  );
};

export default Header;

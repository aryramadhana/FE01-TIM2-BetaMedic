import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, getCookie } from '../../utils/cookie';
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */

const Header = () => {
  const userId = getCookie('userData') ?? JSON.parse(getCookie('userData'));
  const listMenu = [
    'Beranda',
    'Cek Covid',
    'Tanya Dokter',
    'Booking Tes Covid',
    'Rumah Sakit',
    'Login',
  ];
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      <p>{userId}</p>
      {isUserAuthenticated() ? <span>logout</span> : <div />}
    </div>
  );
};
export default Header;

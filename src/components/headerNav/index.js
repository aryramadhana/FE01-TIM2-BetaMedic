import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable eol-last */

const Header = () => {
  const listMenu = [
    'Beranda',
    'Cek Covid',
    'Tanya Dokter',
    'Booking Tes Covid',
    'RsTerdekat',
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
      {/* {isUserAuthenticated() ? <span>logout</span> : <div />} */}
    </div>
  );
};
export default Header;

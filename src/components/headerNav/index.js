/* eslint-disable */
import { MDBBtn } from 'mdbreact';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
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
  }
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <NavLink to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </NavLink>
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

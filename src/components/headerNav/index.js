/* eslint-disable */
import { MDBBtn } from 'mdbreact';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
  const listMenu = [
    'Beranda',
    'Cek Covid',
    'Booking Tes Covid',
    'Tanya Dokter',
    'Rumah Sakit',
    'Video',
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
          <NavLink
            to={`/${name}`}
            key={name}
            activeClassName="active"
            className="menu"
          >
            <div>{name}</div>
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
        <NavLink to="/Login" activeClassName="active" className="menu">
          <div>Login</div>
        </NavLink>
      )}
    </div>
  );
};

export default Header;

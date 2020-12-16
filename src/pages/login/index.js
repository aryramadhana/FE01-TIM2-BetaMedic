import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
const Login = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <br />
            <Link to="/register">Register</Link>
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="blue" type="submit">
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;

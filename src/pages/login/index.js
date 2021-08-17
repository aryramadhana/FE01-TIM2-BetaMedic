/* eslint-disable */
import React, { useState, useHistory } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn } from 'mdbreact';
import './style.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);
  const onSubmitLogin = () => {
    setLoginLoading(true);
    axios
      .post('https://api-betamedic.tokocode.com/api/login', {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        window.location.assign('/Beranda');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="page-login">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmitLogin();
                }}
              >
                <p className="h4 text-center mb-4">Login</p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                  Email
                </label>
                <input
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormLoginPasswordEx"
                  className="grey-text"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="defaultFormLoginPasswordEx"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                <Link to="/register" className="btnwarna">
                  Register
                </Link>
                <br />
                <div className="text-center mt-4">
                  <MDBBtn
                    color="primary"
                    type="submit"
                    value="Login"
                    disabled={isLoginLoading}
                  >
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;

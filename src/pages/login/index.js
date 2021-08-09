/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn } from 'mdbreact';
// import { setCookie } from '../../utils/cookie';
// import { authService } from '../../services';
import './style.css';
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setLoginLoading] = useState(false);
  const onSubmitLogin = () => {
    setLoginLoading(true);
    axios
      .post('https://try-smart-hospital-be.herokuapp.com/login', {
        email,
        password,
      })
      // authService
      //   .login(email, password)
      .then((res) => {
        // console.log(res.data.token);
        this.state({ datam: response.data });
        console.log(datam);
        // const cookieEmail = res.email;
        // setCookie('userData', JSON.stringify(cookieEmail), 10000);
        // setCookie('token', JSON.stringify(cookieToken), 10000);
        // window.location.assign('/Beranda');
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally(() => {
    //   setLoginLoading(false);
    // });
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                <Link to="/register">Register</Link>
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
                  {/* <input
                    type="submit"
                    value="Login"
                    disabled={isLoginLoading}
                  /> */}
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

import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn } from 'mdbreact';
import axios from 'axios';
import './style.css';
/* eslint-disable */
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [tgl_lahir, setTanggalLahir] = useState('');
  const [alamat, setAlamat] = useState('');
  const _register = () => {
    axios
      .post('https://api-betamedic.tokocode.com/api/register', {
        email,
        password,
        nama,
        tgl_lahir,
        alamat,
      })
      .then((res) => {
        const link = '/Login';
        window.location.assign(link);
        console.log(res.data);
      });
  };

  return (
    <div className="page-register">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  _register();
                }}
              >
                <p className="h4 text-center mb-4">Register</p>
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="defaultFormRegisterEmailEx"
                  placeholder="example@example.com"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="defaultFormRegisterPasswordEx"
                  placeholder="min 8 character"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  placeholder="Yy-Mm-Dd"
                  required
                  value={tgl_lahir}
                  onChange={(e) => {
                    setTanggalLahir(e.target.value);
                  }}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  placeholder="Alamat"
                  required
                  value={alamat}
                  onChange={(e) => {
                    setAlamat(e.target.value);
                  }}
                />
                <div className="text-center mt-4" onClick={_register}>
                  <MDBBtn color="primary" type="submit" className="button">
                    Register
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

export default Register;

import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard } from 'mdbreact';
import './style.css';
/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
const Register = () => {
  return (
    <div className="page-register">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <form>
                <p className="h4 text-center mb-4">Register</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
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
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
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
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Jenis Kelamin
                </label>
                <select className="form-control">
                  <option>--</option>
                  <option>Pria</option>
                  <option>Wanita</option>
                </select>
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Alamat
                </label>
                <textarea
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="primary" type="submit">
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

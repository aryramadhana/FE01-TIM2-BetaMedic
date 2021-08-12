/* eslint-disable */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBBtnGroup,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

const Formregis = () => {
  const [tgl_booking, settgl_booking] = useState('');
  const [nama, setNama] = useState('');
  const [nik, setNik] = useState('');
  const [email, setEmail] = useState('');
  const _booking = () => {
    axios
      .post('https://api-betamedic.tokocode.com/api/booking', {
        tgl_booking,
        nama,
        nik,
        email,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <MDBContainer className="formregis">
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                _booking();
              }}
            >
              <p className="h4 text-center mb-4">
                Registrasi Booking Rapid Test
              </p>
              <label htmlFor="defaultFormRegisterDatex" className="grey-text">
                Tanggal
              </label>
              <input
                type="date"
                id="defaultFormRegisterDateEx"
                className="form-control"
                required
                value={tgl_booking}
                onChange={(e) => {
                  settgl_booking(e.target.value);
                }}
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Nama
              </label>
              <input
                type="name"
                id="defaultFormRegisterEmailEx"
                className="form-control"
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
                NIK
              </label>
              <input
                type="nik"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
                required
                value={nik}
                onChange={(e) => {
                  setNik(e.target.value);
                }}
              />
              <br />
              <label htmlFor="defaultFormRegisterPasEx" className="grey-text">
                Email
              </label>
              <input
                type="email"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="text-center md=12 mb-4 mt-4">
                <MDBBtnGroup>
                  <MDBBtn color="primary" onClick={_booking}>
                    submit
                  </MDBBtn>
                  <Link to="/Booking Tes Covid">
                    <MDBBtn color="danger">kembali</MDBBtn>
                  </Link>
                </MDBBtnGroup>
              </div>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Formregis;

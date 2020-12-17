/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBBtnGroup,
} from 'mdbreact';
import { Link } from 'react-router-dom';

const Formregis = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <form>
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
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Nama
              </label>
              <input
                type="name"
                id="defaultFormRegisterEmailEx"
                className="form-control"
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
              />
              <br />
              <label htmlFor="defaultFormRegisterPasEx" className="grey-text">
                Email
              </label>
              <input
                type="email"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
              />
              <div className="text-center md=12 mb-4 mt-4">
                <MDBBtnGroup>
                  <MDBBtn color="default">submit</MDBBtn>
                  <Link to="/RiwayatBook">
                    <MDBBtn color="warning">riwayat</MDBBtn>
                  </Link>
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

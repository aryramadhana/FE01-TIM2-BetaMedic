/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Formregis = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Registrasi Booking Rapid Test</p>
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
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
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
            <div className="text-left mt-4">
              <MDBBtn color="unique" type="submit">
                submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Formregis;

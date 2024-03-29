/* eslint-disable */
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBButton } from 'mdbreact';
import logo from './logo2-192.png';
import './style.css';

const ConfirmEmail = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <form>
              <p className="text-lead">
                Pesanan Anda Sudah Kami Proses Silahkan Cek Email Anda
              </p>
              <br />
              <p className="text-img">
                Terimakasih dan Salam Sehat Dari Kami
                <br />
                <img src={logo} alt="" className="img" />
              </p>
              <a href="/RegistrasiBooking" className="btnwarna">
                Kembali
              </a>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ConfirmEmail;

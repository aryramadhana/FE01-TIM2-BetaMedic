/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from 'mdbreact';
import axios from 'axios';
import './style.css';

const TanyaDokter = () => {
  const [data, setData] = useState([]);
  const getDataDokter = () => {
    axios.get('https://api-betamedic.tokocode.com/api/dokter').then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  };
  useEffect(() => {
    getDataDokter([]);
  });

  return (
    <div className="page-tanyadokter">
      <h1>Tanya Dokter</h1>
      <MDBRow style={{ margin: 'auto' }}>
        {data.map((dokter) => {
          const wa = `https://api.whatsapp.com/send?phone=${dokter.no_hp}&text=Betamedic`;
          return (
            <MDBCol style={{ padding: '15px', display: 'flex' }}>
              <MDBCard style={{ width: '23rem', margin: '0 auto' }}>
                <MDBCardBody>
                  <MDBCardTitle className="">
                    <p className="nama">{dokter.nama}</p>
                  </MDBCardTitle>
                  <MDBCardText>
                    <p className="spesialis">{dokter.jenis_dokter}</p>
                    <p className="alamat">
                      {dokter.tempat_praktek}
                      <br />
                      {dokter.alamat_praktek}
                    </p>
                  </MDBCardText>
                  <a href={wa}>
                    <MDBBtn color="success" className="text-center">
                      Whatsapp
                    </MDBBtn>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default TanyaDokter;

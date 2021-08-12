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
  MDBCardImage,
} from 'mdbreact';
import axios from 'axios';
import './style.css';

const TanyaDokter = () => {
  const [data, setData] = useState([]);
  async function getDataDokter() {
    await axios
      .get('https://api-betamedic.tokocode.com/api/dokter')
      .then((res) => {
        console.log(res);
        setData(res.data.data.data);
      });
  }
  useEffect(() => {
    getDataDokter();
  }, []);

  return (
    <div className="page-tanyadokter">
      <h1>Tanya Dokter</h1>
      <MDBRow style={{ margin: 'auto' }}>
        {data.map((dokter) => {
          const wa = `https://api.whatsapp.com/send?phone=${dokter.no_hp}&text=Betamedic`;
          return (
            <MDBCol style={{ padding: '10px', display: 'flex' }}>
              <MDBCard style={{ width: '15rem', margin: '0 auto' }}>
                <MDBCardBody>
                  <MDBCardImage
                    className="img-thumbnail"
                    className="mh-0.5"
                    src={dokter.foto}
                    waves
                  />
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
                  <MDBCardText className="d-flex justify-content-center">
                    <a href={wa} target="_blank">
                      <MDBBtn
                        color="success"
                        className="justify-content-center"
                      >
                        Whatsapp
                      </MDBBtn>
                    </a>
                  </MDBCardText>
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

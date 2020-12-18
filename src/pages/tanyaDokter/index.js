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
    const url = 'https://try-smart-hospital-be.herokuapp.com/dokter';
    axios.get(url).then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getDataDokter();
  });

  return (
    <div className="d-flex justify-content-center">
      <MDBRow style={{ margin: 'auto' }}>
        {data.map((dokter) => {
          return (
            <MDBCol style={{ padding: '15px', display: 'flex' }}>
              <MDBCard style={{ width: '23rem' }}>
                <MDBCardBody>
                  <MDBCardTitle className="">
                    <p className="nama">{dokter.nama}</p>
                  </MDBCardTitle>
                  <MDBCardText>
                    <p className="spesialis">{dokter.jenisDokter}</p>
                    <p className="alamat">
                      {dokter.tempatPraktek}
                      <br />
                      {dokter.alamatPraktek}
                    </p>
                  </MDBCardText>
                  <MDBBtn color="success" className="text-center">
                    {dokter.telp}
                  </MDBBtn>
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

/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { MDBRow } from 'mdbreact';
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
            <div className="wrapper">
              <div className="cards_wrap">
                <div className="card_item">
                  <div className="card_inner">
                    <div className="card_top">
                      <img src={dokter.foto} />
                    </div>
                    <div className="card_bottom">
                      <div className="card_category">{dokter.nama}</div>
                      <div className="card_info">
                        <p className="tittle">{dokter.tempat_praktek}</p>
                        <p>{dokter.alamat_praktek}</p>
                        <a href={wa}>
                          <button>whatsapp</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default TanyaDokter;

import React from 'react';
import { TableRs } from '../../components';
import './style.css';

const RsTerdekat = () => {
  return (
    <div className="page-rs">
      <h1>Daftar Rumah Sakit</h1>
      <p>Temukan rumah sakit terdekat untuk penanganan lebih cepat</p>
      <TableRs />
    </div>
  );
};

export default RsTerdekat;

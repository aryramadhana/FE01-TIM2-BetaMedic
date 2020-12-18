/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';

export default function Riwayattes() {
  // eslint-disable-next-line no-unused-vars
  const [riwayat, setRiwayat] = useState([]);
  const getRiwayat = () => {
    const url = 'https://try-smart-hospital-be.herokuapp.com/rapidtest';
    axios.get(url).then((response) => {
      setRiwayat(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getRiwayat();
  });
  // eslint-disable-next-line no-unused-vars
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Tanggal',
        field: 'date',
        width: 50,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Date',
        },
      },
      {
        label: 'Nama',
        field: 'name',
        width: 100,
      },
      {
        label: 'NIK',
        field: 'nik',
        width: 50,
      },
      {
        label: 'Email',
        field: 'email',
        width: 100,
      },
    ],
    rows: [
      {
        date: <>{riwayat.bookingDate}</>,
        name: 'Sutrisno',
        nik: '000001',
        email: 'sutrisno123@email.com',
      },
      {
        date: '20/12/2020',
        name: 'Sutarjo',
        nik: '000002',
        email: 'sutaro321@email.com',
      },
    ],
  });
  return (
    <MDBDataTableV5 hover data={datatable} searchTop searchBottom={false} />
  );
}

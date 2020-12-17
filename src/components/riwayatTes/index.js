import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
// import { Link } from 'react-router-dom';

export default function Riwayattes() {
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
        date: '19/12/2020',
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

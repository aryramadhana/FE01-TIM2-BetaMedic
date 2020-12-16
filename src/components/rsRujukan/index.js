import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Rsrujukan() {
  // eslint-disable-next-line no-unused-vars
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Rumah Sakit',
        field: 'name',
        width: 100,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Harga',
        field: 'price',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'RS CIPTO MANGUNKUSUMO',
        price: '150.000',
      },
      {
        name: 'RS BHAYANGKARA',
        price: '155.000',
      },
      {
        name: 'RS PERTAMINA',
        price: '160.000',
      },
      {
        name: 'RSU TARAKAN',
        price: '150.000',
      },
      {
        name: 'GLOBAL AWAL BROS HOSPITAL',
        price: '165.000',
      },
    ],
  });

  return (
    <MDBDataTableV5 hover data={datatable} searchTop searchBottom={false} />
  );
}

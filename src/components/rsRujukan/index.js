import React from 'react';
import { MDBDataTableV5, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

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
      {
        label: 'Action',
        field: 'action',
      },
    ],
    rows: [
      {
        name: 'RS CIPTO MANGUNKUSUMO',
        price: '150.000',
        action: (
          <Link to="/RegistrasiBooking">
            <MDBBtn color="default" rounded size="sm">
              Button
            </MDBBtn>
          </Link>
        ),
      },
      {
        name: 'RS BHAYANGKARA',
        price: '155.000',
        action: (
          <MDBBtn color="default" rounded size="sm">
            Button
          </MDBBtn>
        ),
      },
      {
        name: 'RS PERTAMINA',
        price: '160.000',
        action: (
          <MDBBtn color="default" rounded size="sm">
            Button
          </MDBBtn>
        ),
      },
      {
        name: 'RSU TARAKAN',
        price: '150.000',
        action: (
          <MDBBtn color="default" rounded size="sm">
            Button
          </MDBBtn>
        ),
      },
      {
        name: 'GLOBAL AWAL BROS HOSPITAL',
        price: '165.000',
        action: (
          <MDBBtn color="default" rounded size="sm">
            Button
          </MDBBtn>
        ),
      },
    ],
  });

  return (
    <MDBDataTableV5 hover data={datatable} searchTop searchBottom={false} />
  );
}

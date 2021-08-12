/* eslint-disable  */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';

export default function TableRs() {
  const [rsData, setrsData] = useState([]);
  const getRsData = () => {
    axios
      .get('https://api-betamedic.tokocode.com/api/rumah-sakit')
      .then((response) => {
        console.log(response.data.data);
        setrsData(response.data.data.data);
      });
  };

  useEffect(() => {
    getRsData();
  }),
    [];

  const rsDataReal = [];
  rsData.forEach((rs) => {
    return rsDataReal.push({
      _id: rs._id,
      name: rs.name,
      address: rs.address,
      region: rs.region,
      phone: rs.phone,
      province: rs.province,
    });
  });

  const data = {
    columns: [
      {
        label: 'Nama',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Alamat',
        field: 'address',
        width: 270,
      },
      {
        label: 'Kota',
        field: 'region',
        width: 200,
      },
      {
        label: 'Telepon',
        field: 'phone',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Provinsi',
        field: 'province',
        sort: 'asc',
        width: 150,
      },
    ],
    rows: rsDataReal,
  };

  const [datatable, setDatatable] = useState(data);

  return (
    <>
      <MDBDataTableV5
        responsive
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={data}
        searchTop
        searchBottom={false}
      />
    </>
  );
}

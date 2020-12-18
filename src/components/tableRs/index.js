/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';

export default function TableRs() {
  const [rsData, setrsData] = useState({});

  const getRsData = () => {
    const url = 'https://try-smart-hospital-be.herokuapp.com/hospital/data';
    axios.get(url).then((response) => {
      setrsData(response.data);
    });
  };

  useEffect(() => {
    getRsData();
  });

  const [datatable, setDatatable] = React.useState({
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
    rows: [
      {
        name: 'RS UMUM DAERAH  DR. ZAINOEL ABIDIN',
        address: 'JL. TGK DAUD BEUREUEH, NO. 108 B. ACEH',
        region: 'KOTA BANDA ACEH, ACEH',
        phone: '(0651) 34565',
        province: 'Aceh',
      },
    ],
  });

  return (
    <>
      {rsData.map((rs) => {
        return rs.name;
      })}
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        searchTop
        searchBottom={false}
      />
    </>
  );
}

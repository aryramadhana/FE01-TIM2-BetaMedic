/* eslint-disable  */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';

const TableRs = () => {
  const [rsData, setrsData] = useState([]);
  async function getRsData() {
    await axios
      .get('https://api-betamedic.tokocode.com/api/rumah-sakit')
      .then((res) => {
        console.log(res.data.data.data);
        setrsData(res.data.data.data);
      });
  }

  useEffect(() => {
    getRsData();
  }, []);

  const rsDataReal = [];
  rsData.forEach((rs) => {
    return rsDataReal.push({
      id: rs.id,
      nama: rs.nama,
      alamat: rs.alamat,
      kota: rs.kota,
      no_hp: rs.no_hp,
      provisi: rs.provinsi,
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
        field: 'alamat',
        width: 270,
      },
      {
        label: 'Kota',
        field: 'kota',
        width: 200,
      },
      {
        label: 'Telepon',
        field: 'no_hp',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Provinsi',
        field: 'provinsi',
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
};

export default TableRs;

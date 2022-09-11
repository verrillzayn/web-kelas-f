import React from 'react';
import TableAbsen from './TableAbsen';

import Mahsiswa from '../Mahasiswa.json';
import AccordionAbsen from './AccordionAbsen';

const Absen = () => {
  console.log(Mahsiswa);

  return (
    <>
      <div className="container-content-2">
        <h1 className="layanan-judul">Daftar Hadir</h1>
      </div>
      <div className="container-absen">
        <AccordionAbsen />
      </div>
    </>
  );
};

export default Absen;

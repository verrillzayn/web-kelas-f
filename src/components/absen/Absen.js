import React from 'react';
import AccordionAbsen from './AccordionAbsen';

const Absen = () => {
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

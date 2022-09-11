import React, { useState } from 'react';
import ListModal from './ListModal';

const ListTugas = () => {
  return (
    <>
      <div className="container-content-2">
        <h1 className="layanan-judul">Daftar Tugas</h1>
      </div>
      <div className="container-list-tugas">
        <ListModal />
      </div>
    </>
  );
};

export default ListTugas;

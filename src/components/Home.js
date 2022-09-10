import React from 'react';
import Card from './CardLink';

const Home = () => {
  return (
    <>
      <div className="container-content-2">
        <h1 className="layanan-judul">Layanan</h1>
      </div>
      <div className="container-card">
        <Card link="/list-tugas" text="List tugas" />
        <Card link="/jadwal-kelas" text="Jadwal Kelas" />
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import Card from './CardLink';

const Home = () => {
  return (
    <>
      <div className="container-content-2">
        <h1 className="layanan-judul">Layanan</h1>
      </div>
      <div className="container-card">
        <Card link="/web-kelas-f/list-tugas" text="List tugas" />
        <Card link="/web-kelas-f/jadwal-kelas" text="Jadwal Kelas" />
        <Card link="/web-kelas-f/daftar-hadir" text="Daftar Hadir" />
        <Card link="/web-kelas-f/todo-app" text="Todo App" />
      </div>
    </>
  );
};

export default Home;

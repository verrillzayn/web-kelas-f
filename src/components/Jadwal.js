import React from 'react';
import ReactCarousel from './Carousel';

const Jadwal = () => {
  return (
    <div className="container-jadwal">
      <ReactCarousel
        items={[
          `<div class="kotak-hari ke1">
          <h1 class="hari">Rabu</h1>
          <div class="parent">
            <div class="div1">Jam</div>
            <div class="div2">Matkul</div>
            <div class="div3">Ruang</div>
            <div class="div4">13.00 - 14.00</div>
            <div class="div5">Ulumul Qur'an</div>
            <div class="div6">2.5</div>
            <div class="div7">14.01 - 15.00</div>
            <div class="div8">Ilmu Fiqh</div>
            <div class="div9">2.5</div>
            <div class="div10">15.01 - 16.00</div>
            <div class="div11">Ulumul Hadits</div>
            <div class="div12">2.5</div>
          </div>
        </div>`,
          `<div class="kotak-hari ke2">
          <h1 class="hari">kamis</h1>
          <div class="parent">
            <div class="div1">Jam</div>
            <div class="div2">Matkul</div>
            <div class="div3">Ruang</div>
            <div class="div4">07.00 - 08.00</div>
            <div class="div5">Ilmu Akhlak</div>
            <div class="div6">2.5</div>
            <div class="div7">08.01 - 09.00</div>
            <div class="div8">Bhs.Indonesia</div>
            <div class="div9">2.5</div>
            <div class="div10">09.01 - 10.00</div>
            <div class="div11">Bhs.Arab</div>
            <div class="div12">2.5</div>
          </div>
        </div>`,
          `<div class="kotak-hari ke3">
          <h1 class="hari">Jumat</h1>
          <div class="parent">
            <div class="div1">Jam</div>
            <div class="div2">Matkul</div>
            <div class="div3">Ruang</div>
            <div class="div4">10.00 - 11.00</div>
            <div class="div5">Ilmu Tauhid</div>
            <div class="div6">2.4</div>
            <div class="div7">13.00 - 14.00</div>
            <div class="div8">Ilmu Ekobis</div>
            <div class="div9">2.1</div>
            <div class="div10">14.01 - 15.00</div>
            <div class="div11">Pancasila</div>
            <div class="div12">2.1</div>
            <div class="div13">15.01 - 16.00</div>
            <div class="div14">Bhs.Inggris</div>
            <div class="div15">2.1</div>
          </div>`,
          `<div class="kotak-hari ke4">
          <h1 class="hari">Sabtu</h1>
          <br /><br />
          <h1>LIBURRRR!!</h1>
        </div>`,
          `<div class="kotak-hari ke5">
          <h1 class="hari">Minggu</h1>
          <br /><br />
          <h1>LIBURRRR!!</h1>
        </div>`,
          `<div class="kotak-hari ke6">
        <h1 class="hari">Senin</h1>
        <br /><br />
        <h1>LIBURRRR!!</h1>
      </div>`,
          `<div class="kotak-hari ke7">
      <h1 class="hari">Selasa</h1>
      <br /><br />
      <h1>LIBURRRR!!</h1>
    </div>`,
        ]}
        options={{ infinite: true }}
      />
    </div>
  );
};

export default Jadwal;

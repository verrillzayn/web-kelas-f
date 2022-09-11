import Navigasi from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fancyapps/ui/dist/fancybox.css';
import './App.css';
import './style.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Jadwal from './components/Jadwal';
import ListTugas from './components/ListTugas';
import Absen from './components/absen/Absen';

function App() {
  return (
    <>
      <Navigasi />
      <Content />
      <Routes>
        <Route path="/web-kelas-f/home" element={<Home />} />
        <Route path="/web-kelas-f/jadwal-kelas" element={<Jadwal />} />
        <Route path="/web-kelas-f/list-tugas" element={<ListTugas />} />
        <Route path="/web-kelas-f/daftar-hadir" element={<Absen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

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
import Parenttodo from './components/Parenttodo';

function App() {
  // document.body.style.backgroundColor = 'red';
  return (
    <>
      <Navigasi />
      <Content />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jadwal-kelas" element={<Jadwal />} />
        <Route path="/list-tugas" element={<ListTugas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

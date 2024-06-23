import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Tentang from './component/Tentang';
import HubungiKami from './component/HubungiKami';
import LoginPage from './layouts/Loginpage'; // Pastikan penamaan file sesuai
import Register from './layouts/Register';
import Lupakatasandi from './layouts/Lupakatasandi'; // Mengimpor komponen "Lupa Kata Sandi"
import Destinasi from './layouts/Destinasi';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/hubungi-kami" element={<HubungiKami />} />
        <Route path="/login" element={<LoginPage />} /> {/* Tambahkan Route untuk halaman login */}
        <Route path="/register" element={<Register />} />
        <Route path="/lupa-kata-sandi" element={<Lupakatasandi />} /> {/* Tambahkan Route untuk halaman lupa kata sandi */}
        <Route path="/destinasi" element={<Destinasi />} /> {/* Tambahkan Route untuk halaman lupa kata sandi */}
      </Routes>
    </Router>
  );
}

export default App;

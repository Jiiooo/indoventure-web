import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Menggunakan ikon dari Font Awesome Brands
import { Link } from 'react-router-dom'; // import Link from react-router-dom
import registerImage from "../assets/register.png";
import indoventureLogo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Bagian kiri */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100">
        <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">
            Bergabunglah dengan <br />
            Indoventure dan temukan <br /> wisata impian anda
          </h1>
          <img src={registerImage} alt="Ikon" className="h-120 w-90 mb-4" />
        </div>
      </div>

      {/* Bagian kanan */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white">
        <div className="flex items-center mb-4">
          <img
            src={indoventureLogo}
            alt="Logo Indoventure"
            className="h-15 w-10 mr-2"
          />
          <h2 className="text-xl font-bold">Masuk</h2>
        </div>
        <form className="flex flex-col items-center">
          <input type="text" placeholder="Nama atau Email" className="border rounded-md px-3 py-2 mb-4 w-80" /> {/* Menyesuaikan lebar */}
          <input type="password" placeholder="Kata Sandi" className="border rounded-md px-3 py-2 mb-4 w-80" /> {/* Menyesuaikan lebar */}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Ingatkan saya</label>
          </div>
          <Link to="/lupa-kata-sandi" className="text-blue-500 mb-2">Lupa kata sandi?</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 w-80">Masuk</button> {/* Menyesuaikan lebar */}
        </form>
        <div className="flex flex-col items-center">
          <p>Belum punya akun?</p>
          <Link to="/register" className="text-blue-500 mb-4">Daftar sekarang</Link>
          <p className="mb-2">Masuk dengan</p>
          {/* Menggunakan ikon Google dan Facebook */}
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faGoogle} className="text-blue-500 cursor-pointer" />
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

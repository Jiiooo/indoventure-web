import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.png'; // Ganti dengan path logo Anda
import LoginModal from './LoginModal';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  const isActive = (path) => location.pathname === path;
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register'; // Check for both login and register pages

  return (
    <div>
      {!isAuthPage && (
        <div className="flex flex-row justify-between p-4 md:px-32 px-4 bg-white bg-opacity-90 text-darkbackground">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-8 mr-2" /> {/* Logo */}
            <Link to="/" className="cursor-pointer">
              <span className="text-blue-800 hover:text-blue-500 font-semibold text-2xl">
                Indo
              </span>
              <span className="text-blue-300 hover:text-blue-500 font-semibold text-2xl">
                Venture
              </span>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center gap-6">
            <Link
              to="/"
              className={`hover:text-blue-500 cursor-pointer border-b-2 ${isActive('/') ? 'border-blue-500' : 'border-transparent'}`}
            >
              Beranda
            </Link>
            <Link
              to="/tentang"
              className={`hover:text-blue-500 cursor-pointer border-b-2 ${isActive('/tentang') ? 'border-blue-500' : 'border-transparent'}`}
            >
              Tentang
            </Link>
            <Link
              to="/hubungi-kami"
              className={`hover:text-blue-500 cursor-pointer border-b-2 ${isActive('/hubungi-kami') ? 'border-blue-500' : 'border-transparent'}`}
            >
              Hubungi Kami
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/register" className="hidden lg:flex items-center gap-2 hover:text-blue-500 text-darkbackground py-2 px-4 rounded-2xl">
              Daftar
            </Link>
            <button onClick={handleLoginClick} className="hidden lg:flex items-center gap-2 hover:text-blue-500 bg-blue-200 text-darkbackground py-2 px-4 rounded-2xl">
              Masuk
            </button>
            <div className="flex items-center p-2 lg:hidden" onClick={handleChange}>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      )}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 w-full h-fit transition-transform duration-300 z-50`}>
        <Link
          to="/"
          className={`hover:text-blue-500 cursor-pointer border-b-2 ${isActive('/') ? 'border-blue-500' : 'border-transparent'}`}
        >
          Beranda
        </Link>
        <Link
          to="/tentang"
          className={`hover:text-blue-500 cursor-pointer border-b-2 ${isActive('/tentang') ? 'border-blue-500' : 'border-transparent'}`}
        >
          Tentang
        </Link>
        <Link
          to="/hubungi-kami"
          className={`hover:text-blue-500 cursor-pointer border-b-2 ${isActive('/hubungi-kami') ? 'border-blue-500' : 'border-transparent'}`}
        >
          Hubungi Kami
        </Link>
        <Link to="/register" className="lg:hidden items-center gap hover:text-blue-500 text-darkbackground py-2 px-4 rounded-2xl mt-4">
          Daftar
        </Link>
        <button onClick={handleLoginClick} className="lg:hidden items-center gap hover:text-blue-500 bg-blue-200 text-darkbackground py-2 px-4 rounded-2xl mt-4">
          Masuk
        </button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;

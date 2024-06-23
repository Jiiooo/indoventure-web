import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Add your login logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleCloseModal}>
      <div className="bg-white bg-opacity-90 p-8 rounded-md shadow-md w-96" ref={modalRef}> {/* Adjusted opacity */}
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          &times;
        </button>
        <div className="flex items-center justify-center mb-4">
          <img src="logo.png" alt="Logo" className="h-16 w-12" /> {/* Adjusted logo size */}
        </div>
        <div className="text-center"> {/* Centered text */}
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <div>
              <a href="#" className="text-sm text-blue-500 hover:text-blue-600">Lupa kata sandi?</a>
            </div>
          </div>
          <button type="button" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" onClick={handleSubmit}>
            Login
          </button>
          <div className="mt-2">
            <span className="text-sm">Masuk dengan</span>
          </div>
        </form>
        <div className="flex justify-between mt-2">
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500 cursor-pointer" />
            <FontAwesomeIcon icon={faGoogle} className="text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

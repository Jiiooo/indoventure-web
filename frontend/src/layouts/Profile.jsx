import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full text-sm">
              Edit foto
            </button>
          </div>
          <input
            type="text"
            placeholder="Nama Depan"
            className="border p-2 rounded-lg mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Nama Belakang"
            className="border p-2 rounded-lg mb-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg mb-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg mb-4 w-full"
          />
          <div className="flex justify-between w-full">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Simpan
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

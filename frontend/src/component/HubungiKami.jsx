import React, { useState } from 'react';
import contactBackground from '../assets/contacus.jpg'; // Ganti dengan path gambar latar belakang Anda

const HubungiKami = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Menghentikan aksi bawaan form (mengirim data ke server)
    // Lakukan logika pengiriman formulir ke server di sini (misalnya menggunakan Axios)
    // Setelah berhasil dikirim, tampilkan pop-up sukses
    setShowSuccessPopup(true);
    // Reset formulir jika diperlukan
    // form.reset();
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-5 md:px-32 px-5 min-h-screen"
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-5">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="name">Nama</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md text-darkbackground"
              placeholder="Nama"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md text-darkbackground"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="message">Pesan</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-md text-darkbackground"
              placeholder="Pesan"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Pop-up Sukses */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-green-500">Pesan berhasil terkirim!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HubungiKami;

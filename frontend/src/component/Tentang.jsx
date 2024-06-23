import React from "react";
import backgroundImg from "../assets/2.png"; // Ganti dengan path gambar Anda
import wisataIcon from "../assets/ikon.png"; // Ganti dengan path ikon Anda
import { motion } from "framer-motion";

const Tentang = () => {
  return (
    <div className="text-darkbackground relative">
      {/* Bagian Tentang Indoventure */}
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center h-full p-8">
          <motion.div
            className="w-full md:w-1/2 p-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-5 text-white">
              Tentang Indoventure
            </h2>
            <p className="text-lg text-white">
              Indoventure adalah platform yang menyediakan berbagai layanan
              untuk membantu para petualang dan wisatawan dalam merencanakan
              perjalanan mereka. Dengan berbagai fitur yang inovatif dan tim
              yang berpengalaman, kami bertujuan untuk memberikan pengalaman
              terbaik bagi para pengguna kami.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="bg-white rounded-full p-10 shadow-lg flex justify-center items-center"
              style={{ width: "20rem", height: "20rem" }}
            >
              <img
                src={wisataIcon}
                alt="Wisata Icon"
                className="w-40 h-40 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bagian Fitur Layanan Kami */}
      <div className="h-screen bg-gray-100 relative">
        <div className="absolute inset-0 bg-blue-800 opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <motion.h2
            className="text-4xl font-semibold mb-10 text-blue-700 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Fitur Layanan Kami
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <motion.div
              className="relative bg-blue-700 text-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center hover:bg-blue-800"
              style={{ width: "18rem", height: "18rem" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-3xl font-semibold mb-3 text-center">
                Rekomendasi
              </h3>
              <p className="text-center">
                Menyajikan rekomendasi wisata yang belum anda ketahui.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-blue-700 text-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center hover:bg-blue-800"
              style={{ width: "18rem", height: "18rem" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h3 className="text-3xl font-semibold mb-3 text-center">
                Trending
              </h3>
              <p className="text-center">
                Menyajikan keindahan wisata yang sedang naik daun.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-blue-700 text-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center hover:bg-blue-800"
              style={{ width: "18rem", height: "18rem" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-3xl font-semibold mb-3 text-center">
                Destinasi
              </h3>
              <p className="text-center">
                Anda dapat menambahkan destinasi anda sendiri.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bagian Kenapa Memilih Indoventure */}
      <div className="h-screen bg-white relative">
        <div className="absolute inset-0 bg-blue-600 opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            Mengapa Memilih Indoventure?
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <motion.div
              className="bg-blue-700 text-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center relative"
              style={{ width: "18rem", height: "18rem" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-center">
                Kemudahan Akses
              </h3>
              <p className="text-center">
                Indoventure menyediakan informasi lengkap tentang transportasi,
                akomodasi, dan fasilitas lainnya untuk memudahkan Anda mencapai
                destinasi impian Anda.
              </p>
            </motion.div>
            <motion.div
              className="bg-blue-700 text-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center relative"
              style={{ width: "18rem", height: "18rem" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-center">
                Efisiensi Mencari Wisata
              </h3>
              <p className="text-center">
                Dengan fitur pencarian yang canggih, Anda dapat dengan mudah
                menemukan destinasi wisata yang sesuai dengan minat dan
                preferensi Anda.
              </p>
            </motion.div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Tentang;

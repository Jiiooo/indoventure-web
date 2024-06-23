import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import video1 from "../assets/7.mp4";
import video2 from "../assets/8.mp4";
import video3 from "../assets/9.mp4";
import recoImg1 from "../assets/3.png";
import trendImg1 from "../assets/2.png";
import destImg from "../assets/1.png";

const videos = [video1, video2, video3];

const Destinasi = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setFade(true);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-screen">
        <video
          key={currentVideoIndex}
          autoPlay
          loop
          muted
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div
          className="relative p-5 bg-black bg-opacity-50 h-full flex flex-col justify-center items-start text-left text-white z-10 pl-20"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <h1 className="text-5xl font-bold leading-none">Temukan</h1>
          <h1 className="text-5xl font-bold leading-none">
            Destinasi Impianmu Disini!
          </h1>
          <span className="text-blue-300 hover:text-blue-500 font-semibold text-2xl">
            IndoVenture
          </span>
          <p className="mt-4 text-lg">
            Bersama IndoVenture, bawa impian perjalananmu menjadi kenyataan
          </p>
          <div className="mt-6">
            <Link
              to="recommendationSection"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button
                className="py-3 px-6 bg-brightColor text-white rounded-lg hover:opacity-90"
                onClick={handleRegisterClick}
                style={{ backdropFilter: "blur(1px)" }}
              >
                Daftar sekarang
              </button>
            </Link>
          </div>
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center space-y-4 p-4 z-20"
          style={{ left: "calc(100% - 5rem)" }}
        >
          <Link
            to="recommendationSection"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button
              className="w-32 h-32 bg-center bg-cover text-white rounded-lg opacity-90 hover:opacity-100 transition transform hover:scale-110 duration-300 relative"
              style={{
                backgroundImage: `url(${recoImg1})`,
                marginBottom: "1rem",
                marginTop: "-1rem",
                marginLeft: "-2rem",
              }}
            >
              <span className="relative z-10">Rekomendasi</span>
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
            </button>
          </Link>
          <Link to="trendingSection" spy={true} smooth={true} duration={500}>
            <button
              className="w-32 h-32 bg-center bg-cover text-white rounded-lg opacity-90 hover:opacity-100 transition transform hover:scale-110 duration-300 relative"
              style={{
                backgroundImage: `url(${trendImg1})`,
                marginBottom: "1rem",
                marginTop: "-1rem",
                marginLeft: "-2rem",
              }}
            >
              <span className="relative z-10">Trending</span>
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
            </button>
          </Link>
          <Link to="destinationSection" spy={true} smooth={true} duration={500}>
            <button
              className="w-32 h-32 bg-center bg-cover text-white rounded-lg opacity-90 hover:opacity-100 transition transform hover:scale-110 duration-300 relative"
              style={{
                backgroundImage: `url(${destImg})`,
                marginBottom: "1rem",
                marginTop: "-1rem",
                marginLeft: "-2rem",
              }}
            >
              <span className="relative z-10">Destinasi</span>
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <section className="recommendation-section" id="recommendationSection">
          <h2 className="text-3xl font-semibold mb-4"></h2>
          {/* Tambahkan gambar dan konten rekomendasi di sini */}
        </section>

        <section
          className="destination-form mt-12 text-center"
          id="destinationSection"
        >
          <h2 className="text-3xl font-semibold mb-4">Destinasi</h2>
          <p className="mb-8">
            Tambahkan destinasi wisata yang anda temui dan berbagi dengan kami
            agar banyak orang yang mengetahui beberapa wisata yang menarik dan
            tersembunyi
          </p>
          <form className="space-y-4">
          <div className="form-group flex justify-between">
  <div className="w-1/2 pr-2">
    <label htmlFor="nama-wisata" className="block text-lg font-medium">
      Nama Wisata
    </label>
    <input
      type="text"
      id="nama-wisata"
      name="nama-wisata"
      className="w-full p-2 border border-gray-300 rounded-lg"
      required
    />
  </div>
  <div className="w-1/2 pl-2">
    <label htmlFor="alamat-wisata" className="block text-lg font-medium">
      Masukkan alamat wisata
    </label>
    <input
      type="text"
      id="alamat-wisata"
      name="alamat-wisata"
      className="w-full p-2 border border-gray-300 rounded-lg"
      required
    />
  </div>
</div>
<div className="form-group flex justify-between">
  <div className="w-1/2 pr-2">
    <label htmlFor="detail-wisata" className="block text-lg font-medium">
      Tambahkan detail perjalanan wisata
    </label>
    <textarea
      id="detail-wisata"
      name="detail-wisata"
      className="w-full p-2 border border-gray-300 rounded-lg"
      required
    ></textarea>
  </div>
  <div className="w-1/2 pl-2">
    <label htmlFor="foto-wisata" className="block text-lg font-medium">
      Tambahkan foto/gambar
    </label>
    <div className="flex items-center">
      <input
        type="file"
        id="foto-wisata"
        name="foto-wisata"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <span className="ml-2">Icon Placeholder</span>
    </div>
  </div>
</div>

            <div className="form-buttons flex justify-center">
              <button
                type="reset"
                className="btn-batal bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn-simpan bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Simpan
              </button>
            </div>
          </form>
        </section>
      </div>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Destinasi Wisata. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Destinasi;

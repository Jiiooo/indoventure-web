import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import video1 from "../assets/7.mp4";
import video2 from "../assets/8.mp4";
import video3 from "../assets/9.mp4";
import recoImg1 from "../assets/3.png";
import recoImg2 from "../assets/10.png"; // Different image for recommendations
import recoImg3 from "../assets/kalioyo.jpg"; // Different image for recommendations
import trendImg1 from "../assets/2.png";
import trendImg2 from "../assets/malioboro.jpeg"; // Different image for trending
import trendImg3 from "../assets/alam.jpg"; // Different image for trending
import destImg from "../assets/1.png";
import Chatbot from "./Chatbot"; // Import Chatbot component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const videos = [video1, video2, video3];

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const backgroundColor = "bg-brightColor";
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

  const handleReadMoreClick = () => {
    navigate("/login");
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
                className={`py-3 px-6 ${backgroundColor} text-white rounded-lg hover:opacity-90`}
                style={{ backdropFilter: "blur(1px)" }}
                onClick={() => navigate("/register")}
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
            to=""
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
          <Link to="" spy={true} smooth={true} duration={500}>
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
          <Link to="/destinasi">
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
      {/* Section Rekomendasi */}
      <section id="recommendationSection" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold inline-block">
              <span className="text-darkBlue">Indo</span>
              <span className="text-lightBlue">Venture</span>
            </h2>
          </div>
          <div className="flex justify-center mt-4 mb-6">
            <input
              type="text"
              placeholder="Cari destinasi..."
              className="py-2 px-10 rounded-lg border border-gray-300 text-left"
            />
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 ml-2">
              Search
            </button>
          </div>
          <div className="container mx-auto px-6 text-center">
            <div className="flex overflow-x-auto mt-6 justify-center space-x-4">
              <img
                src={recoImg1}
                alt="Rekomendasi"
                className="h-48 object-cover rounded-lg"
              />
              <img
                src={recoImg2}
                alt="Rekomendasi"
                className="h-48 object-cover rounded-lg"
              />
              <img
                src={recoImg3}
                alt="Rekomendasi"
                className="h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 mt-12">Rekomendasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src={recoImg1}
                alt="Rekomendasi 1"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Heha Sky View</h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleReadMoreClick}
                >
                  Lihat Selengkapnya
                </button>
              </div>
              <p className="text-gray-700">
                Heha Sky View merupakan sebuah destinasi wisata yang terletak di
                kawasan Bandung ....
              </p>
              <div className="flex items-center text-gray-700 mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-500 mr-2"
                />
                <span>Bandung, Indonesia</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src={recoImg2}
                alt="Rekomendasi 2"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Desa Wisata Kalibiru</h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleReadMoreClick}
                >
                  Lihat Selengkapnya
                </button>
              </div>
              <p className="text-gray-700">
                Desa Wisata Kalibiru terletak diatas ketinggian 450 Meter Diatas
                Permukaan Laut (MDPL)....
              </p>
              <div className="flex items-center text-gray-700 mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-500 mr-2"
                />
                <span>Lombok, Indonesia</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src={recoImg3}
                alt="Rekomendasi 3"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Kali Oyo</h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleReadMoreClick}
                >
                  Lihat Selengkapnya
                </button>
              </div>
              <p className="text-gray-700">
                Kali Oyo adalah sungai di Daerah Istimewa Yogyakarta, Indonesia.
                Sungai Oyo berhulu di lereng....
              </p>
              <div className="flex items-center text-gray-700 mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-500 mr-2"
                />
                <span>Bogor, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Trending */}
      <section id="trendingSection" className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Trending</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src={trendImg1}
                alt="Trending 1"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Candi Borobudur </h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleReadMoreClick}
                >
                  Lihat Selengkapnya
                </button>
              </div>
              <p className="text-gray-700">
                Candi Borobudur atau kadang-kadang disebut “Barabudur” adalah
                candi Buddha Mahayana......
              </p>
              <div className="flex items-center text-gray-700 mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-500 mr-2"
                />
                <span>Yogyakarta, Indonesia</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src={trendImg2}
                alt="Trending 2"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Jalan Malioboro</h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleReadMoreClick}
                >
                  Lihat Selengkapnya
                </button>
              </div>
              <p className="text-gray-700">
                Candi Borobudur atau kadang-kadang disebut “Barabudur” adalah
                candi Buddha Mahayana yang berlokasi di dekat kota
              </p>
              <div className="flex items-center text-gray-700 mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-500 mr-2"
                />
                <span>Bali, Indonesia</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300 cursor-pointer">
              <img
                src={trendImg3}
                alt="Trending 3"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Studio Alam Glampong</h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={handleReadMoreClick}
                >
                  Lihat Selengkapnya
                </button>
              </div>
              <p className="text-gray-700">
                wisata buatan yang kini marak dan menjadi hit di Yogyakarta,
                yaitu Studio Alam Gamplong.....
              </p>
              <div className="flex items-center text-gray-700 mt-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-500 mr-2"
                />
                <span>Magelang, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Destinasi Wisata. All rights reserved.</p>
        </div>
        <Chatbot /> {/* Tambahkan komponen Chatbot di sini */}
      </footer>
    </div>
  );
};

export default Home;

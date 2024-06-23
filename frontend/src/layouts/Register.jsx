import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import FontAwesomeIcon
import { faEye, faEyeSlash, faFlag } from "@fortawesome/free-solid-svg-icons"; // import icon yang diinginkan
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"; // import icon yang diinginkan
import registerImage from "../assets/register.png";
import indoventureLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Bagian kiri */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-100 shadow-md rounded-l-lg">
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
          <h2 className="text-xl font-bold">Daftar Akun</h2>
        </div>
        <form className="flex flex-col items-center">
          <div className="grid grid-cols-1 gap-4 w-64">
            <div>
              <input
                type="text"
                placeholder="Nama Depan"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nama Belakang"
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-3 py-2 mb-4 w-64"
            style={{ marginTop: "1rem" }}
          />
          <div className="relative mb-4 w-64">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
              className="border rounded-md px-3 py-2 w-full"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            />
          </div>
          <div className="relative mb-4 w-64">
            <input
              type="text"
              placeholder="Nomor HP"
              className="border rounded-md px-3 py-2 w-full pl-10"
            />
            <FontAwesomeIcon
              icon={faFlag}
              className="absolute left-3 top-3 text-gray-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-md mb-4">
            Daftar
          </button>
        </form>

        <div className="flex justify-start mb-2">
          <p>Sudah punya akun?</p>
          <Link to="/login" className="text-blue-500 ml-1">
            Masuk sekarang
          </Link>
        </div>
        <p className="mb-2">atau masuk dengan</p>
        <div className="flex space-x-4">
          <FontAwesomeIcon
            icon={faGoogle}
            className="text-blue-500 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import maskot from "../../assets/maskot.svg";
import fb from "../../assets/login/fb.svg";
import goggle from "../../assets/login/goggle.svg";
import dc from "../../assets/login/dc.svg";
import github from "../../assets/login/github.svg";
import eye from "../../assets/login/eye.svg";
import eyeHide from "../../assets/login/eyeHide.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Form = () => {
  const judul = "JalanKodeku </>";
  const [isLogin, setisLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [registrationData, setRegistrationData] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = () => {
    setShowPassword(false);
    setisLogin(true);
  };
  const daftarHandler = () => {
    setShowPassword(false);
    setisLogin(false);
  };
  function Person(name, email, pass) {
    this.name = name;
    this.email = email;
    this.pass = pass;
  }

  const person = new Person("Jokotole", "jokotole123@gmail.com", "12345");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };
  const handleLogin = () => {
    const { email, password } = formData;

    if (email === person.email && password === person.pass) {
      alert("Login berhasil");
      navigate("/");
    } else {
      alert("Login gagal. Periksa email dan password.");
    }
  };
  const handleRegistration = () => {
    const isEmailUnique = !dummyData.some((user) => user.email === registrationData.email);

    if (isEmailUnique) {
      dummyData.push(new Person(registrationData.name, registrationData.email, registrationData.password));
      alert("Pendaftaran berhasil");
     
    } else {
      alert("Email sudah digunakan. Silakan gunakan email lain.");
    }
  };
  const dummyData = [
    {
      name: "Jokotole",
      email: "jokotole123@gmail.com",
      pass: "12345",
    },
  ];

  return (
    <div className="text-white flex justify-center  w-full h-full font-Poppins  z-10 items-center lg:px-36  ">
      <div className="h-3/5 md:h-4/5 lg:h-2/4 absolute w-5/6  blur-3xl z-0 ">
        <div className="md:absolute relative w-full h-screen md:h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-3xl md:bottom-0 bottom-48 "></div>
      </div>
      <div className="lg:w-[40rem] w-4/5 md:w-3/5  flex flex-col items-center lg:items-start  z-10 ">
        <h1 className={`text-2xl md:text-4xl lg:text-2xl font-semibold mb-2  `}>{isLogin ? "Selamat datang kembali !" : "Pendaftaran Akun"}</h1>
        <p className="text-lg lg:text-base opacity-70 mb-5">{isLogin ? "Masukkan email dan password kamu untuk login ke JalanKodeku." : "Yuk, daftarkan akunmu sekarang juga !"}</p>
        <div className="lg:w-96  w-full   rounded-3xl ">
          <div className="flex justify-center text-base items-center text-center ">
            <h2 onClick={daftarHandler} className={`w-1/2 rounded-tl-3xl py-3  ${isLogin ? "bg-black bg-opacity-40" : " bg-white bg-opacity-20"}`}>
              Daftar
            </h2>
            <h2 onClick={loginHandler} className={`w-1/2 rounded-tr-3xl py-3 ${isLogin ? "bg-white bg-opacity-20" : "bg-black bg-opacity-40 "}`}>
              Masuk
            </h2>
          </div>
          <form className="px-8 bg-white h-[30rem] lg:h-96 bg-opacity-20 backdrop-blur-lg rounded-b-3xl py-2">
            {isLogin ? (
              <div>
                <div className="mb-2 ">
                  <label className="block text-base mb-1 font-medium ">Email</label>
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-2 py-1 border text-sm lg:text-base md:text-xl text-lg bg-opacity-20 border-opacity-30  bg-white border-white rounded-lg "
                    placeholder="Alamat Email"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="block text-base mb-1 font-medium ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      value={formData.password}
                      onChange={handleInputChange}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className=" w-full px-2 py-1 border text-sm lg:text-base md:text-xl text-lg rounded-lg bg-opacity-20 border-opacity-30  bg-white border-white"
                      placeholder="Password"
                      required
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                      <img src={`${showPassword?eye:eyeHide}`} alt="" />
                    </span>
                  </div>
                </div>
                <div className="mb-[5.9rem] lg:mb-[5.15rem] flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="mr-2 rounded-2xl border  h-5 w-5 " />
                    <label htmlFor="remember" className="text-sm font-medium text-white">
                      Ingat Saya
                    </label>
                  </div>
                  <a href="#" className="text-sm text-white">
                    Lupa Password?
                  </a>
                </div>
                <button type="submit" onClick={handleLogin} className="w-full bg-[#3E43FB] text-base md:text-2xl lg:text-base   text-white  py-1 rounded-xl hover:bg-blue-800">
                  Masuk
                </button>
                <p className="text-sm mt-4 text-center">Atau sambungkan ke</p>
                <div className="flex gap-6 justify-center ">
                  <img  src={fb} alt="" />
                  <img src={goggle} alt="" />
                  <img src={dc} alt="" />
                  <img src={github} alt="" />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-2 ">
                  <label className="block text-base mb-1 font-medium ">Nama Lengkap</label>
                  <input
                    value={registrationData.name}
                    onChange={handleRegistrationInputChange}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-2 py-1 border text-sm lg:text-base md:text-xl text-lg bg-opacity-20 border-opacity-30  bg-white border-white rounded-lg "
                    placeholder="Masukkan Nama Lengkap"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <label className="block text-base mb-1 font-medium ">Email</label>
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-2 py-1 border text-sm lg:text-base md:text-xl text-lg bg-opacity-20 border-opacity-30  bg-white border-white rounded-lg "
                    placeholder="Alamat Email"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="block text-base mb-1 font-medium ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      value={formData.password}
                      onChange={handleInputChange}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className=" w-full px-2 py-1 border text-sm lg:text-base md:text-xl text-lg rounded-lg bg-opacity-20 border-opacity-30  bg-white border-white"
                      placeholder="Password"
                      required
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                    <img src={`${showPassword?eye:eyeHide}`} alt="" />
                    </span>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="mr-2 rounded-2xl border  h-5 w-5 " />
                    <label htmlFor="remember" className="text-sm font-medium text-white">
                      Ingat Saya
                    </label>
                  </div>
                  <a href="#" className="text-sm text-white">
                    Lupa Password?
                  </a>
                </div>
                <button type="submit" onClick={handleRegistration} className="w-full bg-[#3E43FB] text-base   text-white  py-1 rounded-xl hover:bg-blue-800">
                  Daftar
                </button>
                <p className="text-sm mt-4 text-center">Atau sambungkan ke</p>
                <div className="flex gap-6 justify-center ">
                  <img  src={fb} alt="" />
                  <img src={goggle} alt="" />
                  <img src={dc} alt="" />
                  <img src={github} alt="" />
                </div>
                
              </div>
            )}
            <div></div>
          </form>
        </div>
      </div>
      <div className="w-[40rem] lg:block  hidden  pt-16 px-20 py-9 z-10 bg-black bg-opacity-40 rounded-3xl">
        <div className="flex gap-4 ">
          <div className="sm:shadow-2xl shadow-sm object-cover  shadow-black border-t-[1px] border-l-[1px] border-[#5B486E]   backdrop-blur-3xl  p-2 backdrop-brightness-125 rounded-2xl">
            <img className="md:h-7 h-4  relative" draggable="false" src={logo} alt="gagal load" />
          </div>
          <h1 className="text-white  text-2xl font-Sarpanch my-auto">{judul}</h1>
        </div>
        <img src={maskot} draggable="false" className="mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Form;

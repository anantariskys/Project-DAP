import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.svg";
import Footer from "../components/Footer";
const MiniTes = () => {
  const questions = [
    {
      question: "Apa yang dimaskud dengan HTML?",
      options: ["HyperText Markup Language", "High-level Text Manipulation Language", "Hyper Transfer Markup Language", "Hyperlink and Management Language"],
    },
    {
      question: "Soal CSS",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Soal Tailwind",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal TJavascript",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal React",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Apa yang dimaskud dengan HTML?",
      options: ["HyperText Markup Language", "High-level Text Manipulation Language", "Hyper Transfer Markup Language", "Hyperlink and Management Language"],
    },
    {
      question: "Soal CSS",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Soal Tailwind",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal TJavascript",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal React",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Apa yang dimaskud dengan HTML?",
      options: ["HyperText Markup Language", "High-level Text Manipulation Language", "Hyper Transfer Markup Language", "Hyperlink and Management Language"],
    },
    {
      question: "Soal CSS",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Soal Tailwind",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal TJavascript",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal React",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Apa yang dimaskud dengan HTML?",
      options: ["HyperText Markup Language", "High-level Text Manipulation Language", "Hyper Transfer Markup Language", "Hyperlink and Management Language"],
    },
    {
      question: "Soal CSS",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Soal Tailwind",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal TJavascript",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal React",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Apa yang dimaskud dengan HTML?",
      options: ["HyperText Markup Language", "High-level Text Manipulation Language", "Hyper Transfer Markup Language", "Hyperlink and Management Language"],
    },
    {
      question: "Soal CSS",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Soal Tailwind",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal TJavascript",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal React",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Apa yang dimaskud dengan HTML?",
      options: ["HyperText Markup Language", "High-level Text Manipulation Language", "Hyper Transfer Markup Language", "Hyperlink and Management Language"],
    },
    {
      question: "Soal CSS",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
    {
      question: "Soal Tailwind",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal TJavascript",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },

    {
      question: "Soal React",
      options: ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [answers, setAnswers] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const abcd = {
    option: ["A", "B", "C", "D"],
    status: [false, false, false, false],
  };

  const handleAnswerChange = (event, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = abcd.option[optionIndex];
    setAnswers(newAnswers);

    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = abcd.option[optionIndex];
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedQuestion(currentQuestion - 1);
    }
  };
  return (
    <div className={`bg-black h-full ${isStart?'lg:h-screen':'md:h-screen'}  lg:block flex flex-col justify-center gap-y-3 items-center`}>
      {showModal ? (
        <>
          <div
            className="justify-center font-Poppins text-white items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black bg-opacity-75 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Apa kamu yakin?
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-red-500 hover:bg-red-600 font-bold rounded  px-6 py-3 text-sm outline-none  mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Ngga huhuh:(
                  </button>
                  <button
                    className="bg-emerald-500  hover:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow  outline-none  mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {setShowModal(false),setIsStart(true)}}
                  >
                    Yakin !!!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="lg:h-3/4 flex items-center justify-center mx-auto my-auto absolute w-5/6 inset-0 gap  blur-3xl z-0 ">
        <div className="md:absolute relative w-full h-full bg-gradient-to-b from-[#A35ECD] via-[#23016D] to-[#35957E] blur-3xl  "></div>
      </div>
      <div className="h-[60px] md:h-[80px] w-full">
        <Navbar></Navbar>
      </div>
      {isStart ? (
        <div className="flex lg:flex-row flex-col items-center lg:items-stretch  justify-center lg:justify-normal h-4/5 z-10 gap-3 font-Poppins pb-20 lg:pb-0 text-white">
          {/* Section kiri */}
          <div className="lg:w-1/4 w-3/4 px-4 h-full mb-4 z-10 gap-2 ">
            <div className="bg-white bg-opacity-10 px-5 py-2 mb-4 flex flex-col gap-3 rounded-lg border-2 border-white border-opacity-40">
              <div className="flex flex-row md:gap-4 gap-2  ">
                <div className="sm:shadow-2xl shadow-sm shadow-black border-t-[1px] border-l-[1px] border-[#5B486E] backdrop-blur-3xl p-2 backdrop-brightness-100 rounded-2xl">
                  <img className="md:h-10 h-7 relative" src={logo} alt="gagal load" />
                </div>
                <div className="flex flex-col justify-end">
                  <h2 className="text-sm md:text-lg font-bold ">Frontend dasar</h2>
                  <p className="text-xs">{questions.length} Soal</p>
                </div>
              </div>
              <p className="text-sm">Oleh : Jalankodeku</p>
            </div>
            <div className="bg-white bg-opacity-10 lg:h-[27vw] px-5 py-2  rounded-lg border-2 border-white border-opacity-40">
              <div className="w-full  lg:h-[90%] mb-1  lg:overflow-auto">
                <div className=" flex flex-wrap gap-2 ">
                  {questions.map((soal, index) => (
                    <div
                      onClick={() => {
                        setSelectedQuestion(index), setCurrentQuestion(index);
                      }}
                      className={`${
                        selectedQuestion == index ? "border-2 border-blue-600" : "bg-black  bg-opacity-10"
                      } w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11  cursor-pointer   border-2 flex justify-center items-center border-white border-opacity-40 rounded-lg`}
                      key={index}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
              <button className="py-1 px-4 bg-[#7335f7] text-white rounded-lg hover:bg-[#23016D] duration-200 ease-in-out">Kumpulkan</button>
            </div>
          </div>

          {/* Section Kanan */}
          <div className="w-3/4 p-4 bg-black bg-opacity-20  z-10 ">
            <div className="mb-4">
              <p className="text-sm ">
                Pertanyaan {currentQuestion + 1} dari {questions.length} :
              </p>
              <h2 className="text-lg md:text-3xl text-center mt-10 font-bold mb-2">{questions[currentQuestion].question}</h2>
              <div className="flex flex-col gap-y-3 mt-5">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`w-[95%] mx-auto flex text-sm md:text-2xl py-3 px-5 bg-opacity-10 rounded-md items-center ${selectedOptions[currentQuestion] === abcd.option[index] ? "bg-blue-600 border-2 border-blue-600 " : "bg-white "}`}
                    onClick={(event) => handleAnswerChange(event, index)}
                  >
                    <div
                      className={`h-10 w-10  flex justify-center items-center border-2 border-white border-opacity-20 rounded-md  ${
                        selectedOptions[currentQuestion] === abcd.option[index] ? "bg-blue-600 border-2 border-blue-600 " : "bg-black bg-opacity-20 "
                      }`}
                    >
                      {abcd.option[index]}
                    </div>
                    <p className="ml-2">{option}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between z-10">
              <button className="bg-[#A35ECD] hover:bg-[#6d3f8a] duration-200 ease-in-out text-white px-4 py-2 rounded" onClick={handlePrev}>
                Kembali
              </button>
              <button className="bg-[#A35ECD] hover:bg-[#6d3f8a] duration-200 ease-in-out  text-white px-4 py-2 rounded" onClick={handleNext}>
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[91vh] md:h-[91vh] lg:h-4/5 z-10 flex flex-col  justify-center items-center ">
          <div className="w-3/4 lg:w-2/4 h-[130vw]  md:h-96 bg-black bg-opacity-40 border-2 border-[#42235F] z-10 rounded-xl">
            <div className="md:h-1/5 h-[10%] w-full font-Poppins text-white relative bg-[#42235F] bg-opacity-50 rounded-t-xl flex justify-center items-center ">
              <div className="absolute left-4 flex gap-1">
                <div className="h-[1.5vw] w-[1.5vw] rounded-full bg-[#FF0000]"></div>
                <div className="h-[1.5vw] w-[1.5vw] rounded-full bg-[#00FF0A]"></div>
                <div className="h-[1.5vw] w-[1.5vw] rounded-full bg-[#000AFF]"></div>
              </div>
              <h2 className="text-xl md:text-4xl font-extrabold">MINI TES</h2>
            </div>
            <div className="flex flex-col md:flex-row w-full px-4 text-white">
              <div className="md:w-2/5 flex flex-col">
                <div className="bg-[#42235F]  mt-3 bg-opacity-30 px-3 py-2 mb-3 flex flex-col gap-3 rounded-lg border-2 border-[#42235F] ">
                  <div className="flex flex-row md:gap-3 gap-2  ">
                    <div className="sm:shadow-2xl shadow-sm shadow-black border-t-[1px] border-l-[1px] border-[#5B486E] backdrop-blur-3xl  p-1 md:p-2 backdrop-brightness-100 rounded-lg md:rounded-2xl">
                      <img className="md:h-10 h-5 relative" src={logo} alt="gagal load" />
                    </div>
                    <div className="flex flex-col justify-end">
                      <h2 className="text-sm md:text-base font-bold ">Frontend dasar</h2>
                      <p className="text-[8px] md:text-xs">{questions.length} Soal</p>
                    </div>
                  </div>
                  <p className="text-sm">Oleh : Jalankodeku</p>
                </div>
                <div className="w-full flex flex-col items-center pb-3 md:h-40 bg-[#312840] bg-opacity-50 border-2 border-[#42235F] rounded-lg">
                  <div className="md:h-1/5 w-full font-Poppins text-white relative bg-[#42235F] bg-opacity-50 rounded-t-xl flex justify-start items-center ">
                    <h2 className="text-sm md:text-base px-2 font-extrabold">Catatan :</h2>
                  </div>
                  <ul className="w-full list-disc px-8 mt-1 text-[10px] lg:text-xs">
                    <li>Berdoa lah sebelum memulai</li>
                    <li>Barang siapa yang menggunakan chatgpt haram hukumnya</li>
                    <li>Jaga kesehatan, jangan lupa sarapan</li>
                  </ul>
                  <button className="w-[85%] mt-2 hover:bg-[#334286] bg-[#4256AC] duration-200 ease-in-out text-base px-1 rounded-lg">Tanya forum</button>
                </div>
              </div>
              <div className="md:w-3/5 flex flex-col gap-1 mt-2 md:mt-0 md:gap-3 justify-center items-center">
                <button onClick={() => setShowModal(true)}  className="w-[85%]  text-base md:text-2xl duration-300 ease-in-out hover:bg-[#359b79] rounded-lg py-1 border-b-2 border-[#00A06A] bg-[#00C985]">Mulai</button>
                <button className="w-[85%]  text-base md:text-2xl duration-300 ease-in-out hover:bg-[#7246a1] rounded-lg py-1 border-b-2 border-[#6C4298] bg-[#8854C0]">Papan Peringkat</button>
                <button className="w-[85%]  text-base md:text-2xl duration-300 ease-in-out hover:bg-[#7246a1] rounded-lg py-1 border-b-2 border-[#6C4298] bg-[#8854C0]">Kisi Kisi</button>
              </div>
            </div>
          </div>
        </div>
      )}
         
    </div>
  );
};

export default MiniTes;

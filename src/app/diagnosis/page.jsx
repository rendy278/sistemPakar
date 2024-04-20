"use client";
import React, { useState } from "react";
import { questions } from "@/constants/questions";
import Title from "@/components/Title";

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [diagnosis, setDiagnosis] = useState(null);
  const [error, setError] = useState("");
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);

  const handleAnswerChange = (key, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [key]: value }));
    //rest parameter memungkinkan sebuah fungsi untuk menerima sejumlah
    //variabel argumen sebagai array. Ini memungkinkan kita untuk menangani
    //sejumlah argumen yang tidak terbatas pada saat fungsi dipanggil.
    //Rest parameter ditandai dengan tanda titik tiga ( ... ) diikuti oleh
    //nama parameter dalam definisi fungsi.
    setError("");
  };

  const handleNext = () => {
    const currentKey = questions[currentQuestionIndex].key;
    if (!answers[currentKey]) {
      setError("Silakan isi jawaban.");
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setConfirmationVisible(false);
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setConfirmationVisible(false);
    setResultVisible(false);
  };

  const calculateResult = () => {
    const sum = Object.values(answers).reduce((acc, curr) => {
      if (curr === "Ya") return acc + 1;
      if (curr === "Tidak Yakin") return acc + 0.5;
      return acc;
    }, 0);

    return sum > 10
      ? "Anda mengalami gejala yang mengindikasikan kemungkinan penyakit kanker. Segera konsultasikan dengan dokter untuk diagnosis dan perawatan lebih lanjut."
      : "Anda tidak mengalami gejala yang mengindikasikan penyakit kanker. Tetaplah memperhatikan kesehatan Anda secara umum.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateResult();
    setDiagnosis(result);
    setResultVisible(true);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setDiagnosis(null);
    setError("");
    setResultVisible(false);
  };

  return (
    <section className="mx-auto px-5 py-5">
      <div className="flex flex-col h-screen justify-center gap-4 items-center">
        <Title title="Diagnosis Penyakit Kanker" />
        <p className="text-red-500 font-bold text-center text-xl">
          Ayo Cari Tahu Apakah Ada Penyakit Kanker Pada Tubuh Anda atau tidak
          dengan mengisi Kuis di bawah ini
        </p>
        <form onSubmit={handleSubmit} className="max-w-full mx-auto">
          {currentQuestionIndex < questions.length ? (
            <>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-semibold text-center">
                  {questions[currentQuestionIndex].text}
                </label>
                <div className="flex mt-4 justify-center">
                  {["Ya", "Tidak", "Mungkin"].map((answer) => (
                    <button
                      key={answer}
                      type="button"
                      onClick={() => {
                        handleAnswerChange(
                          questions[currentQuestionIndex].key,
                          answer
                        );
                        if (answer === "Mungkin") setConfirmationVisible(true);
                        else setConfirmationVisible(false);
                      }}
                      className={`bg-red-500 text-white px-4 py-2 rounded mr-4 ${
                        answers[questions[currentQuestionIndex].key] ===
                          answer && "bg-red-600"
                      }`}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
              <div className="flex justify-center gap-4">
                {currentQuestionIndex > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Kembali
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  {currentQuestionIndex === questions.length - 1
                    ? "Selesai"
                    : "Lanjut"}
                </button>
              </div>
              <div className="mt-4 font-bold">
                Soal {currentQuestionIndex + 1} dari {questions.length} soal
              </div>
            </>
          ) : (
            <div className="mx-auto items-center">
              <div className="mt-8">
                {resultVisible && (
                  <p className="font-bold text-red-500 flex flex-col text-lg text-center gap-3">
                    Hasil Diagnosis: <br />
                    <span className="text-gray-800">{diagnosis}</span>
                  </p>
                )}
              </div>
              {resultVisible && (
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                  >
                    Reset
                  </button>
                </div>
              )}
              {!resultVisible && (
                <div className="py-3">
                  <p>Apakah Anda yakin dengan jawaban Anda?</p>
                  <div className="flex justify-between mx-auto items-center ">
                    <button
                      type="submit"
                      className="bg-red-500 text-white btn-md hover:bg-red-600 mt-4 rounded-md"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={handleBack}
                      className="bg-gray-500 text-white btn-md mt-4 rounded-md"
                    >
                      Kembali
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Page;

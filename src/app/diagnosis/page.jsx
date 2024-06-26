"use client";
import React, { useState } from "react";
import { questions } from "@/constants/questions";
import { treatment } from "@/constants/treatment";
import { Solusi } from "@/constants/article";
import Title from "@/components/Title";

const Page = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [diagnosis, setDiagnosis] = useState(null);
  const [error, setError] = useState("");
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (id, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [id]: value }));
    setError("");
  };

  const handleNext = () => {
    const currentQuestionId = questions[currentQuestionIndex].id;
    if (!answers[currentQuestionId]) {
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
      if (curr === "Mungkin") return acc + 0.5;
      return acc;
    }, 0);

    return sum > 10 ? (
      <div className="h-96 overflow-auto lg:h-60 lg:overflow-auto ">
        <p className="font-bold text-base dark:text-slate-100">
          Anda mengalami gejala yang mengindikasikan kemungkinan penyakit
          kanker. Segera konsultasikan dengan dokter untuk diagnosis dan
          perawatan lebih lanjut.
        </p>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Rekomendasi Perawatan:</h2>
          <div className="text-start ml-5 mt-2 ">
            {treatment.map((item) => (
              <ul key={item.id}>
                <span className="flex gap-3">
                  {item.id} {item.title}
                </span>
                <li>{item.description}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div className="h-96 overflow-auto  lg:h-60 lg:overflow-auto ">
        <p className="font-bold text-green-500 dark:text-green-400">
          Anda tidak mengalami gejala yang mengindikasikan penyakit kanker.
          Tetaplah memperhatikan kesehatan Anda secara umum.
        </p>
        <div className="mt-4">
          <h2 className="text-lg font-bold">
            Solusi Pencegahan Penyakit Kanker:
          </h2>
          <div className="text-start ml-5 mt-2 ">
            {Solusi.map((item, index) => (
              <ul key={index}>
                <span className="flex gap-3">
                  {item.id} {item.title}
                </span>
                <li>{item.solusi}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const result = calculateResult();
      setDiagnosis(result);
      setResultVisible(true);
      setLoading(false);
    }, 3000);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setDiagnosis(null);
    setError("");
    setResultVisible(false);
  };

  return (
    <section className="mx-auto h-fit lg:h-screen md:h-screen flex items-center justify-center px-5 ">
      <div className="flex flex-col h-fit my-40 lg:my-20 dark:text-slate-100 justify-center gap-4 items-center">
        <Title title="Diagnosis Penyakit Kanker" />
        <p className="text-red-500 dark:text-red-400 font-bold text-center text-xl">
          Ayo Cari Tahu Apakah Ada Penyakit Kanker Pada Tubuh Anda atau tidak
          dengan mengisi Kuis di bawah ini
        </p>
        <form onSubmit={handleSubmit} className="max-w-full mx-auto">
          {currentQuestionIndex < questions.length ? (
            <>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-semibold text-center dark:text-white">
                  {questions[currentQuestionIndex].text}
                </label>
                <div className="flex mt-4 justify-center">
                  {["Ya", "Tidak", "Mungkin"].map((answer) => (
                    <button
                      key={answer}
                      type="button"
                      onClick={() => {
                        handleAnswerChange(
                          questions[currentQuestionIndex].id,
                          answer
                        );
                        if (answer === "Mungkin") setConfirmationVisible(true);
                        else setConfirmationVisible(false);
                      }}
                      className={`bg-red-500 text-white px-4 py-2 rounded mr-4 ${
                        answers[questions[currentQuestionIndex].id] ===
                          answer && "bg-red-600"
                      }`}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
                {error && (
                  <p className="text-red-500 dark:text-red-400 font-bold mt-2">
                    {error}
                  </p>
                )}
              </div>
              <div className="flex justify-center gap-4">
                {currentQuestionIndex > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-500 dark:bg-slate-600 text-white px-4 py-2 rounded"
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
            <div className="mx-auto h-full items-center">
              <div className="mt-8">
                {loading ? (
                  <div className="flex justify-center">
                    <svg
                      className="animate-spin h-20 w-20 text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  <>
                    {resultVisible && (
                      <p className="font-bold text-red-500 dark:text-red-400 flex flex-col text-lg text-center gap-3">
                        Hasil Diagnosis: <br />
                        <span className="text-gray-800  dark:text-gray-100">
                          {diagnosis}
                        </span>
                      </p>
                    )}
                    {resultVisible && (
                      <div className="flex justify-center gap-4">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                        >
                          Reset
                        </button>
                      </div>
                    )}
                    {!resultVisible && (
                      <div className="py-3">
                        <p>Apakah Anda yakin dengan jawaban Anda?</p>
                        <div className="flex justify-between mx-auto items-center">
                          <button
                            type="submit"
                            className="bg-red-500 text-white btn-md hover:bg-red-600 mt-4 rounded-md"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-500 dark:bg-slate-600 text-white btn-md mt-4 rounded-md"
                          >
                            Kembali
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Page;

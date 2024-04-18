import React from "react";

const Marquee = () => {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      className="bg-red-500 p-4  text-white font-bold"
    >
      <div className="flex items-center w-full  gap-3">
        <h1>
          Website ini dibuat oleh kelompok 1 yang beranggotakan 10 orang yang
          ber anggotakan{" "}
        </h1>
        <ol className="flex gap-3">
          <li>Filbert Maheswara</li>
          <li>Muhammad Prama Maulana</li>
          <li>Bintang Nugroho</li>
          <li>Aditya Dharma</li>
          <li>Dheny Puji Laksono</li>
          <li>Faisal</li>
          <li>Rendy</li>
          <li>Muhammad Rizki Ade Saputra</li>
          <li>Sanu</li>
          <li>Dinu</li>
        </ol>
      </div>
    </marquee>
  );
};

export default Marquee;

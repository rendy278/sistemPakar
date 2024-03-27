import React from "react";
import Image from "next/image";
import HeroImg from "@/images/hero.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="py-14 px-6 mx-auto bg-white">
      <div className="flex lg:flex-row flex-col-reverse md:flex-row w-full  gap-4 items-center justify-between">
        <div className="head-left w-full flex flex-col gap-3 justify-start ">
          <h1 className="text-lg font-bold text-red-500">Sistem Pakar</h1>
          <h1 className="lg:text-3xl text-2xl font-semibold">
            {" "}
            Diagnosa Penyakit Kanker
          </h1>
          <h1 className="lg:text-2xl text-xl font-semibold">
            Memakai Metode Forward Chaining
          </h1>
          <p className="text-red-500 font-bold">
            Ayo cari tahu apakah kamu ada penyakit kanker atau tidak ?
          </p>
          <button className="btn-md w-40 hover:scale-90 transition-all duration-150 ease-in font-semibold bg-red-500 text-white rounded-md">
            <Link href="/diagnosis">Mulai Diagnosis</Link>
          </button>
        </div>
        <div className="head-right w-full flex lg:justify-end justify-center">
          <Image
            src={HeroImg}
            width={600}
            height={600}
            className="lg:w-[500px] lg:h-[500px] w-80 h-80 md:w-96 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

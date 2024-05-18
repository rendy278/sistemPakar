import React from "react";
import Image from "next/image";
import AboutImage from "@/images/keluarga.png";
import Title from "@/components/Title";
const page = () => {
  return (
    <section className="mx-auto pt-20 pb-5 px-5">
      <div className="flex h-full md:h-screen lg:flex-row flex-col-reverse md:flex-row w-full  gap-4 items-center justify-between">
        <div className="w-full dark:text-slate-100 flex flex-col gap-3 justify-start">
          <Title title="Tentang Kami" />
          <p>
            Website ini dibuat untuk bertujuan mendiagnosis gejala penyakit
            kanker di dalam tubuh dan ayo mari kita hidup sehat dari sekarang
            karena mencegah lebih baik dari pada mengobati
          </p>
          <p>
            Website sistem pakar yang kami buat menggunakan metode forward
            chaining, sistem metode forward chaining ini digunakan untuk
            mengambil keputusan atau menyimpulkan informasi berdasarkan
            aturan-aturan yang telah ditentukan sebelumnya. Metode ini sering
            digunakan dalam bidang kecerdasan buatan, terutama dalam sistem
            berbasis pengetahuan.
          </p>
          <p>
            mengambil keputusan atau menyimpulkan informasi berdasarkan
            aturan-aturan yang telah ditentukan sebelumnya. Metode ini sering
            digunakan dalam bidang kecerdasan buatan, terutama dalam sistem
            berbasis pengetahuan.
          </p>
          <h1 className="text-lg font-bold text-red-500 dark:text-red-400">
            Website ini dibuat menggunakan : React js, Next Js dan Tailwind Css
          </h1>
        </div>
        <div className="head-right w-full flex lg:justify-end mt-3 justify-center">
          <Image
            src={AboutImage}
            width={600}
            height={600}
            className="lg:w-[500px] lg:h-[500px] w-80 h-80 md:w-96 md:h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default page;

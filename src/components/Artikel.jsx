import Image from "next/image";
import WhatsThat from "@/images/apaitu.png";
import Title from "./Title";
const Artikel = () => {
  return (
    <section className="py-10 px-5">
      <div className="flex lg:flex-row md:flex-row flex-col w-full items-center justify-between gap-4">
        <div className="left">
          <div className="title text-3xl underline font-bold text-red-500">
            <Title title="Apa Itu Penyakit Kanker ?" />
          </div>
          <article className="flex lg:text-xl md:text-sm text-base flex-col gap-3 mt-4">
            <p>
              Kanker adalah kondisi di mana sel-sel tubuh tumbuh secara tidak
              terkendali dan berkembang secara abnormal. Sel-sel kanker dapat
              menyerang dan merusak jaringan dan organ di sekitarnya. Ada
              berbagai jenis kanker yang dapat mempengaruhi berbagai bagian
              tubuh, termasuk kulit, paru-paru, payudara, prostat, usus, dan
              banyak lagi.
            </p>
            <p>
              Penyebab kanker bisa bermacam-macam, tetapi beberapa faktor risiko
              yang umum termasuk paparan zat-zat karsinogenik, seperti asap
              rokok, radiasi, polusi lingkungan, genetika, dan gaya hidup yang
              tidak sehat seperti kebiasaan makan yang buruk atau kurangnya
              aktivitas fisik.
            </p>
            <p>
              Pengobatan kanker dapat melibatkan berbagai pendekatan, termasuk
              pembedahan, kemoterapi, radioterapi, terapi target, dan
              imunoterapi, tergantung pada jenis kanker, tingkat keparahan, dan
              faktor-faktor lainnya. Penting untuk mendeteksi kanker sesegera
              mungkin untuk meningkatkan peluang kesembuhan dan memperbaiki
              prognosis. Ini bisa dilakukan melalui skrining berkala dan
              konsultasi medis rutin.
            </p>
          </article>
        </div>
        <Image
          src={WhatsThat}
          width={600}
          height={600}
          className="lg:w-[500px] flex lg:h-[500px] w-80 h-80 md:w-96 md:h-96 object-contain"
        />
      </div>
    </section>
  );
};

export default Artikel;

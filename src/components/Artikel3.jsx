import React from "react";
import Title from "./Title";
import { Gejala } from "@/constants/article";
const Artikel3 = () => {
  return (
    <section className="py-10 px-5">
      <div className="flex flex-col w-full items-center justify-start gap-4">
        <div className="left">
          <Title title="Gejala gejala yang menyebabkan kanker!!" />
          <article className="flex lg:text-xl md:text-sm text-base flex-col gap-3 mt-4">
            {Gejala.map((item) => (
              <div key={item.id} className="gejala-item">
                <h2 className="gejala-title font-bold">{`${item.id} ${item.title}`}</h2>
                <p className="gejala-gejala">{item.gejala}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Artikel3;

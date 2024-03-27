import React from "react";
import Title from "./Title";
import { Solusi } from "@/constants/article";
const Artikel3 = () => {
  return (
    <section className="py-10 px-5">
      <div className="flex flex-col w-full items-center justify-start gap-4">
        <div className="left">
          <Title title="Solusi Untuk Mencegah Kanker !!" />
          <article className="flex lg:text-xl md:text-sm text-base flex-col gap-3 mt-4">
            {Solusi.map((item) => (
              <div key={item.id} className="solusi-item">
                <h2 className="solusi-title font-bold">{`${item.id} ${item.title}`}</h2>
                <p className="solusi-solusi">{item.solusi}</p>
              </div>
            ))}
            <div className="solusi-item">
              <h2 className="solusi-title font-bold">Kesimpulan:</h2>
              <p className="solusi-solusi">{Solusi[10].kesimpulan}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Artikel3;

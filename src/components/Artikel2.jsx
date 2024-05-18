import React from "react";
import Title from "./Title";
import { Kankerlist } from "@/constants/article";

const Artikel2 = () => {
  return (
    <section className="py-10 px-5">
      <div className="flex lg:flex-row md:flex-row flex-col w-full items-center justify-start gap-4">
        <div className="left">
          <div className="title underline text-3xl font-bold ">
            <Title title="Macam Macam Penyakit Kanker !" />
          </div>
          <article className="flex lg:text-xl md:text-sm text-base dark:text-slate-100 flex-col gap-3 mt-4">
            {Kankerlist.map((item) => (
              <div key={item.id} className="kanker-item">
                <h2 className="kanker-title font-bold">
                  {`${item.id} ${item.title}`}
                </h2>
                <p className="kanker-penyebab">{item.penyebab}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Artikel2;

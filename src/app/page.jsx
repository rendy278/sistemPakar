import Artikel from "@/components/Artikel";
import Artikel2 from "@/components/Artikel2";
import Artikel3 from "@/components/Artikel3";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <Artikel />
      <Artikel2 />
      <Artikel3 />
    </main>
  );
};

export default page;

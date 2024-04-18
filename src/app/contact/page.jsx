"use client";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Swal from "sweetalert2";

const Page = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formValues;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Tolong isi semua kolom formulir!",
        timer: 2000,
        timerProgressBar: true,
      });
      return;
    }

    const whatsappMessage = `Nama: ${name}%0AEmail: ${email}%0AGejala: ${subject}%0APesan: ${message}`;

    const whatsappURL = `https://wa.me/+6283122895534?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    Swal.fire({
      icon: "success",
      title: "Formulir terkirim dengan sukses!",
      timer: 2000,
      timerProgressBar: true,
    });

    // Reset nilai formulir setelah pengiriman berhasil
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <section className="sm:mx-auto sm:w-full sm:max-w-[1200px] py-20 px-3">
      <div className="h-full md:h-screen flex-col px-4 py-6  shadow-lg rounded-md sm:px-10">
        <div className="mb-10 text-gray-900 w-full">
          <h1 className="text-xl lg:text-3xl md:text-2xl  font-bold ">
            Contact us!
          </h1>
          <span>Untuk layanan lebih lanjut tolong hubungi kami</span>
          <div className="flex gap-3 w-full items-center mt-2 text-gray-100 [&>*]:bg-red-500">
            <a className="cursor-pointer  p-2 rounded-full">
              <FaInstagram />
            </a>
            <a className="cursor-pointer  p-2 rounded-full">
              <FaFacebook />
            </a>
            <a className="cursor-pointer  p-2 rounded-full">
              <FaWhatsapp />
            </a>
            <a className="cursor-pointer  p-2 rounded-full">
              <BsTwitterX />
            </a>
          </div>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="flex gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              className=" w-full rounded-md border-0  shadow-sm   placeholder:text-gray-400 p-2 focus:outline-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formValues.email}
              onChange={handleChange}
              className=" w-full rounded-md border-0  shadow-sm   placeholder:text-gray-400 p-2 focus:outline-red-500"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formValues.subject}
            onChange={handleChange}
            className=" w-full rounded-md border-0  shadow-sm   placeholder:text-gray-400 p-2 focus:outline-red-500"
          />
          <textarea
            name="message"
            className=" w-full rounded-md border-0  shadow-sm   placeholder:text-gray-400 p-2 focus:outline-red-500"
            placeholder="Your Message"
            style={{ resize: "none" }}
            cols={5}
            rows={10}
            value={formValues.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-1/2 bg-red-500 p-2 rounded-md font-bold text-gray-50 shadow-lg hover:bg-red-600 duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;

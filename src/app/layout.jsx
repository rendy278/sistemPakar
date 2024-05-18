import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "Diagnosa penyakit kanker",
  description: "sistem pakar",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-100 overflow-x-hidden dark:bg-slate-500`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

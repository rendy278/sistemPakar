"use client";
import Link from "next/link";
import { Links } from "../constants/links";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Mobilemenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <div className="mt-2 text-red-500 dark:text-red-400">
      <label className="swap swap-rotate md:hidden">
        <input
          type="checkbox"
          onClick={mobileMenuHandler}
          checked={openMobileMenu ? false : true}
        />
        <FaBarsStaggered className="swap-on fill-current w-5 h-5" />
        <MdOutlineClose className="swap-off fill-current w-5 h-5" />
      </label>

      {openMobileMenu && (
        <div className="mobile-menu">
          {Links.map((link, index) => (
            <Link href={link.route} key={index} onClick={closeMobileMenu}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mobilemenu;

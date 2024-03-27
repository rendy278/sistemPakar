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
  return (
    <div>
      <label className="swap swap-rotate md:hidden">
        <input
          type="checkbox"
          onClick={mobileMenuHandler}
          checked={openMobileMenu ? false : true}
        />
        <FaBarsStaggered className=" swap-on fill-current w-7 h-7" />
        <MdOutlineClose className=" swap-off fill-current w-7 h-7" />
      </label>

      {openMobileMenu ? (
        <div className="mobile-menu ">
          {Links.map((link, index) => (
            <Link href={link.route}>{link.label}</Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Mobilemenu;

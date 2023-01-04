import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/img/naijakid-logo.PNG";
import { navbarElementsOne } from "./navBarElements";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-RfWhite drop-shadow ">
      <div className="flex items-center justify-between px-8 py-2">
        <img src={logoImage} alt="" width={"60px"} />
        <div className="flex items-center space-x-4 text-RfGray font-bold text-sm hidden md:block">
          {navbarElementsOne.map((items, uid) => (
            <Link to={items.url} className="hover:text-RfOrange" key={uid}>
              {items.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <FaBars className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

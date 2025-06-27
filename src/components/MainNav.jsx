import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLink";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    if (window.innerWidth <= 700) {
      setIsOpen((prevOpen) => !prevOpen);
    }
  }

  return (
    <nav className="fixed z-10 w-full bg-white mx-auto  p-4  top-0 ">
      <button className="md:hidden block" onClick={handleToggleMenu}>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-6 justify-start">
          <NavLinks />
        </div>
      )}

      <div className="hidden md:flex mx-auto gap-6 justify-center">
        <NavLinks/>
      </div>
    </nav>
  );
}

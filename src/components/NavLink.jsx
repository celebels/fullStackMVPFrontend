import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          ` ${isActive ? "active" : "deactive"}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink  className={({ isActive }) =>
          ` ${isActive ? "active" : "deactive"}`
        } to="servicos">Servicos</NavLink>
      <NavLink  className={({ isActive }) =>
          ` ${isActive ? "active" : "deactive"}`
        } to="agendamento">Agendamento</NavLink>
    </>
  );
}

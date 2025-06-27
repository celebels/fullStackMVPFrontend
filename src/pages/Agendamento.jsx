import React from "react";
import CalForm from "../components/CalForm";
import LoadSpin from "../components/LoadSpin";

export default function Agendamento() {
  return (
    <div className="flex md:flex-row justify-center items-center mt-12 pt-24 md:mt-24 md:pt-24">
      <CalForm />
     
      <div className="  -z-10 absolute md:w-[50%] md:translate-x-150">
        <img src="../public/calendario.png" alt="" />
      </div>
    </div>
  );
}


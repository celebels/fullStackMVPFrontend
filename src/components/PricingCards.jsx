import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PricingCards() {
  const navigate = useNavigate();
  const [card, setCard] = useState({
    cardChosen: localStorage.getItem("selectedCard")||"",
  });

  function toggleSelectedCard(e) {
    const selectedCard = e.target.dataset.value;

    localStorage.setItem("selectedCard",selectedCard)
  

    navigate(`/servicos/${e.target.dataset.value}`)
    
  }
  return (
    <div className=" bg-gradient-to-r text-sm mx-auto  py-24 from-[#F28CC1]/60 to-[#8E70B7]/60  w-[100%] rounded-2xl ">
      <div className="flex flex-col md:flex-row mx-8  md:mx-0 justify-center">
        <div
          onClick={toggleSelectedCard}
          data-value="premium"
          className={`flex flex-col w-[25%] py-12 justify-center items-center gap-4 ${
            card.cardChosen === "premium"
              ? "full-gradient  text-white"
              : "deactive"
          } text-sm rounded-t-xl md:rounded-tr-none  md:rounded-l-xl  `}
        >
          <h2 className="font-black tracking-wide">Recomendado</h2>
          <h4 className="tracking-widest">PLUS ULTRA</h4>

          <div className="flex flex-row items-end">
            <span>R$</span>
            <h1 className="text-4xl font-bold">300</h1>
          </div>

          <ul>
            <li>
              {" "}
              <p className="text-sm">tudo do pacote "just...ultra"</p>{" "}
            </li>
            <li>
              <h1 className="font-bold tracking-widest">
                +a gente lambe seus pés
              </h1>
            </li>
          </ul>
        </div>

        <div
          onClick={toggleSelectedCard}
          data-value="normal"
          className={`flex flex-col w-[25%] justify-center items-center gap-4 text-sm rounded-b-xl md:rounded-bl-none md:rounded-r-xl ${
            card.cardChosen === "normal"
              ? "full-gradient pricing-card"
              : "deactive"
          }`}
        >
          <h4 className=" tracking-wide font-medium">just...ultra </h4>

          <div className="flex flex-row items-end">
            <span>R$</span>
            <h1 className="text-4xl font-bold">150</h1>
          </div>

          <div >
            <ul className="text-[10px] flex flex-col  gap-2 break-words">
              <li  >Infraestrutura technologica com moderno windows 95</li>
              <li >Suporte, mas se for muitas mensagens a gente te bloqueia</li>
              <li >
                Inovacao: Internet DISCADA (diferente, tem propria musica!)
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="absolute blur-xs -z-10 translate-x-0 md:translate-x-200 -translate-y-50 md:-translate-y-110 bg-[url('/bolas.png')] scale-80 opacity-60 w-[50rem] h-[36rem]"></div>
    </div>
  );
}

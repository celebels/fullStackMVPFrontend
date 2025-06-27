import React from "react";
import { Link, useParams } from "react-router-dom";
import BigTitle from "../components/BigTitle";

export default function ChosenPricingCard() {
  const params = useParams();

  console.log("params: ", params);
  return (
    <div className="text-black p-24 ">
      <BigTitle text={`Preco Opcao ${params.servicoId}`} />
      <div>
        <h3>voce selecionou o preco <span className="italic font-bold tracking-widest uppercase">{params.servicoId} </span></h3>
        <p>caso queira checar o outro preco, clique <Link to="/servicos">aqui</Link></p>
      </div>
    </div>
  );
}

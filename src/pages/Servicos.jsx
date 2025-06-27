import React, { useState } from "react";
import Button from "../components/Button";
import BigTitle from "../components/BigTitle";
import Carousel from "../components/Carousel";
import PricingCards from "../components/PricingCards";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

export default function Servicos() {
  const [openModal, setOpenModal] = useState(false); //opening modal

  return (
    <>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div className="p-6 flex text-black flex-col gap-6 ">
            <BigTitle text="entre em contato!" />
            <ul>
              <li className="italic text-xl">Caro cliente, </li>

              <li>
                Caso esteja interessado em se comunicar com....
                <span className="text-xl italic"> *suspiro* </span> HUMANOS
              </li>
              <li>
                Nosso telefone é{" "}
                <span className="text-xl font-bold tracking-wide">
                  {" "}
                  +55 (21) 12345-678{" "}
                </span>{" "}
              </li>
            </ul>
            <Button
              fullButton={false}
              desc="fechar"
              onClick={() => setOpenModal(false)}
            />
          </div>
        </Modal>
      )}

      <div className="flex flex-col md:flex-row mx-auto md:mx-24 mt-24">
        <div className="flex flex-col items-center md:items-start gap-12 ">
          <BigTitle text="O que oferecemos" />
          <p className="text-black text-center px-8 md:px-0 md:text-left ">
            Este serviço oferece uma solução prática e confiável para diversas
            necessidades. Sua operação é simples e ágil, garantindo que os
            resultados sejam entregues de forma rápida e eficaz. A eficiência do
            serviço contribui para a satisfação dos usuários, que podem contar
            com um atendimento contínuo e sem complicações.
          </p>

          <div className="flex flex-row mt-8 gap-8">
            <Button
              fullButton={true}
              desc="contato"
              onClick={() => setOpenModal(true)}
            />
            <Link to="/joke">
              {" "}
              <Button
                fullButton={false}
                desc="Aqui uma piada - por que fazemos fetch ♡"
              />
            </Link>
          </div>
        </div>

        <div>
          <img src="../public/oferecemos.png" alt="3d model with mobile" />
        </div>
      </div>

      <section className="md:mx-24 ">
        <BigTitle text="Nossos servicos" />
        <div className="mb-24">
          <Carousel />
        </div>
        <PricingCards />
      </section>

      <section className="flex flex-col mx-auto md:flex-row justify-center items-center ">
        <div>
          <img  src="../public/space.png" />
        </div>

        <div className="text-black px-12 md:px-24">
          <h1 className="font-bold text-4xl mb-8">
            Aproveite a eficiência que você merece.{" "}
          </h1>
          <p className=" mb-8">
            Com nossos servicos, voce terá tempo de sobra! Preocupacoes? Nao
            conheco ela! Agilidade? Estamos aqui{" "}
          </p>
          <h3 className="italic tracking-wider mb-12">
            Após usar nossos servicos, voce irá se questionar como conseguiu
            sobreviver sem eles por tanto tempo
          </h3>
        </div>
      </section>
    </>
  );
}

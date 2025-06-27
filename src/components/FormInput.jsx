import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Form, useActionData } from "react-router-dom";
import Modal from "./Modal";
import BigTitle from "./BigTitle";
import LoadSpin from "./LoadSpin";

export default function FormInput({ dateTime }) {
  const [formInput, setFormInput] = useState({
    nome: "",
    assunto: "",
    telefone: "",
    date: "",
  }); //form
  const formRef = useRef();

  const [openModal, setOpenModal] = useState(false); //opening modal

  const [errors, setError] = useState({});

  function validateData(inputForm) {
    const newError = {};

    if (inputForm.nome === "" || inputForm.nome.length < 3) {
      newError.nome = "nome invalido";
    }
    if (inputForm.assunto === "") {
      newError.assunto = "assunto invalido";
    }
    if (inputForm.telefone === "" || inputForm.telefone.length < 8) {
      newError.telefone = "telefone invalido";
    }
    if (inputForm.date === "") {
      newError.date = "data invalida";
    }

    return newError;
  }

  function handleSumit(e) {
    e.preventDefault();

    const inputForm = {
      nome: e.target.nome.value,
      assunto: e.target.assunto.value,
      telefone: e.target.telefone.value,
      pacote: e.target.pacote.value,
      date: dateTime,
    };

    //checking input

    const newError = validateData(inputForm);
    setError(newError);
    //checking input END

    setFormInput(inputForm);
  }

  useEffect(() => {
    localStorage.setItem("agendamento", JSON.stringify(formInput));
  }, [formInput]); //saving data

  return (
    <>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div className="p-6 flex text-black flex-col gap-6 ">
            <BigTitle text="confirmado!" />
            <ul>
              <li className="italic text-xl">Caro {formInput.nome},</li>
              <li>
                Com telefone{" "}
                <span className="text-xl font-bold">{formInput.telefone}</span>{" "}
              </li>
              <li>
                <p>
                  Seu assunto sobre{" "}
                  <span className="text-xl font-bold">{formInput.assunto}</span>{" "}
                </p>
                será atendido dia{" "}
                <span className="text-xl font-bold">
                  {new Date(formInput.date).toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <p>
                  sobre o pacote{" "}
                  <span className="font-bold tracking-wider">
                    {formInput.pacote}{" "}
                  </span>
                </p>
              </li>
            </ul>
            <Button
              fullButton={false}
              desc="fechar"
              onClick={() =>{ formRef.current.reset(); setOpenModal(false);}}
            />
          </div>
        </Modal>
      )}

      <Form
      ref={formRef}
        onSubmit={handleSumit}
        className=" flex flex-col gap-12 justify-center items-start "
      >
        <div className="text-red-700 font-bold">
          {Object.values(errors).map((err, idx) => (
            <p> {err} </p>
          ))}
        </div>

        <div className="name text-black flex flex-col gap-6">
          <input
          autocomplete="off"
            type="text"
            name="nome"
            placeholder="seu nome aqui"
            className="px-8 py-2 rounded-sm border-gray-300 border bg-white"
          />

          <input
          autocomplete="off"
            type="number"
            name="telefone"
            placeholder="seu telefone"
            className="px-8 py-2 rounded-sm border-gray-300 border bg-white"
          />
          <input
          autocomplete="off"
            type="text"
            name="assunto"
            placeholder="seu assunto aqui"
            className="px-8 py-2 rounded-sm border-gray-300 border bg-white"
          />

          <div className="flex flex-row gap-4">
            <span className="text-sm">
              <input type="radio" value="premium" name="pacote" /> Pacote
              Premium
            </span>
            <span className="text-sm">
              <input type="radio" value="normal" name="pacote" /> Pacote Normal
            </span>
          </div>

          <input type="hidden" name="calendar" value={dateTime} />
        </div>

        <Button
          fullButton={true}
          desc="entre em contato"
          onClick={() => {
            if (
              Object.keys(errors).length === 0 &&
              formInput.nome !== "" &&
              formInput.telefone !== "" &&
              formInput.assunto !== "" &&
              formInput.data !== ""
            ) {
              console.log("empty error");
              setOpenModal(true);
            }
          }}
        />
      </Form>
    </>
  );
}

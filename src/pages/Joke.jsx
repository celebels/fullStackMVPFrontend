import React, { useEffect, useState } from "react";
import BigTitle from "../components/BigTitle";
import { Link } from "react-router-dom";

export default function Joke() {
  const [joke, setJoke] = useState({
    setup: "",
    delivery: "",
  });

  useEffect(() => {
    async function fetchJoke() {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=religious,racist,sexist"
      );

      if (!res.ok) {
        console.log(res.status);
        throw new Error(res.info);
      }

      const joke = await res.json();

      if (joke.delivery && joke.setup) {
        return joke;
      }
    }

    fetchJoke().then((joke) =>
      setJoke({ delivery: joke.delivery, setup: joke.setup })
    );
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center h-[100vh] text-center">
      <div className="mb-32">
        <h1 className="text-black text-4xl ">{joke.setup} </h1>
        <BigTitle text={joke.delivery} />
      </div>

      <Link to="/">ok pode voltar para pagina inical</Link>
    </div>
  );
}

import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Agendamento from "./pages/Agendamento";
import Error from "./pages/Error.jsx";
import Joke from "./pages/Joke.jsx";
import ChosenPricingCard from "./pages/ChosenPricingCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "servicos",
        element: <Servicos />,
      },
      { path: "servicos/:servicoId", element: <ChosenPricingCard /> },

      { path: "agendamento", element: <Agendamento /> },
      { path: "joke", element: <Joke /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/**
 * ● A aplicação deve consumir dados de uma API externa pública e gratuita,
utilizando fetch ou axios, sem redirecionar o usuário para fora da aplicação.
● Os dados devem ser tratados e exibidos diretamente na interface, com
mensagens amigáveis em caso de erro ou ausência de dados.
● No README, é necessário informar o nome da API utilizada, a licença (sehouver), se requer cadastro ou chave de acesso (API key) e quais rotas foram
utilizadas
 * 
 */

/*Incluir alguns elementos para melhorar a experiência do usuário, tais como:
● Exibir feedback visual após ações do usuário, como: cliques, envios de
formulário, carregamento de dados;
● Tooltips explicativas em botões ou ícones;
● Mensagens condicionais contextuais, como “nenhum item encontrado” ou “erro
ao carregar dados”.
● Indicadores de carregamento, sucesso ou erro;
*/

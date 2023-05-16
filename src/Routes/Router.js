import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/LoginPage";
import { Agendamento } from "../Pages/Agendamento/Agendamento";
import {Gerenciamento} from "../Pages/Gerenciamento/Gerenciamento"
import {Cadastro} from "../Pages/Cadastro/Cadastro";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/gerenciamento" element={<Gerenciamento />} />
        <Route path="/cadastro" element={<Cadastro />} />

      </Routes>
    </BrowserRouter>
  );
};

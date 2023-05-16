import React from "react";
import axios from "axios";
import { Header } from "../Agendamento/Agendamentostyled";
import { useNavigate } from "react-router-dom";
import { REACT_APP_BASE_URL } from "../../constants/BASE_URL";
import { TextoSignup, Input, Texto, Button } from "./cadastrostyled";
import { useState } from "react";
import { goToLoginPage } from "../../Routes/coordinator";

export const Cadastro = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const cadastro = async () => {
    try {
      const body = {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      };

      const response = await axios.post(`${REACT_APP_BASE_URL}/usuarios`, body);
      window.localStorage.setItem("token", response.data.token);
      alert("Cadastro criado com sucesso!");
      setForm({
        nome: "",
        email: "",
        senha: ""
      });




    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
   <Header>
   <h3 onClick={() => goToLoginPage(navigate)} style={{ cursor: "pointer" }}>
    Login
   </h3>
   </Header>

      <TextoSignup>
        Olá, vamos lá fazer nosso cadastro :)
      </TextoSignup>

      <Input
        name={"nome"}
        onChange={changeForm}
        value={form.nome}
        placeholder="Nome"
      />
      <Input
        name={"email"}
        onChange={changeForm}
        value={form.email}
        placeholder="E-mail"
      />
      <Input
        name={"senha"}
        onChange={changeForm}
        value={form.senha}
        type="password"
        placeholder="Senha"
      />

      <Texto>
        <div>
          <p>
            Ao continuar, você concorda com o nosso
            <span className="textocolorido"> Contrato de usuário </span> e
            nossa
            <span className="textocolorido"> Política de Privacidade </span>
            <br />{" "}
          </p>
          <br />
          <p>
            {" "}
            <input type="checkbox" />
            Eu concordo em receber emails sobre novidades
          </p>
        </div>
      </Texto>

      <Button onClick={() => cadastro()}>Cadastrar</Button>
    </>
  );
};

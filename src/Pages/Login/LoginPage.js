import React, { useState } from "react";
import { LoginContainer, LoginForm, Button, Input, Criarconta } from "./LoginPagestyled";
import logo from "../../assets/restaurantes.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToAgendamentoPage, goToCadastro } from "../../Routes/coordinator";
import { REACT_APP_BASE_URL } from "../../constants/BASE_URL";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const Login = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`${REACT_APP_BASE_URL}/login`, form);
      const userId = response.data.user_id;
      window.localStorage.setItem("userId", userId);

      setIsLoading(false);
      goToAgendamentoPage(navigate)
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("Verifique seus dados de login!");
    }
  };

  return (
    <LoginContainer>
      <div>
        <img src={logo} alt="logo" width="50px" />
        <h1>Sua reserva aqui!</h1>
      </div>
      <LoginForm>
        <Input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={changeForm}
        />
        <Input
          name="senha"
          type="password"
          placeholder="Password"
          value={form.senha}
          onChange={changeForm}
        />
        <Button onClick={Login} disabled={isLoading}>
          {isLoading ? "Carregando..." : "Login"}
        </Button>
        <Criarconta onClick={() => goToCadastro(navigate)} >
          { "Crie uma Conta Aqui!"}
        </Criarconta>
      </LoginForm>
    </LoginContainer>
  );
};

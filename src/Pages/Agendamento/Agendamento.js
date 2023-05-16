import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormContainer, Label, Button, Input, Form, Select, Header } from "./Agendamentostyled";
import { useNavigate } from "react-router-dom";
import { goToGerenciamentoPage, goToLoginPage } from "../../Routes/coordinator";
import { REACT_APP_BASE_URL } from "../../constants/BASE_URL";
import sair from "../../assets/sair.png"


export const Agendamento = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    usuario_id: "",
    email: "",
    data: "",
    horario: "",
    mesa_id: ""
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const agendamento = async (event) => {
    event.preventDefault();

    const { usuario_id, data, horario, mesa_id,pessoas } = form;

    const reservaData = {
      usuario_id,
      data,
      horario,
      mesa_id,
      pessoas
    };

    try {
      const response = await axios.post(`${REACT_APP_BASE_URL}/reservas`, reservaData);
      console.log(response.data);
      alert("Agendamento criado com sucesso!");
      setForm({
        data: "",
        horario: "",
        mesa_id: "",
        pessoas:""
      });

    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao criar o agendamento. Por favor,verifique data e horario! Nosso funcionamento é das 18:00 às 23:59, exceto aos domingos!");
    }
  };

  useEffect(() => {
    const loggedInUserId = window.localStorage.getItem("userId");
    if (loggedInUserId) {
      setForm((prevForm) => ({
        ...prevForm,
        usuario_id: loggedInUserId
      }));
    } else {
    }
  }, []);

  return (
    <FormContainer>
      <Header>

        <h3 onClick={() => goToGerenciamentoPage(navigate)} style={{ cursor: "pointer" }}>
          Minhas reservas
        </h3>
        <h4>
        Sair
        </h4>
        <img src={sair} alt="sair" width="30px" onClick={() => goToLoginPage(navigate)} style={{ cursor: "pointer" }} />
      </Header>
      <h1>Faça seu agendamento aqui!</h1>

      <Form id="agendamento-form" onSubmit={agendamento}>

        <Label htmlFor="data">Data:</Label>
        <Input type="date" id="data" name="data" value={form.data} onChange={changeForm} required />
        <br/>

        <Label htmlFor="horario">Horário:</Label>
        <Input type="time" id="horario" name="horario" value={form.horario} onChange={changeForm} required />
        <br/>

        <Label htmlFor="pessoas">Número de pessoas para a mesa:</Label>
        <Select id="pessoas" name="pessoas" value={form.pessoas} onChange={changeForm} required>
          <option value="">Selecione o número de pessoas</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
          <option value="6"> 6</option>

        </Select>
        <br/>

        <Label htmlFor="mesa">Mesa:</Label>
        <Select id="mesa" name="mesa_id" value={form.mesa_id} onChange={changeForm} required>
          <option value="">Selecione a mesa</option>
          <option value="1">Mesa 1</option>
          <option value="2">Mesa 2</option>
          <option value="3">Mesa 3</option>
          <option value="4">Mesa 4</option>
          <option value="5">Mesa 5</option>
          <option value="6">Mesa 6</option>
          <option value="7">Mesa 7</option>
          <option value="8">Mesa 8</option>
          <option value="9">Mesa 9</option>
          <option value="10">Mesa 10</option>
          <option value="11">Mesa 11</option>
          <option value="12">Mesa 12</option>
          <option value="13">Mesa 13</option>
          <option value="14">Mesa 14</option>
          <option value="15">Mesa 15</option>

        </Select>
        <br/>

        <Button type="submit" onClick={changeForm}>Agendar Mesa</Button>
      </Form>
    </FormContainer>
  );
};

export default Agendamento;
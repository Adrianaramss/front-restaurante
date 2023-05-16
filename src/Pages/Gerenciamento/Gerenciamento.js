import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Agendamento/Agendamentostyled";
import sair from "../../assets/sair.png"
import { goToAgendamentoPage, goToLoginPage } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Gerenciamentoed, Titulo } from "./Gerenciamentostyled";
import { REACT_APP_BASE_URL } from "../../constants/BASE_URL";

export const Gerenciamento = () => {
  const [reservas, setReservas] = useState([]);
  const loggedInUserId = window.localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const carregarReservas = async () => {
      try {
        const response = await axios.get(`${REACT_APP_BASE_URL}/reservas/usuario/${loggedInUserId}`);
        setReservas(response.data);
      } catch (error) {
        console.log(error);
        alert("Ocorreu um erro ao carregar as reservas. Por favor, tente novamente.");
      }
    };

    if (loggedInUserId) {
      carregarReservas();
    }
  }, [loggedInUserId]);

  return (
    <>
      <Header>
        <h3 onClick={() => goToAgendamentoPage(navigate)} style={{ cursor: "pointer" }}>
          voltar para agendamento
        </h3>
        <h4>
        Sair
        </h4>
        <img src={sair} alt="sair" width="30px" onClick={() => goToLoginPage(navigate)} style={{ cursor: "pointer" }} />

      </Header>

      <Gerenciamentoed>
        <Titulo>Minhas Reservas</Titulo>
        <br/>
        <hr/>
      
        {reservas.map((reserva) => (

          <div key={reserva.id}>
            <p>Nome do cliente da reserva: {reserva.nome}</p>
            <p>Data: {reserva.data}</p>
            <p>Horário: {reserva.horario}</p>
            <p>Número da mesa: {reserva.mesa_id}</p>
            <p>Número de pessoas para a mesa: {reserva.pessoas}</p>

            <hr />
          </div>
        ))}

      </Gerenciamentoed>
    </>
  );
};

export default Gerenciamento;

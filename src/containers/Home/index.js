import React, { useState, useRef,} from "react";
import { Container, ContainerItens, P, Img, Input, Button, } from './styles'
import Burger from '../../assets/burger.svg'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import H1 from '../../components/Title';

const App = () => {

  const [users, setUsers] = useState([])
  const inputPedido = useRef()
  const inputName = useRef()
  const navigate = useNavigate()

  async function criarPedido() {
    const {data : newUser} = await axios.post("http://localhost:3002/users", {
      pedido: inputPedido.current.value,
      name: inputName.current.value,
    });


    setUsers([...users, newUser]);

    navigate("/pedidos");
  };


  return (
    <Container>
      <Img alt="burguer-img" src={Burger} />

      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <P>Pedido:</P>
        <Input ref={inputPedido} placeholder="Insira seu pedido" />

        <P>Nome do cliente:</P>
        <Input ref={inputName} placeholder="Insira seu nome" />

        <Button onClick={criarPedido}>Novo Pedido</Button>

      </ContainerItens>

    </Container>
  );
};

export default App

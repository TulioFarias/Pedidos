import React, { useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerItens, H1, Img, Button, User } from './styles'
import Sacola from '../../assets/sacola-pedido.svg'
import Lixeira from '../../assets/lixeira.svg'
import axios from "axios";

const App = () => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  console.log(navigate)


  useEffect(()=> {

    async function fetchUsers(){
      const {data: usersTotal} = await axios.get('http://localhost:3002/users')

    setUsers(usersTotal);
    };

    fetchUsers();
  
  }, []);



  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3002/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers);

  };

  function goBackPage(){
    navigate("/");
  }


  return (
    <Container>
      <Img alt="burguer-img" src={Sacola} />

      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {
            users.map(user => (
              <User key={user.id}>
                <p>{user.pedido}</p>
                <p>{user.name}</p>

                <button onClick={() => deleteUser(user.id)}> <img src={Lixeira}/></button>

              </User>
            ))
          }
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>

      </ContainerItens>

    </Container>
  );
};

export default App

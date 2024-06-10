import { useState } from 'react';

import './Form.css';
import TextField from "../TextField";
import DropdownList from '../DropdownList';
import SubmitButton from '../SubmitButton';

const Form = () => {
  const options = [
    {
      id: 1,
      name: "Front-End",
      value: "front-end"
    },
    {
      id: 2,
      name: "Back-End",
      value: "back-end"
    },
    {
      id: 3,
      name: "Banco de Dados",
      value: "database"
    },
    {
      id: 4,
      name: "DevOps",
      value: "devops"
    },
  ];
  
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [group, setGroup] = useState('front-end');

  const handleFormSubmitted = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!", group);
  }

  return (
    <section className="form">
      <form onSubmit={handleFormSubmitted}>
        <h2>
          Preencha os dados para criar o Card de membro
        </h2>
        <TextField 
          label="Nome"
          value={name}
          onValueChange={value => setName(value)}
          required={true}
          placeholder="Digite seu nome"
        />

        <TextField 
          label="Função"
          value={role}
          onValueChange={value => setRole(value)}
          required={true}
          placeholder="Digite sua função"
        />

        <TextField 
          label="Imagem"
          value={image}
          onValueChange={value => setImage(value)}
          required={true}
          placeholder="Digite o endereço da imagem"
        />

        <DropdownList 
          label="Time"
          value={group}
          onValueChange={value => setGroup(value)}
          required={true}
          options={options}
        />

        <SubmitButton>
          Criar Card
        </SubmitButton>          
      </form>
    </section>
  );
}

export default Form;
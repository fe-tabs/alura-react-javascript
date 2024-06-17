import { useState } from 'react';

import './Form.css';
import TextField from "../TextField";
import DropdownList from '../DropdownList';
import SubmitButton from '../SubmitButton';

const Form = ({ 
  onNewMember,
  options 
}) => {
  
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [group, setGroup] = useState('');

  const handleFormSubmitted = (e) => {
    e.preventDefault();
    onNewMember({
      id: name,
      name,
      role,
      image,
      group
    });
    setName('');
    setRole('');
    setImage('');
    setGroup('');
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
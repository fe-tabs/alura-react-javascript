import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Form.css';
import Field from "../Field";
import DropdownList from '../DropdownList';
import SubmitButton from '../SubmitButton';

const Form = ({ 
  onAddMember,
  onAddGroup,
  options 
}) => {
  
  const [memberName, setMemberName] = useState('');
  const [memberRole, setMemberRole] = useState('');
  const [memberImage, setMemberImage] = useState('');
  const [memberGroup, setMemberGroup] = useState('');

  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('');

  const handleMemberFormSubmitted = (e) => {
    e.preventDefault();
    onAddMember({
      id: uuidv4(),
      name: memberName,
      role: memberRole,
      image: memberImage,
      group: memberGroup
    });
    setMemberName('');
    setMemberRole('');
    setMemberImage('');
    setMemberGroup('');
  }

  const handleGroupFormSubmitted = (e) => {
    e.preventDefault();
    onAddGroup({
      id: uuidv4(),
      name: groupName,
      value: groupName.toLowerCase(),
      color: groupColor
    });
    setGroupName('');
    setGroupColor('');
  }

  return (
    <section className="form">
      <form onSubmit={handleMemberFormSubmitted}>
        <h2>
          Preencha os dados para criar o Card de membro
        </h2>

        <Field 
          label="Nome"
          value={memberName}
          onValueChange={value => setMemberName(value)}
          required={true}
          placeholder="Digite seu nome"
        />

        <Field 
          label="Função"
          value={memberRole}
          onValueChange={value => setMemberRole(value)}
          required={true}
          placeholder="Digite sua função"
        />

        <Field 
          label="Imagem"
          value={memberImage}
          onValueChange={value => setMemberImage(value)}
          required={true}
          placeholder="Digite o endereço da imagem"
        />

        <DropdownList 
          label="Time"
          value={memberGroup}
          onValueChange={value => setMemberGroup(value)}
          required={true}
          options={options}
        />

        <SubmitButton>
          Criar Card
        </SubmitButton>          
      </form>

      <form onSubmit={handleGroupFormSubmitted}>
        <h2>
          Preencha os dados para criar o Time
        </h2>

        <Field 
          label="Nome"
          value={groupName}
          onValueChange={value => setGroupName(value)}
          required={true}
          placeholder="Digite o nome do Time"
        />

        <Field
          type="color"
          label="Cor"
          value={groupColor}
          onValueChange={value => setGroupColor(value)}
          placeholder='Defina a cor do time'
          required={true}
        />

        <SubmitButton>
          Criar Time
        </SubmitButton>          
      </form>
    </section>
  );
}

export default Form;
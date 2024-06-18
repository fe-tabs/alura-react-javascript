import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Banner from './components/Banner';
import Form from './components/Form';
import Group from './components/Group';

function App() {
  const groups = [
    {
      "id": uuidv4(),
      "name": "Front-End",
      "value": "front-end",
      "primaryColor": "#57C278",
      "secondaryColor": "#D9F7E9"
    },
    {
      "id": uuidv4(),
      "name": "Back-End",
      "value": "back-end",
      "primaryColor": "#82CFFA",
      "secondaryColor": "#E8F8FF"
    },
    {
      "id": uuidv4(),
      "name": "Banco de Dados",
      "value": "database",
      "primaryColor": "#E06B69",
      "secondaryColor": "#FDE7E8"
    },
    {
      "id": uuidv4(),
      "name": "DevOps",
      "value": "devops",
      "primaryColor": "#FFBA05",
      "secondaryColor": "#FFF5D9"
    },
  ];

  const [members, setMembers] = useState([]);
  
  const onAddMember = (member) => {
    setMembers([...members, member]);
  }

  const onRemoveMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  }

  return (
    <div className="App">
      <Banner />
      <Form onAddMember={onAddMember} options={groups} />
      
      {groups.map(group => {
        return (
          <Group 
            key={group.id}
            name={group.name} 
            primaryColor={group.primaryColor}
            secondaryColor={group.secondaryColor}
            groupMembers={members.filter(member => member.group === group.value)}
            onRemoveMember={onRemoveMember}
          />
        );
      })}
    </div>
  );
}

export default App;

import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Group from './components/Group';

function App() {
  const groups = [
    {
      "id": 1,
      "name": "Front-End",
      "value": "front-end",
      "primaryColor": "#57C278",
      "secondaryColor": "#D9F7E9"
    },
    {
      "id": 2,
      "name": "Back-End",
      "value": "back-end",
      "primaryColor": "#82CFFA",
      "secondaryColor": "#E8F8FF"
    },
    {
      "id": 3,
      "name": "Banco de Dados",
      "value": "database",
      "primaryColor": "#E06B69",
      "secondaryColor": "#FDE7E8"
    },
    {
      "id": 4,
      "name": "DevOps",
      "value": "devops",
      "primaryColor": "#FFBA05",
      "secondaryColor": "#FFF5D9"
    },
  ];

  const [members, setMembers] = useState([]);
  
  const onNewMember = (member) => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onNewMember={member => onNewMember(member)} options={groups} />
      
      {groups.map(group => {
        return (
          <Group 
            key={group.id}
            name={group.name} 
            primaryColor={group.primaryColor}
            secondaryColor={group.secondaryColor}
            groupMembers={members.filter(member => member.group === group.value)}
          />
        );
      })}
    </div>
  );
}

export default App;

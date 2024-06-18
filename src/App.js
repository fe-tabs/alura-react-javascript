import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Banner from './components/Banner';
import Form from './components/Form';
import Group from './components/Group';

function App() {
  const defaultGroups = [
    {
      "id": uuidv4(),
      "name": "Front-End",
      "value": "front-end",
      "color": "#57C278",
      "starred": false
    },
    {
      "id": uuidv4(),
      "name": "Back-End",
      "value": "back-end",
      "color": "#82CFFA",
      "starred": false
    },
    {
      "id": uuidv4(),
      "name": "Banco de Dados",
      "value": "database",
      "color": "#E06B69",
      "starred": false
    },
    {
      "id": uuidv4(),
      "name": "DevOps",
      "value": "devops",
      "color": "#FFBA05",
      "starred": false
    },
  ];

  const [groups, setGroups] = useState(defaultGroups);
  const [members, setMembers] = useState([]);
  
  const onAddMember = (member) => {
    setMembers([...members, member]);
  }

  const onRemoveMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  }

  const onStarMember = (id) => {
    setMembers(members.filter(member => {
      if (member.id === id) {
        member.starred = !member.starred;
      }

      return member;
    }));
  }

  const onAddGroup = (group) => {
    setGroups([...groups, group]);
  }

  const changeGroupColor = (id, color) => {
    setGroups(groups.map(group => {
      if (group.id === id) {
        group.color = color;
      }

      return group;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        onAddMember={onAddMember}
        onAddGroup={onAddGroup} 
        options={groups} 
      />
      
      {groups.map(group => {
        return (
          <Group 
            key={group.id}
            id={group.id}
            name={group.name} 
            color={group.color}
            groupMembers={members.filter(member => member.group === group.value)}
            onRemoveMember={onRemoveMember}
            onStarMember={onStarMember}
            changeGroupColor={changeGroupColor}
          />
        );
      })}
    </div>
  );
}

export default App;

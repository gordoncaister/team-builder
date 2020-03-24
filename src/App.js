import React, {useState} from 'react';
import TeamList  from "./Components/TeamList"
import './App.css';
import Form from './Components/Form';


function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({})

  const addToTeamList = member => {
    setTeamList([...teamList, member])
  };
  const addMemberToEdit = member => {
    setMemberToEdit(member);
  }

  return (
    <div className="App">
      <TeamList teamList={teamList} addMemberToEdit={addMemberToEdit}/>
      <Form addToTeamList={addToTeamList} memberToEdit={memberToEdit}/>
    </div>
  );
}

export default App;

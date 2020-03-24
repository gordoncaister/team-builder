import React, {useState} from 'react';
import TeamList  from "./Components/TeamList"
import './App.css';
import Form from './Components/Form';


function App() {
  const [teamList, setTeamList] = useState([]);

  const addToTeamList = member => {
    setTeamList([...teamList, member])
  };

  return (
    <div className="App">
      Hello
      <TeamList teamList={teamList}/>
      <Form addToTeamList={addToTeamList} />
    </div>
  );
}

export default App;

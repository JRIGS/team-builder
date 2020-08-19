import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";

function App() {

 
  const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""});
  const [team, setTeam] = useState([]);


function onChange(event){
  setTeamMember({ ...teamMember, [event.target.name]: event.target.value })
}


function onSubmit(event){
  event.preventDefault();
  setTeamMember({name: "", email: "", role: ""});
}


function renderCurrentMember(event) {
  if(teamMember.name === ""){
    event.preventDefault();
  } else if(teamMember.email === ""){
    event.preventDefault();
  } else if (teamMember.role === ""){
    event.preventDefault();
  } else if(!teamMember.email.includes("@")){
    event.preventDefault();
  }
  else {
    setTeam([
      ...team,
      teamMember
    ])
  }
}

  return (
    <div className="App">
      <h1>Add a Team Member!</h1>
    <Form
      team={team}
      teamMember={teamMember}
      onSubmit={onSubmit}
      onChange={onChange}
      renderCurrentMember={renderCurrentMember}
    />
      {team.map((member, index) => (
        <section className="member-card" key={index}>
          <h1>{member.name}</h1>
          <h1>{member.email}</h1>
          <h1>{member.role}</h1>
        </section>
      ))}
    </div>
  );
}

export default App;
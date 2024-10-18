import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Launch() {
  const user = {
    name: "John"
  }; //user will be a prop of the component, set in State at the App level by SignIn
  const spaceAffiliation = {
    space: "Rosement College"
  } //affiliation will be a prop of the component
  const spaceName = {
    space: "Personal Finance FY22 💸"
  } //space name will be a prop of the component
  const group = '1A2B3C'; //group id code will be a prop of the component
  const [data, setData] = useState([]);
  const [groupLeader, setGroupLeader] = useState({})

  useEffect(() => {
     async function fetchData() {
      try {
        const response = await fetch ("http://localhost:3001/launch", {
          method: 'GET',
          headers: {
            accept: 'application/json',
          }
        });
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const data = await response.json();
        setData(data);
        console.log(data);
        const filtered = data.filter(leader => leader.group_id === group);
        console.log(filtered);
        setGroupLeader(filtered[0]);
        console.log(groupLeader);
      } catch (err){
        console.log(err);
      }  
    }
    fetchData();   
}, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/createaccount')
  }

  return (
    <div className="App">
      <h1><a href="">Nomie</a></h1>

      <main>
        <h2>👋 Hey there</h2>

        <div className="appBubble">
          <div className="profileImg"><img src={groupLeader.img_url}></img></div>
          <div>
            <div className="username">{user.name}</div>
            <div className="spaceAffiliation">{spaceAffiliation.space}</div>
          </div>
        </div>

        <span className="invited">
          <p>has invited you to join</p>
        </span>

        <div className="spaceName">
          <p>{spaceName.space}</p>
        </div>

        <span className="aboutPopup">
          <p><u>Nomie</u> was designed to connect people in ways which actually mean something. Create a profile to connect with your community.</p>
        </span>

        <button className="btnBlack" onClick={handleClick}>Give it a try</button>
    
        <span className="fiveMin">
          <p>Takes 5 min to complete</p>
        </span>
      </main>
    </div>
  )
}

export default Launch
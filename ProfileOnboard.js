import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function ProfileOnboard() {
  const user = {
    name: "John"
  }; //user will be a prop of the component, set in State at the App level by SignIn
  const group = '1A2B3C'; //group id code will be a prop of the component
  const [data, setData] = useState([]);
  const [groupLeader, setGroupLeader] = useState({})

  useEffect(() => {
     async function fetchData() {
      try {
        const response = await fetch ("http://localhost:3001/profileonboard", {
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
  const handleReady =()=> {
    navigate('/profilecreate')
  }
  return (
    <div className='App'>
      <main>
        <h2>👋 Welcome {user.name}!</h2>

        <span className="signup">
          <p>A message from your community:</p>
        </span>

        <div className="welcomeAppBubble">
          <div className="profilecard">
            <div className="profileImg"><img src={groupLeader.img_url}></img></div>
              <div>
                <div className="username">{groupLeader.first_name}</div>
                <div className="pronouns">{groupLeader.pronoun}</div>
              </div>
          </div>

          <div className="cardtext">
            <p>Looking forward to getting to know you and making this semester a fun one</p>
            <button className="btnBlack">View profile</button>
          </div>
        </div>

        <div className="instructions">
          <h3>
            To get started, create a personal profile to share with the group.
          </h3>
          <h4>Only answer the questions you want to add to your profile. Skip everything else.</h4>
        </div>

        <div>
          <button className="btnBlack" onClick={handleReady}>I'm ready</button>
        </div>
      </main>
    </div>
  )
}

export default ProfileOnboard
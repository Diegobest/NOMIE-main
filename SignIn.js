import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App.js'

function SignIn() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //to submit the form data and log the user in
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const response = await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const result = await response.json()
      .then((result) => setUser({ accesstoken: result.accessToken}))
      .then(() => navigate('/memberhome'))
      .catch((err) => console.error(err));

  };

  //to get the form data from the input fields
  const handleChange = e => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="App">
      <h1><a href="">Nomie</a></h1>

      <main>
        <h2>Sign in</h2>

        <div className="signup">
          <p>Don't already have an account?<a href="/createaccount" className="signUpButton">Sign up</a></p>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" id="Email" name="email" placeholder="Email" onChange={handleChange}></input>
          <input type="text" id="Password" name="password" placeholder="Password" onChange={handleChange}></input>
        

        <span className="forgotPassword">
          <a href="">Forgot your password?</a>
        </span>

        <div >
          <input type="submit" className="btnBlack" value="Sign in"></input>
        </div>
        </form>
      </main>
    </div>
  )
}

export default SignIn
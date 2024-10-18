import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAccount() {
  const navigate = useNavigate();

  //variables for captured input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  //this variable is intended to help with error handling, see handleCreateAcct function, and the last div before the submit button, below
  const [alreadysignedup, setAlreadysignedup] = useState(false);

  //to get the form data from the input fields
  const handleChange = e => {
	  if (e.target.name === "First") {
	    setFirstName(e.target.value)
      console.log(firstName)
	  } else if (e.target.name === "Last") {
	    setLastName(e.target.value)
      console.log(lastName)
	  } else if (e.target.name ==="Email") {
	    setEmail(e.target.value)
      console.log(email)
	  } else if (e.target.name === "Password"){
	    setPassword(e.target.value)
      console.log(password)
	  } else {
      setConfirm_password(e.target.value)
      console.log(confirm_password)
    }};

    //to submit the form data and register the user's account
  const handleCreateAcct = async e => {
    e.preventDefault();
    if (firstName && lastName && email && password && confirm_password) {
      const response = await fetch('http://localhost:3001/createaccount', {
        method: "POST",
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirm_password}) 
      })
      await response.json();
      console.log(response.status);
      if (response.status === 400) {
        alert(response.msg)
      }
      if (response.status === 409) {
        setAlreadysignedup(true)
      } else if (response.ok) {
        navigate('/profileonboard')
      }
    } else {
      alert("Enter all fields.")
    }};

  return (
    <div className="App">
      
      <main>
      <h2>Create account</h2>
        <div className="signup">
          <p>Already have an account?<a href="/signin" className="signUpButton">Sign In</a></p>
        </div>

        <form onSubmit={handleCreateAcct}>
          <input type="text" id="First" name="First" value={firstName} onChange={handleChange} placeholder="First name"></input>
          <input type="text" id="Last" name="Last" value={lastName} onChange={handleChange} placeholder="Last name"></input>
          <input type="email" id="Email" name="Email" value={email} onChange={handleChange} placeholder="Email"></input>
          <input type="password" id="Password" name="Password" value={password} onChange={handleChange} placeholder="Password"></input>
          <p style={{fontSize: "0.6rem"}}>Must be 6-30 characters long</p>
          <input type="password" id="Password2" name="Confirm_Password" value={confirm_password} onChange={handleChange} placeholder="Confirm password"></input>
          <br></br>

        <div>
          <input type="checkbox" id="terms" name="termsandconditions" required value={true}></input>
          <label htmlFor="terms"> I have read and agree to the <a href="termsOfService" className="termsOfService">terms of service</a></label>
        </div><br></br>

        {/* This next div uses conditional rendering with a ternary operator to display the paragraph text only if the value of alreadysignedup is true. This variable (alreadysignedup) has a default value of false unless the response status from the handleCreateAcct function is 409 (duplicate request) */}
        <div style={alreadysignedup ? {display:"block"} : {display:"none"}}>
          <p style={{color: "red"}}>An account with this email has already been created.</p>
        </div> 

        <div>
          <input type="submit" className="btnBlack" value="Create Account" />
        </div>  
      </form>    
      </main>
    </div>
  )
}

export default CreateAccount

import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const Final = ({ values }) => {

const navigate = useNavigate();

const { PreferredName, Profession, Pronouns, Comments, Topic } = values;

const [message, setMessage] = useState("");

let submitFormData = async (e) => {
    if (PreferredName && Profession && Pronouns && Comments && Topic) {
    const response = await fetch("http://localhost:3001/Final", {
      method: "POST",
      body: JSON.stringify({
      PreferredName: PreferredName,
      Profession: Profession,
      Pronouns: Pronouns,
      Comments: Comments,
      Topic: Topic,
      // Images: Images
      }),
      });
      const result = await response.json()
      .then(() => navigate('/signin'))
      .catch((err) => console.error(err));
      //console.log(result);
    } else {
      alert("Enter all fields.")
    }};

return (
      <div className="profileCreate">
      <Card>
        <Card.Body>
        <Form onSubmit={submitFormData}>
        <p><strong>Preferred Name:</strong>{PreferredName}{" "}</p>
        <p><strong>Profession:</strong> {Profession}{" "}</p>
        <p><strong>Pronouns:</strong> {Pronouns}{" "}</p>  
        <p><strong>Comments:</strong> {Comments}{" "}</p>
        <p><strong>Topic:</strong> {Topic}{" "}</p>

        <Button className="btnGreen" type="submit">Create Profile</Button>

        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Final;
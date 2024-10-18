import React, { useState } from "react";
import { RadioGroup} from 'react-radio-group'
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

function StepThree ({nextStep, prevStep, handleFormData, values }) {
  const [error, setError] = useState(false);
  
const submitFormData = (e) => {
  e.preventDefault();
  
if (validator.isEmpty(values.Pronouns)) {
    setError(true);
  } else {
    nextStep();
    }
};

return (
  <div className="profileCreate">
    <Card>
      <Card.Body>
        <Form onSubmit={submitFormData}>
          <Form.Group>
            <h2>What's your pronoun?</h2><br />
              <RadioGroup name="Pronouns" onChange={handleFormData("Pronouns")}>
              <div>
              <label className="radioInput">
              <input 
              type="radio"
              name="text"
              value="She"
              onChange={handleFormData("Pronouns")}
              />{" "}
              She/Her
              </label>
              <br />
              <label className="radioInput">
              <input
              type="radio"
              name="text"
              value="He"
              onChange={handleFormData("Pronouns")}
              />{" "}
              He/Him
              </label>
              <br />
              <label className="radioInput">
              <input
              type="radio"
              name="text"
              value="They"
              onChange={handleFormData("Pronouns")}
              />{" "}
              Them/They
              </label>
              </div>
              </RadioGroup><br />
              {error ? (
              <Form.Text style={{ color: "red" }}>
              This is a required field
              </Form.Text>
              ) : (
            ""
            )}
          </Form.Group>
          <Button className="btnGreen" variant="primary" onClick={prevStep}>
          Previous
          </Button>
          <Button className="btnGreen" variant="primary" onClick={nextStep}>
          Next
        </Button>
       </Form>
      </Card.Body>
    </Card>
  </div>
 );
}

export default StepThree;
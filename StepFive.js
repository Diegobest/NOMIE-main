import React, { useState } from "react";
import { RadioGroup} from 'react-radio-group'
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

function StepFive({ nextStep, prevStep, Topic, handleFormData, values }) {

const [error, setError] = useState("");

const submitFormData = (e) => {
  e.preventDefault();

  if (validator.isEmpty(values.Topic)) {
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
        <h2>Pick a topic you'd like to share about yourself</h2>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label><br></br>
            <RadioGroup>
            <div className="mb-3" style={{ border: error ? "2px solid red" : "" }} >
            <label className="radioInput">
            <input
            type="radio"
            name="text"
            value="Hobby"
            onChange={handleFormData("Topic")}
            />{" "}
            A new hobby or skills
            </label>
          </div>
            <div>
            <label className="radioInput">
            <input
            type="radio"
            name="text"
            value="celebrate"
            onChange={handleFormData("Topic")}
            />{" "}
            How I celebrate
            </label>       
          </div>
            <label className="radioInput">
            <input
            type="radio"
            name="text"
            value="weekend"
            onChange={handleFormData("Topic")}
            />{" "}
            My weekend passtime
            </label>
          <div>
          </div>
            <label className="radioInput">
            <input
            type="radio"
            name="text"
            value="lunchtime"
            onChange={handleFormData("Topic")}
            />{" "}
            My lunchtime ritual
            </label>
            <br />
            {/* <input
            type="text"
            id="Choose"
            name="Choose"
            value="Choose"
            placeholder="Choose myself"
            onChange={handleFormData("Topic")}
            /> */}
          </RadioGroup>
          <br />
            {error ? (
              <Form.Text style={{ color: "red" }}>
                This is a required field
              </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div>
              <Button className="btnGreen" variant="primary" onClick={prevStep}>
                Previous
              </Button>
              <Button className="btnGreen" variant="primary" onClick={nextStep}>
                Next
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StepFive;
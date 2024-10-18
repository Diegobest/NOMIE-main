import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

function StepOne({ nextStep, handleFormData, values }) {

const [error, setError] = useState("");

const submitFormData = (e) => {
  e.preventDefault();

if (validator.isEmpty(values.PreferredName)) {
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
            <Form.Group className="mb-3">
              <h2>What's your preferred name?</h2><br></br>
              <Form.Label>What do you want your group to call you?</Form.Label><br></br><br></br>
              <Form.Control
                style={{ border: "none", padding: "15px", width: "88%" }}
                name="PreferredName"
                id="PreferredName"
                defaultValue={values.PreferredName}
                type="text"
                placeholder="Preferred Name"
                onChange={handleFormData("PreferredName")} /><br />
                {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
                ) : (
                ""
                )}
              </Form.Group>
              {/* <Button variant="primary" type="submit"> */}
              <Button className="btnGreen" variant="primary" onClick={nextStep}>
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StepOne;
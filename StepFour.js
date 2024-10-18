import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

function StepFour({ nextStep, prevStep, handleFormData, values }) {

const [error, setError] = useState(false);
    
// after form submit validating the form data using validator
const submitFormData = (e) => {
  e.preventDefault();
// checking if value of Pronoun is empty show error else take to step 4
  if (
  validator.isEmpty(values.Comments)
  ) {
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
            <h2>What is your perfect way to spend the weekend?</h2><br></br>
              <Form.Control as="textarea" rows={3}
                name="Comments"
                id="Comments"
                defaultValue={values.Comments}
                type="text"
                placeholder="Type your answer"
                onChange={handleFormData("Comments")}
                /><br />
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
};

export default StepFour;
import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
    
function StepTwo({ nextStep, prevStep, handleFormData, values }) {
const [error, setError] = useState(false);

// after form submit validating the form data using validator
const submitFormData = (e) => {
  e.preventDefault();
  
if (validator.isEmpty(values.Profession)) {
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
              <h2>What's your profession?</h2><br></br>
              <Form.Label>We all wear many hats, so choose an unofficial title which you feel best describes your unique role on this team.</Form.Label><br></br><br></br>
              <Form.Control
                style={{ border: "none", padding: "15px", width: "88%" }}
                name="Profession"
                id="Profession"
                defaultValue={values.Profession}
                type="text"
                placeholder="Profession"
                onChange={handleFormData("Profession")} /><br />
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

export default StepTwo;

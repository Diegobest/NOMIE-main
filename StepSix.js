/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

function StepSix({ nextStep, prevStep, handleFormData, values }) {

  const [error, setError] = useState(false);
  const [PreferredName] = useState("");

  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values)) {
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
            <h2>Now tell us a little bit about yourself?</h2><br></br>
            <Form.Label>First pick a question category. Next answer the question! Every question is optional, you can always skip it.</Form.Label><br></br>
            <br />
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
                Continue
              </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StepSix;
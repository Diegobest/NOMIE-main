import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import validator from "validator";

function StepSeven({ nextStep, prevStep, values }) {

const [selectedImage, setSelectedImage] = useState(false);
const [error, setError] = useState(false);

// after form submit validating the form data using validator
const submitFormData = (e) => {
  e.preventDefault();
  
if (validator.isEmpty(values)){
    setError(true);
  } else {
    nextStep();
  }
};

return (
  <div className="profileCreate">
    <Form onSubmit={submitFormData}>
     <h2>What do you look like?</h2><br></br>
     <Form.Label>Share a picture of yourself doing something you enjoy.</Form.Label><br></br>
          {selectedImage && (
        <div>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
          )}
          <br /> 
          <input
          type="file"
          name="myImage"
          onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
            }}
          />
          {error ? (
          <Form.Text style={{ color: "red" }}>
            This is a required field
          </Form.Text>
            ) : (
              ""
            )}
          <div>
          <Button className="btnGreen" variant="primary" onClick={prevStep}>
            Previous
          </Button>
          <Button className="btnGreen" variant="primary" onClick={nextStep}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default StepSeven;
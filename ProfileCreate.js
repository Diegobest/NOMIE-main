import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import Final from "./Final";

function ProfileCreate() {

  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    PreferredName: "",
    profession: "",
    Pronouns: "",
    Comments: "",
    Topic: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  //function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
    return (
      <div className="App">
        <Container>
          <Row>
            <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
              <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
            </Col>
          </Row>
        </Container>
      </div>
    );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
    return (
      <div className="App">
        <Container>
          <Row>
            <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
              <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            </Col>
          </Row>
        </Container>
      </div>
    );
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 4:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                  <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </Col>
              </Row>
            </Container>
          </div>
        );
        case 5:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                    <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                  </Col>
                </Row>
              </Container>
            </div>
            );
            case 6:
              return (
                <div className="App">
                  <Container>
                    <Row>
                      <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                        <StepSix nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
              case 7:
                return (
                  <div className="App">
                    <Container>
                      <Row>
                        <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                          <StepSeven nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
                case 8:
                  return (
                    <div className="App">
                      <Container>
                        <Row>
                          <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                            <Final values={formData}  />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
              //default case to show nothing
              default:
              return (
              <div className="App">
          </div>
      );
  }
}

export default ProfileCreate;

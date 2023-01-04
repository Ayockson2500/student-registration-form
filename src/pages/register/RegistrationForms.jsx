import React, { useState } from "react";
import Stepper from "../../component/common/Stepper";
import StepperControl from "../../component/common/StepperControl";
import ParentInfo from "./ParentInfo";
import StudentInfo from "./StudentInfo";
import Summary from "./Summary";
import { StepperContext } from "../../context/stepperContext";
import NavBarTwo from "../../component/navbar/NavBarTwo";
import userData from "../../data.json";

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: { value: "", touched: false, error: false },
    lastName: { value: "", touched: false, error: false },
    fullName: { value: "", touched: false, error: false },
    email: { value: "", touched: false, error: false },
    phone: { value: 0, touched: false, error: false },
    address: { value: "", touched: false, error: false },
    dateOfBirth: { value: "", touched: false, error: false },
    age: { value: 0, touched: false, error: false },
    numberOfChildren: { value: 0, touched: false, error: false },
  });
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Parent Info", "student info", "Summary"];

  const displayStep = (steps) => {
    switch (steps) {
      case 1:
        return <ParentInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <StudentInfo formData={formData} setFormData={setFormData} />;
      case 3:
        return <Summary formData={formData} setFormData={setFormData} />;
      default:
        break;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    if (
      !formData.fullName.value ||
      !formData.email.value ||
      !formData.address.value ||
      !formData.phone.value
    ) {
      alert('All Inputs fileds must be complete!')
    } else if (newStep > 0 && newStep <= steps.length) {
        userData.forEach((user) => {
          if (
            user.email === formData.email.value ||
            user.phone === formData.phone.value
          ) {
            alert("Email already exist");
          }
          setCurrentStep(newStep);
        });
      }
  };

  return (
    <div>
      <NavBarTwo />
      <main className="flex items-center justify-center translate-y-4 px-2">
        <div className="md:w-1/2 border max-auto shadow-xl bg-RfWhite p-4">
          <div>
            <h1 className="text-center text-3xl">Registration Form</h1>
          </div>
          <div className="container horizontal">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>

          <div className="form-wrapper">
            <StepperContext.Provider value={{}}>
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
          <div>
            <StepperControl
              steps={steps}
              currentStep={currentStep}
              handleClick={handleClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forms;

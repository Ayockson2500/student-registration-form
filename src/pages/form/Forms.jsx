import React, { useState } from "react";
import Stepper from "../../component/common/Stepper";
import StepperControl from "../../component/common/StepperControl";
import NavBar from "../../component/navbar/NavBar";
import ParentInfo from "./ParentInfo";
import StudentInfo from "./StudentInfo";
import Summary from "./Summary";
import { StepperContext } from "../../context/StepperContext";
import NavBarTwo from "../../component/navbar/NavBarTwo";

const Forms = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      LastName: "",
      fullName: "",
      email: "",
      phone: 0,
      address: "",
      dateOfBirth: "",
      age: 0,
      numberOfChildren: 0
    })
    const [currentStep, setCurrentStep] = useState(1)
    const steps = [
        "Parent Info",
        "student info",
        "Summary"
    ]

    const displayStep = (steps) => {
            switch (steps) {
                case 1:
                    return <ParentInfo formData={formData} setFormData={setFormData} />
                case 2:
                    return <StudentInfo formData={formData} setFormData={setFormData} />
                case 3:
                    return <Summary formData={formData} setFormData={setFormData} />
                default:
                    break;
            }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === "next" ? newStep ++ : newStep --;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep); 
    }
  return (
    <div>
      <NavBarTwo />
      <main className=" flex items-center justify-center translate-y-10">
        <div className="md: w-1/2 border max-auto shadow-xl bg-RfWhite p-4">
          <div className="container horizontal">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>

          
            <div className="form-wrapper">
              <StepperContext.Provider value={{}}>
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>
          <div>
            <StepperControl steps={steps} currentStep={currentStep} handleClick={handleClick}  />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forms;

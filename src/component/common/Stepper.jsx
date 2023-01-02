import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]
    let count = 0

    while (count < newSteps.length) {
        if (count === stepNumber) {
            newSteps[count] = {
                ...newSteps[count], 
                highlighted:true, 
                selected: true, 
                completed: true
            }
            count ++;
        } else if (count < stepNumber) {
            newSteps[count] = {
                ...newSteps[count],
                highlighted: false,
                selected: true,
                completed: true
            };
            count ++;
        } else {
            newSteps[count] = {
                ...newSteps[count],
                highlighted: false,
                selected: false,
                completed: false
            };
            count ++;
        }
    }
    return newSteps;

  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    )

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current)
    setNewStep(current)

  }, [steps, currentStep]);

  const displaySteps =newStep.map((step, index) => {
    console.log(step);
    return (
        <div key={index} className={index !== newStep.length - 1 ? "w-full flex items-center" : " flex items-center" }>
          <div className="relative  flex  flex-col items-center text-teal-600">
            <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-8 w-8 flex items-center justify-center ${step.selected ? "bg-RfOrange text-RfWhite font-bold border border-RfOrange-600" : ""}`}>
              {step.completed ? (<span className="text-RfWhite font-bold text-xl">&#10003;</span>) : (index + 1)}
            </div>
            <div className={`absolute  top-0 text-center mt-10 w-32 text-xs uppercase ${step.highlighted ? "text-RfNavy font-bold" : "text-RfGray"}`}>
              {step.description}
            </div>
          </div>
          <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-RfOrange" : ""}`}></div>
        </div>
      )
  }); 

  return (
    <div className="p-4 flex justify-between items-center">{displaySteps}</div>
  );
};

export default Stepper;

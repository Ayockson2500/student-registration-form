import React, { useState } from "react";
import Button from "../button/Button";
import Modal from "../../component/common/Modal";
import { Link } from "react-router-dom";

const StepperControl = ({ steps, currentStep, handleClick }) => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSuccessRegistration = () => {
    setTimeout(() => {
      setRegistrationSuccess(!registrationSuccess)  
    }, 3000);
  }
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <Button
        onClick={() => handleClick()}
        className={`bg-RfOrange py-2 px-5 rounded-md hover:bg-RfOrange3 text-RfWhite transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        Back
      </Button>
      {currentStep > steps.length - 1 ? (
        <Button
          onClick={handleSuccessRegistration }
          className={
            "bg-Rfcyan py-2 px-5 rounded-md hover:bg-Rfcyan2 text-RfWhite transition duration-200 ease-in-out"
          }
        >
          Open Account
        </Button>
      ) : (
        <Button
          onClick={() => handleClick("next")}
          className={
            "bg-Rfcyan py-2 px-5 rounded-md hover:bg-Rfcyan2 text-RfWhite transition duration-200 ease-in-out"
          }
        >
          Next
        </Button>
      )}
      <Modal show={registrationSuccess} onClose={() => setRegistrationSuccess(false)}>
            <h1 className="text-3xl">
              Congratulation! <br /> Registration was successfull
            </h1>
            <Link to={"/login"} className="font-bold">
              Ok
            </Link>
          </Modal>
    </div>
  );
};

export default StepperControl;

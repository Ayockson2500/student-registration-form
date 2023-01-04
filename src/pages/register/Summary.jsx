import React from "react";
import InputField from "../../component/input/InputField";
import { Link } from "react-router-dom";

const Summary = ({ formData }) => {
  return (
    <div className="mt-5">
      <div className="border p-5 shadow-md">
        <div>
          <h1 className="font-bold text-xl">Parent Detail</h1>
          <div className="md:flex items-center justify-between space-y-2">
            <p>{formData.fullName.value}</p>
            <p>{formData.email.value}</p>
          </div>
          <div className="md:flex items-center justify-between space-y-2">
            <p>{formData.phone.value}</p>
            <p>XXXXXXXXXXXX</p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-xl">Child Detail</h1>
          <p className="font-bold">{formData.numberOfChildren.value}</p>
          <div className="md:flex items-center justify-between space-y-2">
            <p>{formData.firstName.value}</p>
            <p>{formData.lastName.value}</p>
          </div>
          <div className="md:flex items-center justify-between space-y-2">
            <p>{formData.dateOfBirth.value}</p>
            <p>{formData.age.value}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <InputField type={"checkbox"} className="cursor-pointer" />
        <p className="text-sm">
          By clicking you agree to accepts our{" "}
          <Link className="text-RfOrange" to="">
            Terms <span className="text-RfGray">&</span> conditions
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Summary;

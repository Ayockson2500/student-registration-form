import React from "react";
import InputField from "../../component/input/InputField";
import { Link } from "react-router-dom";

const Summary = ({ formData }) => {
  return (
    <div className="mt-5">
      <div className="border p-5">
        <div>
          <h1 className="font-bold text-xl">Parent Info</h1>
          <div className="flex items-center justify-between space-y-2">
            <p>{formData.fullName}</p>
            <p>{formData.email}</p>
          </div>
          <div className="flex items-center justify-between space-y-2">
            <p>{formData.phone}</p>
            <p>{formData.address}</p>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="font-bold text-xl">Child Detail</h1>
          <p className="font-bold">{formData.numberOfChildren}</p>
          <div className="flex items-center justify-between space-y-2">
            <p>{formData.firstName}</p>
            <p>{formData.lastName}</p>
          </div>
          <div className="flex items-center justify-between space-y-2">
            <p>{formData.dateOfBirth}</p>
            <p>{formData.age}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <InputField type={"checkbox"} className="border" />
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

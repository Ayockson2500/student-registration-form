import React from "react";
import InputField from "../../component/input/InputField";

const StudentInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="my-8">
        <p>Number of Children</p>
        <InputField
          value={formData.numberOfChildren}
          onChange={(e) =>
            setFormData({ ...formData, numberOfChildren: e.target.value })
          }
          className={"p-4 border outline-none w-1/3"}
          type={"number"}
        />
      </div>
      <form className="space-y-6 ">
        <div className="flex w-full space-x-4">
          <div className=" w-2/4">
            <InputField
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="text"
              placeholder="First name"
              label={"First"}
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="text"
              placeholder="Last name"
              label={"last"}
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className=" w-2/4">
            <InputField
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="date"
              placeholder="date of birth"
              label={"Date of Birth"}
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="number"
              placeholder="age"
              label={"Age"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentInfo;

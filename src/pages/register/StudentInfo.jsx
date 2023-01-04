import React from "react";
import InputField from "../../component/input/InputField";

const StudentInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="my-8">
        <p>Number of Children</p>
        <InputField
          value={formData.numberOfChildren.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              numberOfChildren: {
                value: e.target.value,
                touched: true,
                error: !Boolean(e.target.value),
              },
            })
          }
          className={"p-4 border outline-none w-1/3"}
          type={"number"}
          error={
            formData.numberOfChildren.touched && formData.numberOfChildren.error
          }
          errorMessage="Number of Child can Not be 0"
          required
        />
      </div>
      <form className="space-y-6 ">
        <div className="flex w-full space-x-4">
          <div className=" w-2/4">
            <InputField
              value={formData.firstName.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstName: {
                    value: e.target.value,
                    touched: true,
                    error: !Boolean(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="text"
              placeholder="First name"
              label={"First"}
              error={formData.firstName.touched && formData.firstName.error}
              errorMessage="First name can not be empty"
              required
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.lastName.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastName: {
                    value: e.target.value,
                    touched: true,
                    error: !Boolean(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="text"
              placeholder="Last name"
              label={"last"}
              error={formData.lastName.touched && formData.lastName.error}
              errorMessage="Last name can not be empty"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className=" w-2/4">
            <InputField
              value={formData.dateOfBirth.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dateOfBirth: {
                    value: e.target.value,
                    touched: true,
                    error: !Boolean(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="date"
              placeholder="date of birth"
              label={"Date of Birth"}
              error={formData.dateOfBirth.touched && formData.dateOfBirth.error}
              errorMessage="Date of birth can not be empty"
              required
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.age.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  age: {
                    value: e.target.value,
                    touched: true,
                    error: !Boolean(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="number"
              placeholder="age"
              label={"Age"}
              error={formData.age.touched && formData.age.error}
              errorMessage="Age can not be empty"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentInfo;

import React from "react";
import InputField from "../../component/input/InputField";
import { emailValidation } from "../../utils/validate";

const ParentInfo = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="my-8">
        <p>Parent</p>
        <InputField type={"checkbox"} />
      </div>
      <form className="space-y-6 ">
        <div className="flex w-full space-x-4">
          <div className=" w-2/4">
            <InputField
              value={formData.fullName.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullName: {
                    value: e.target.value,
                    touched: true,
                    error: !Boolean(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="text"
              placeholder="parent name"
              label={"full name"}
              error={formData.fullName.touched && formData.fullName.error}
              errorMessage="please enter full name"
              required
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.email.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: {
                    value: e.target.value,
                    touched: true,
                    error: !emailValidation(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="email"
              placeholder="email"
              label={"email"}
              error={formData.email.touched && formData.email.error}
              errorMessage="please enter a valid email"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className=" w-2/4">
            <InputField
              value={formData.phone.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: {
                    value: e.target.value,
                    touched: true,
                    error: !Boolean(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="tel"
              placeholder="mobile"
              label={"Phone"}
              error={formData.phone.touched && formData.phone.error}
              errorMessage="please enter correct phone number"
              required
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.password.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: {
                    value: e.target.value,
                    touched: true,
                    error: !Boolean(e.target.value),
                  },
                })
              }
              className={"border w-full p-1 outline-none "}
              type="password"
              placeholder="password"
              label={"password"}
              error={formData.password.touched && formData.password.error}
              errorMessage="please enter password"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ParentInfo;

import React from "react";
import InputField from "../../component/input/InputField";

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
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="text"
              placeholder="parent name"
              label={"full name"}
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="email"
              placeholder="email"
              label={"email"}
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className=" w-2/4">
            <InputField
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="tel"
              placeholder="mobile"
              label={"Phone"}
            />
          </div>
          <div className="w-2/4">
            <InputField
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className={"border w-full p-1 outline-none "}
              type="text"
              placeholder="Street address"
              label={"Address"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ParentInfo;

import React from "react";
import InputField from "../../component/input/InputField";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../component/button/Button";
import NavBar from "../../component/navbar/NavBar";

const Register = () => {
  return (
    <div>
        <NavBar />
    <div className="flex items-center justify-center translate-y-1/4">
      <div className="w-1/3 border space-y-5 bg-RfWhite py-5 px-5">
        <div className="float-right border p-1">
          <AiOutlineClose className="cursor-pointer hover:bg-RfOrange3 transition ease-in-out delay-150 hover:text-RfWhite text-RfOrange font-bold" />
        </div>
        <h1 className="text-3xl">Register to create Account</h1>
        <form className="space-y-3" action="">
          <InputField
            label={"userName"}
            className={"w-full p-1 border outline-none"}
            placeholder="email"
          />
          <InputField
            label={"password"}
            className={"w-full p-1 border outline-none"}
            placeholder="password"
          />
          <InputField
            label={"confirm password"}
            className={"w-full p-1 border outline-none"}
            placeholder="confirm password"
          />
          <div>
            <Button className={"bg-RfOrange2 hover:bg-RfOrange3 w-full p-1 text-RfWhite"}>
              Register
            </Button>
          </div>
        </form>
        <p className="text-center text-sm">
          Already have an Account?{" "}
          <Link to={""} className="text-RfBlue">
            Sign in
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Register;

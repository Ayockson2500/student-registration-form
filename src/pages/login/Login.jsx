import React, { useState } from "react";
import InputField from "../../component/input/InputField";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/button/Button";
import NavBar from "../../component/navbar/NavBar";
import userData from "../../data.json";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userData.forEach((user) => {
      if (user.email !== email) {
        alert("Incorrect userName");
      } else if (user.password !== password) {
        alert("incorrect password");
      } else {
        navigate("/dashboard");
      }
    });
  };
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center md:translate-y-1/4 translate-y-10">
        <div className="md:w-1/3 border space-y-3 bg-RfWhite py-5 px-5">
          <div className="float-right border p-1">
            <AiOutlineClose className="cursor-pointer hover:bg-RfOrange3 transition ease-in-out delay-150 hover:text-RfWhite text-RfOrange font-bold" />
          </div>
          <h1 className="text-3xl text-center">Sign In</h1>
          <form onSubmit={handleFormSubmit} className="space-y-5" action="">
            <InputField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              label={"username"}
              className={"w-full p-1 border outline-none"}
              placeholder="email"
            />
            <InputField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              label={"password"}
              className={"w-full p-1 border outline-none"}
              placeholder="password"
              type={'password'}
            />
            <Button
              type={"submit"}
              className={
                "bg-RfOrange2 hover:bg-RfOrange3 w-full p-1 text-RfWhite"
              }
            >
              Login
            </Button>
          </form>
          <p className="text-center text-sm">
            Don't have an Account?{" "}
            <Link to={""} className="text-RfBlue">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

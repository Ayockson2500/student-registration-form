import React, { useState } from "react";
import InputField from "../../component/input/InputField";
import { AiOutlineClose } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/button/Button";
import NavBar from "../../component/navbar/NavBar";

const Login = () => {
    
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate('/forms')
    }
  return (
    <div>
        <NavBar />
    <div className="flex items-center justify-center translate-y-1/4">
      <div className="w-1/3 border space-y-3 bg-RfWhite py-5 px-5">
        <div className="float-right border p-1">
            <AiOutlineClose className="cursor-pointer hover:bg-RfOrange3 transition ease-in-out delay-150 hover:text-RfWhite text-RfOrange font-bold" />
        </div>
        <h1 className="text-3xl text-center">Sign In</h1>
        <form className="space-y-5" action="">
          <InputField label={'userName'} className={'w-full p-1 border outline-none'} placeholder='email' />
          <InputField label={'password'} className={'w-full p-1 border outline-none'} placeholder='password' />
          <Button onClick={() => handleNavigation()} className={'bg-RfOrange2 hover:bg-RfOrange3 w-full p-1 text-RfWhite'}>Login</Button>
        </form>
        <p className="text-center text-sm">Don't have an Account? <Link to={''} className='text-RfBlue'>Register</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Login;

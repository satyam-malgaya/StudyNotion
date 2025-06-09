import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
const Loginform = ({setisLoggedIn}) => {
    const Navigate=useNavigate()
  const [fromData, setfromData] = useState({ email: "", password: "" });
  const [showpassowrd, setshowpassword] = useState(false);
  function changeHandler(e) {
    const { name, value } = e.target;
    setfromData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitHandler(e){
    e.preventDefault()
    setisLoggedIn(true)
    toast.success("Logged In")
    Navigate('/dashborad')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <br />
        <label className="w-full ">
          <p className="text-[0.875rem] text-[#fefefe] mb-1 leading-[1.375rem]">
            Email Addresh <sup className="text-pink-500">*</sup>
          </p>
          <input
            className="w-full  pl-2 outline-none border-b border-[#797878] bg-[#212124]  py-2 rounded-md"
            type="email"
            required
            value={fromData.email}
            onChange={changeHandler}
            placeholder="Enter email"
            name="email"
          />
        </label>
        <label className="w-full relative top-3">
          <p className="text-[0.875rem] text-[#fefefe] mb-1 leading-[1.375rem]">
            Password <sup className="text-pink-500">*</sup>
          </p>
          <input
            className="w-full border-b border-[#797878] bg-[#212124]  pl-2 outline-none  py-2 rounded-md"
            type={showpassowrd ? "text" : "password"}
            required
            value={fromData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            name="password"
          />

          <span className="absolute text-xl top-16.5 right-2"
            onClick={() => {
              // toogling the icons on bases true and false ,in onclick to show or hide the password.
              setshowpassword((prev) => !prev);
            }}
          >
            {showpassowrd ? <IoMdEyeOff fontSize={20} fill="#AFB2BF"/> : <IoMdEye fontSize={20} fill="#AFB2BF" />}
          </span>
          <Link to="#" className="flex justify-end">
            <p className="text-blue-300 text-[14px]">Forgot Password</p>
          </Link>
        </label>
        <button className="py-2 border-[1px]  w-full border-gray-600 mt-7 bg-amber-400 text-black flex items-center justify-center gap-2  rounded-md"> Sign In</button>
      </form>
    </div>
  );
};

export default Loginform;

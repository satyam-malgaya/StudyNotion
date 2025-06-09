import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./Loginform";
import framimg from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setisLoggedIn }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-11/12 max-w-[1160px] py-12 mx-auto gap-50  text-white px-25">
      {/* Left Side: Text + Form */}
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-[#fefefe] font-semibold text-[1.8rem] leading-[2.375rem]">
          {title}
        </h1>

        <p className="text-[1rem] leading-[1.625rem] mt-4">
          <span className="text-[#C5C6FF]">{desc1}</span> <br />
          <span className="text-blue-400 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setisLoggedIn={setisLoggedIn} />
        ) : (
          <LoginForm setisLoggedIn={setisLoggedIn} />
        )}


        {/* OR separator */}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-[#334e68]"></div>
          <p className="text-[#334e68] font-medium leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-[#334e68]"></div>
        </div>

        {/* Google sign in */}
        <button className="flex items-center justify-center gap-2 border border-gray-600 py-2 px-4 rounded-md text-[#c2c2c7]">
          <FcGoogle className="text-xl" />
          <span>Sign in with Google</span>
        </button>
      </div>

      {/* Right Side: Images */}
      <div className="relative w-[400px] h-[300px]">
        <img
          src={framimg}
          width={358}
          height={304}
          loading="lazy"
          alt="frame"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />
        <img
          src={image}
          width={358}
          height={390}
          loading="lazy"
          alt="main visual"
          className="absolute -top-3 -left-3 w-full h-full object-cover z-20"
        />
      </div>
    </div>
  );
};

export default Template;

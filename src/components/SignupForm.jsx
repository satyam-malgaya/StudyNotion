import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setisLoggedIn}) => {
    const Navigate=useNavigate()
  const[formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  });
   const[accounttype,setaccounttype]=useState("student")
  const [showpassowrd, setshowpassword] = useState(false);
  const [showConfirmpassowrd, setshowConfirmpassowrd] = useState(false);

  function changeHandler(e) {
    const { name, value } = e.target;
    setformData((prev) => {
    
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault()
    setformData(true)
    if(formData.password != formData.confirmPassowrd){
        toast.error("Passowrd Do not match")
        return
    }
    setisLoggedIn(true)
    toast.success("Account Created")
    const AccountData={
        ...formData,
    }

    const finalData={
      ...AccountData,accounttype
    }
    console.log("prinerting final account Data",AccountData)

    Navigate('/dashborad')
  }
  return (
    <div>
      {/* student instructor tab */}
      <div className="flex bg-[#202031] p-1 gap-z-1 my-6 rounded-full max-w-max">
         <button 
         className={`${accounttype==="student"?("bg-[#000814] text-[#fefefe]"):
          ("bg-transparent text-[#9f9f9f]" )} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={()=>{setaccounttype('student')}}>
          Student
         </button>

         <button
         className={`${accounttype==="Instructor"?("bg-[#000814] text-[#fefefe]"):
          ("bg-transparent text-[#9f9f9f]" )} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={()=>{setaccounttype('Instructor')}}>
          Instructor
          </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex gap-4">
          <label>
            <p className="text-[0.875rem] text-[#fefefe] mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-500">*</sup>
            </p>
            <input 
                className="w-full border-b border-[#797878] bg-[#212124]  pl-2 outline-none  py-2 rounded-md"
              type="text"
              placeholder="Enter your Firstname"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>
          {/* the label of lastName....  */}
          <label>
            <p className="text-[0.875rem] text-[#fefefe] mb-1 leading-[1.375rem]">
              last Name <sup className="text-pink-500">*</sup>
            </p>
            <input
                className="w-full border-b border-[#797878] bg-[#212124]  pl-2 outline-none  py-2 rounded-md"
              type="text"
              placeholder="Enter your lastname"
              required
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>
        {/* Email add.... */}
        <label className="relative top-3">
          <p className="text-[0.875rem] text-[#fefefe] mb-1 leading-[1.375rem]">
            Email Addresh <sup className="text-pink-500">*</sup>
          </p>
          <input
              className="w-full border-b border-[#797878] bg-[#212124]  pl-2 outline-none  py-2 rounded-md"
            type="Email"
            placeholder="Enter your Email"
            required
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
        </label>
        {/* Createpassowrd or confirm passowrd.. */}
        <div className="flex gap-4 mt-5">
          <label className="relative">
            <p className="text-[0.875rem] text-[#fefefe] mb-1 leading-[1.375rem]">
              Create passowrd <sup className="text-pink-500">*</sup>
            </p>
            <input
                className="w-full border-b border-[#797878] bg-[#212124]  pl-2 outline-none  py-2 rounded-md"
              type={showpassowrd ? ("text") : ("password")}
              placeholder="Enter your password"
              required
              name="password"
              onChange={changeHandler}
              value={formData.password}
            />
            <span
            className="absolute text-xl top-9.5 right-2"
              onClick={() => {
                setshowpassword((prev) => !prev);
              }}
            >
              {showpassowrd ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </label>
          
     {/* confirm passowrd add..., */}
     
          <label className="relative">
            <p className="text-[0.875rem] text-[#fefefe] mb-1 leading-[1.375rem]">
              Confirm Passowrd <sup className="text-pink-500 ">*</sup>
            </p>
            <input
                className="w-full border-b border-[#797878] bg-[#212124]  pl-2 outline-none  py-2 rounded-md"
              type={showConfirmpassowrd ?("text"):("password")}
              placeholder="confirm password"
              required
              name="confirmPassowrd"
              onChange={changeHandler}
              value={formData.confirmPassowrd}
            />
            <span
            className="absolute text-xl top-9.5 right-2"
              onClick={() => {
                setshowConfirmpassowrd((prev) => !prev);
              }}
            >
              {showConfirmpassowrd ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </label>
        </div>
        <button className="py-2 border-[1px]  w-full border-gray-600 mt-7 bg-amber-400 text-black flex items-center justify-center gap-2  rounded-md" type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;

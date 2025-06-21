import React from "react";
import logo from "../assets/Logo-main.svg"
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
// import About from '../components/About'
// import Contact from '../components/Contact'
const Navbar = ({ isLoggedIn, setisLoggedIn }) => {
  return (
    <div className="flex justify-evenly items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
      <Link to="/">
        <img
          src={logo}
          alt="Sorry the image not showing"
          width={160}
          height={32}
          loading="lazy"
        />
      </Link>
      <nav>
        <ul className="flex text-[#d1d1d1] gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* login - signup - logout -Dashborad */}
      <div className="flex  items-center gap-x-4  ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-[#101010] py-[8px] px-[12px]  rounded-[8px] border border-[#4d4d4d] text-[#d1d1d1]">Log in</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-[#101010] py-[8px] px-[12px] rounded-[8px] border border-[#4d4d4d] text-[#d1d1d1]">SignUp</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link
            onClick={() => {
              setisLoggedIn(false);
              toast.success("Logged Out");
            }}
            to="/logout"
          >
            <button className="bg-[#101010] py-[8px] px-[12px] rounded-[8px] border border-[#4d4d4d] text-[#d1d1d1]">Logout</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashborad">
            <button className="bg-[#101010] py-[8px] px-[12px] rounded-[8px] border border-[#4d4d4d] text-[#d1d1d1]">Dashborad</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

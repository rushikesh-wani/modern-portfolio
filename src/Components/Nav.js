import React, { useState } from "react";
import { IoMenu, IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import {
  FaAngleDown,
  FaCloudMoon,
  FaMoon,
  FaRegMoon,
  FaTurnDown,
  FaXmark,
} from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { HiMenuAlt3, HiMoon, HiOutlineMoon } from "react-icons/hi";
import { CgDarkMode, CgMenuRight, CgMoon } from "react-icons/cg";
import { TbMoon } from "react-icons/tb";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onClickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 fixed w-screen py-2 sm:py-4 flex justify-between md:justify-around items-center">
      {/* <img
        className="max-w-10 text-white"
        src="https://static-00.iconduck.com/assets.00/logo-nodejs-icon-1755x2048-ejfcifdr.png"
        alt=""
      /> */}
      <IoLogoNodejs className="w-10 h-10 mx-5 sm:mx-0 hover:text-violet-600" />

      {/* <h1 className="text-gray-300 hover:text-white duration-500 text-xl font-medium hover:scale-110">
        Rushikesh Wani
      </h1> */}
      <div className="flex md:hidden gap-x-2 mx-4">
        <button className="p-1 rounded-2xl text-black bg-gray-300/50 duration-500 focus:bg-violet-500/50 hover:text-black">
          <TbMoon className="text-2xl" />
          {/* <IoMenu className="text-2xl " /> */}
        </button>
        <button
          className="p-1 rounded-2xl text-black duration-500 hover:bg-slate-600 hover:text-black"
          onClick={onClickHandler}
        >
          <CgMenuRight className="text-2xl" />
          {/* <IoMenu className="text-2xl " /> */}
        </button>
      </div>

      <nav className="hidden font-medium text-black md:flex items-center gap-x-7 ">
        <a
          href=""
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Home
        </a>
        <a
          href=""
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          About Me
        </a>
        <a
          href=""
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Skills
        </a>
        <a
          href=""
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Projects
        </a>
        <a
          href=""
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Contact Me
        </a>
        {/* <button className=" bg-gray-100 rounded-full p-2 w-fit h-fit hover:bg-violet-200/50 focus:bg-violet-600 focus:text-white">
          <TbMoon className="text-2xl" />
        </button> */}
      </nav>
      <button className="hidden md:block bg-gray-100 rounded-full p-2 w-fit h-fit hover:bg-violet-200/50 focus:bg-violet-600 focus:text-white">
        <TbMoon className="text-2xl" />
      </button>

      {/* this div is for collapsing the humberger menu (remove hidden class to check) */}
      {isMenuOpen ? (
        <div className="fixed inset-2 rounded-xl h-fit px-3 py-2 z-10 bg-opacity-95 bg-gradient-to-r from-secondary-dark via-slate-800 to-slate-700 ">
          <div className="flex justify-between items-center ">
            {/* <img
              className="max-w-32"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
              alt=""
            /> */}
            <h1 className="text-white duration-500 text-xl font-medium">
              Rushikesh Wani
            </h1>
            <button
              className="block md:hidden p-1 rounded-2xl duration-300 hover:bg-zinc-700"
              onClick={onClickHandler}
            >
              <FaXmark className="text-white text-2xl" />
            </button>
          </div>
          <div id="items" className="py-7 px-2 text-base text-black">
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Home
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              About Me
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Skills
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Projects
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Contact Me
            </p>
            <button className="my-2 mx-4 border px-2 py-1 rounded-lg text-white bg-amber-600 border-amber-500 md:block duration-300 hover:bg-transparent hover:text-amber-500">
              Download CV
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden inset-2 rounded-xl h-fit px-3 py-2 z-10 bg-secondary-dark shadow-md shadow-slate-400/20">
          <div className="flex justify-between items-center">
            <h1 className="text-white duration-500 text-xl font-medium">
              Rushikesh Wani
            </h1>
            <button
              className=" text-white block md:hidden p-1 rounded-2xl hover:bg-zinc-700"
              onClick={onClickHandler}
            >
              <FaAngleDown className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

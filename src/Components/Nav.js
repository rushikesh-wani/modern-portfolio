import React, { useState } from "react";
import { FaAngleDown, FaXmark } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { PiSunBold } from "react-icons/pi";
import { TbMoon } from "react-icons/tb";
import { Link } from "react-router-dom";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function onClickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="backdrop-filter backdrop-blur-lg bg-white dark:bg-gray-900/50 dark:text-white bg-opacity-40 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 fixed w-screen py-2 sm:py-4 flex justify-between md:justify-around items-center duration-1000">
      <Link to={"/"}>
        <IoLogoNodejs className="w-10 h-10 mx-5 sm:mx-0 hover:text-violet-600 duration-300 cursor-pointer" />
      </Link>
      <div className="flex md:hidden gap-x-2 mx-4">
        <button className="p-1 rounded-2xl text-white bg-violet-600 duration-500">
          {dark ? (
            <PiSunBold className="text-2xl" onClick={() => darkModeHandler()} />
          ) : (
            <TbMoon className="text-2xl" onClick={() => darkModeHandler()} />
          )}
        </button>
        <button
          className="p-1 rounded-2xl text-black dark:text-white duration-500"
          onClick={onClickHandler}
        >
          <CgMenuRight className="text-2xl" />
        </button>
      </div>

      <nav className="hidden font-medium text-black dark:text-white md:flex items-center gap-x-7 ">
        <Link
          to={"/"}
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Home
        </Link>
        <Link
          to={"/about-me"}
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          About Me
        </Link>
        <Link
          to={"/skills"}
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Skills
        </Link>
        <Link
          to={"/projects"}
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to={"/"}
          className="duration-300 font-montserrat hover:text-violet-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Contact Me
        </Link>
        {/* <button className=" bg-gray-100 rounded-full p-2 w-fit h-fit hover:bg-violet-200/50 focus:bg-violet-600 focus:text-white">
          <TbMoon className="text-2xl" />
        </button> */}
      </nav>
      <button
        onClick={() => darkModeHandler()}
        className="hidden md:block rounded-full p-2 w-fit h-fit bg-violet-600 text-white"
      >
        {dark ? (
          <PiSunBold className="text-2xl" />
        ) : (
          <TbMoon className="text-2xl" />
        )}
      </button>

      {/* this div is for collapsing the humberger menu (remove hidden class to check) */}
      {isMenuOpen ? (
        <>
          <div className="backdrop-filter backdrop-blur-sm bg-white dark:bg-gray-950 ease-in duration-300 dark:text-white bg-opacity-95 dark:bg-opacity-95 border-gray-200 dark:border-b-0  fixed inset-1 rounded-xl h-fit py-1">
            <div className="flex justify-between items-center ">
              <IoLogoNodejs className="w-10 h-10 mx-4 sm:mx-0 hover:text-violet-600 duration-300" />

              <div className="flex gap-x-2 mx-3">
                <button
                  onClick={() => darkModeHandler()}
                  className="rounded-full p-1 w-fit h-fit bg-violet-600 text-white"
                >
                  {dark ? (
                    <PiSunBold className="text-2xl" />
                  ) : (
                    <TbMoon className="text-2xl" />
                  )}
                </button>
                <button
                  className="block md:hidden p-1 rounded-2xl duration-300d"
                  onClick={onClickHandler}
                >
                  <FaXmark className="text-2xl" />
                </button>
              </div>
            </div>
            <div
              id="items"
              className="py-7 px-2 text-base text-black dark:text-white"
            >
              <Link
                to={"/"}
                className="block font-montserrat p-4 py-2 rounded-xl duration-300 dark:hover:text-black hover:bg-purple-100"
              >
                Home
              </Link>
              <Link
                to={"/about-me"}
                className="block font-montserrat p-4 py-2 rounded-xl duration-300 dark:hover:text-black hover:bg-purple-100"
              >
                About Me
              </Link>
              <Link
                to={"/skills"}
                className="block font-montserrat p-4 py-2 rounded-xl duration-300 dark:hover:text-black hover:bg-purple-100"
              >
                Skills
              </Link>
              <Link
                to={"/projects"}
                className="block font-montserrat p-4 py-2 rounded-xl duration-300 dark:hover:text-black hover:bg-purple-100"
              >
                Projects
              </Link>
              <Link
                to={"/"}
                className="block font-montserrat p-4 py-2 rounded-xl duration-300 dark:hover:text-black hover:bg-purple-100"
              >
                Contact Me
              </Link>
              <button className="my-2 mx-4 btn-solid py-1 px-3">
                Download CV
              </button>
            </div>
          </div>
        </>
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

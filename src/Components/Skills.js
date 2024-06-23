import React from "react";
import HeroImage from "../asset/rushi.jpg";
import {
  C,
  CSS,
  GitHub,
  HTML,
  Java,
  JavaScript,
  MYSQL,
  MongoDB,
  R,
  ReactJs,
  ReduxJs,
  Tailwind,
  VSCode,
} from "../Constants/Svg";

const Skills = () => {
  return (
    <section className="px-5 md:pt-10 lg:px-40 duration-1000">
      <h1 className="font-montserrat font-medium text-4xl text-center p-5">
        Skills
      </h1>
      <div className="bg-white dark:bg-gray-700/50 shadow-xl flex flex-row flex-wrap sm:flex-nowrap gap-x-1 gap-y-1 sm:gap-x-4 sm:gap-y-2 justify-center items-center py-2 sm:px-28 mx-auto w-full sm:w-fit rounded-lg ">
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          Frontend
        </button>
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          Backend
        </button>
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          Others
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 place-items-center py-4 md:py-10 gap-4">
        <div className="skill-circle bg-sky-200/50 dark:bg-sky-800/50">
          <ReactJs />
        </div>
        <div className="skill-circle bg-violet-200/50 dark:bg-violet-800/50">
          <ReduxJs />
        </div>

        <div className="skill-circle bg-sky-200/50 dark:bg-sky-800/50">
          <Tailwind />
        </div>
        <div className="skill-circle bg-orange-200/50 dark:bg-orange-800/50 ">
          <HTML />
        </div>
        <div className="skill-circle bg-blue-200/50 dark:bg-blue-800/50">
          <CSS />
        </div>
        <div className="skill-circle bg-yellow-200/50 dark:bg-yellow-800/50">
          <JavaScript />
        </div>
        <div className="skill-circle bg-blue-200/50 dark:bg-blue-800/50">
          <Java />
        </div>
        <div className="skill-circle bg-indigo-200/50 dark:bg-indigo-800/50">
          <C />
        </div>
        <div className="skill-circle bg-blue-200/50 dark:bg-blue-800/50">
          <R />
        </div>
        <div className="skill-circle bg-sky-200/50 dark:bg-sky-800/50">
          <VSCode />
        </div>
        <div className="skill-circle bg-stone-200/50 dark:bg-stone-800/50">
          <GitHub className="" />
        </div>
        <div className="skill-circle bg-green-200/50 dark:bg-green-800/50">
          <MongoDB />
        </div>
        <div className="skill-circle bg-neutral-200/50 dark:bg-neutral-800/50">
          <MYSQL />
        </div>
      </div>
    </section>
  );
};

export default Skills;

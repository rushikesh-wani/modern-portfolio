import React from "react";
import HeroImage from "../asset/rushi.jpg";

const Skills = () => {
  return (
    <section className="px-5 md:py-10 lg:px-40 duration-1000">
      <h1 className="font-montserrat font-medium text-4xl text-center p-5">
        Skills
      </h1>
      <div className="bg-white dark:bg-gray-700/50 shadow-xl flex flex-row flex-wrap sm:flex-nowrap gap-x-1 gap-y-1 sm:gap-x-4 sm:gap-y-2 justify-center items-center py-2 sm:px-8 mx-auto w-full sm:w-fit rounded-lg ">
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
    </section>
  );
};

export default Skills;

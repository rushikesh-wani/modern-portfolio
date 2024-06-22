import React from "react";
import HeroImage from "../asset/rushi.jpg";

const Skills = () => {
  return (
    <section className="px-5 md:py-10 lg:px-40">
      <h1 className="font-montserrat font-medium text-4xl text-center p-5">
        Skills
      </h1>
      <div className="flex flex-row flex-wrap sm:flex-nowrap gap-x-1 gap-y-1 sm:gap-x-4 sm:gap-y-2 justify-center items-center py-2 sm:px-8 mx-auto w-fit rounded-lg ">
        <button className="btn-link focus:bg-violet-600 focus:text-white">
          Languages
        </button>
        <button className="btn-link focus:bg-violet-600 focus:text-white">
          Libraries
        </button>
        <button className="btn-link focus:bg-violet-600 focus:text-white">
          DataBases
        </button>
        <button className="btn-link focus:bg-violet-600 focus:text-white">
          Framework
        </button>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import HeroImage from "../asset/rushi.jpg";

const AboutMe = () => {
  return (
    <section className="bg-violet-100/50 dark:bg-gray-900 px-5 md:py-10 lg:px-40 duration-1000">
      <h1 className="font-montserrat font-medium text-4xl text-center p-5">
        About Me
      </h1>
      <div className="md:h-fit flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="left-div ">
          <div className=" relative flex justify-center">
            <div className="w-56 p-2 md:p-5 rounded-xl hover:-translate-y-6 md:hover:-translate-y-10 duration-200 bg-white/50 dark:bg-gray-700/50 shadow-md dark:shadow-2xl md:w-80">
              <img
                src={HeroImage}
                alt="hero-img"
                className="object-cover rounded-xl"
              />
              <h2 className="text-center font-poppins text-violet-900 dark:text-white font-medium text-base md:text-xl mt-1">
                - Rushikesh Wani -
              </h2>
              <p className="text-center font-poppins text-gray-600 dark:text-gray-400 text-sm">
                Pursuing Third year at VIT, Pune
              </p>
            </div>
          </div>
        </div>
        <div className="right-div">
          <div className="flex flex-col gap-1 md:px-5">
            <p className="font-montserrat font-semibold text-3xl md:text-4xl">
              Rushikesh Wani
            </p>
            <p className="px-3 py-1 ring-0 text-xs font-medium font-poppins outline-none bg-violet-200 dark:bg-violet-800/50 text-violet-900 dark:text-white hover:duration-300 rounded-lg w-fit">
              #Frontend Developer
            </p>
            <p className="font-poppins text-sm md:text-base md:py-2">
              Ahoy there! 🎉 I'm a seasoned Full-Stack developer based in Pune,
              India, proudly waving my Information Technology undergrad cape
              from SPPU! 🎓 I've delved into web development since my freshman
              days. 💻 My focus lies in crafting websites and applications that
              seamlessly blend functionality. Oh, and did I mention my love for
              building full-stack clones and side projects?💡It's kind of my
              thing! 🚀
            </p>
            <div className="flex flex-row gap-x-4 py-4">
              <button className="btn-solid w-fit">Download CV</button>
              <button className="btn-link w-fit">Mail Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

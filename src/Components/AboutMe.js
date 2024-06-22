import React from "react";
import HeroImage from "../asset/rushi.jpg";

const AboutMe = () => {
  return (
    <section className="bg-violet-100/50 px-5 md:py-10 lg:px-40">
      <h1 className="font-montserrat font-medium text-4xl text-center p-5">
        About Me
      </h1>
      <div className="md:h-fit flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="left-div ">
          <div className=" relative flex justify-center">
            <div className="w-56 p-5 rounded-xl -rotate-6 hover:rotate-0 duration-200 bg-white shadow-md md:w-80">
              <img
                src={HeroImage}
                alt="hero-img"
                className="object-cover rounded-2xl"
              />
              <h2 className="text-center text-base md:text-xl p-1">
                Rushikesh Wani
              </h2>
            </div>
          </div>
        </div>
        <div className="right-div">
          <div className="flex flex-col gap-1 md:px-5">
            <p className="font-montserrat font-semibold text-2xl md:text-4xl">
              Rushikesh Wani
            </p>
            <p className="font-poppins font-medium text-base bg-violet-200/50 rounded-lg text-violet-900 w-fit py-1 px-3">
              Frontend Developer
            </p>
            <p className="font-poppins py-4">
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

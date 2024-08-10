import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroImage from "../asset/rushi.jpg";
import { LuDownload, LuMail } from "react-icons/lu";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <section className="bg-violet-100/50 dark:bg-gray-900 px-5 md:py-10 lg:px-40 duration-1000">
      <h1 className="font-montserrat font-medium text-4xl text-center py-2">
        About Me
      </h1>
      <div
        ref={ref}
        className="md:h-fit flex flex-col md:flex-row justify-between items-center gap-5"
      >
        <motion.div
          className="left-div"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="relative flex justify-center">
            <div className="w-56 p-2 md:p-5 rounded-xl hover:-translate-y-6 md:hover:-translate-y-10 duration-200 bg-white/50 dark:bg-gray-700/50 shadow-md dark:shadow-2xl md:w-80">
              <motion.img
                src={HeroImage}
                alt="hero-img"
                className="object-cover rounded-xl"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
              />
              <h2 className="text-center font-poppins text-violet-900 dark:text-white font-medium text-base md:text-xl mt-1">
                - Rushikesh Wani -
              </h2>
              <p className="text-center font-poppins text-gray-600 dark:text-gray-400 text-sm">
                Pursuing Third year at VIT, Pune
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="right-div"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex flex-col gap-1 md:px-5">
            <p className="font-montserrat font-semibold text-3xl md:text-5xl">
              Rushikesh Wani
            </p>
            <p className="px-3 py-1 ring-0 text-xs font-medium font-poppins outline-none bg-violet-200 dark:bg-violet-800/50 text-violet-900 dark:text-white hover:duration-300 rounded-lg w-fit">
              #Frontend Developer
            </p>
            <p className="font-poppins text-sm md:text-base md:py-2">
              Hey there! 🎉 I'm a seasoned Full-Stack developer based in Pune,
              India, proudly waving my Information Technology undergrad cape
              from VIT, Pune! 🎓 I've delved into web development since my
              freshman days. 💻 My focus lies in crafting websites and
              applications that seamlessly blend functionality. Oh, and did I
              mention my love for building full-stack clones and side projects?
              💡 It's kind of my thing! 🚀
            </p>
            <div className="flex flex-row gap-x-4 py-4">
              <motion.button
                className="btn-solid w-fit flex items-center gap-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <LuDownload className="text-xl" />
                Download CV
              </motion.button>
              <motion.button
                className="btn-link w-fit flex items-center gap-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <LuMail className="text-xl" /> Mail Me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

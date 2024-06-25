import React from "react";
import HeroImage from "../asset/rushi.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HTMLFloat,
  ReactJsFloat,
  ReduxJsFloat,
  TailwindFloat,
  VSCodeFloat,
} from "../Constants/Svg";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <div
      ref={ref}
      className="bg-gray-100/50 text-black dark:bg-gray-900 dark:text-white duration-1000"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="md:h-screen px-5 pt-20 md:py-20 lg:px-40 flex flex-col-reverse justify-around items-center md:flex-row gap-5"
      >
        <motion.div
          className="left-div w-full md:w-fit"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="pb-5 md:pb-0">
            <p className="font-montserrat text-xl sm:text-3xl md:pb-2">Hey,</p>
            <p className="font-poppins font-semibold text-3xl md:pb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              I'm Rushikesh Wani
            </p>
            <p className="font-montserrat font-medium text-xl sm:text-2xl">
              I am into{" "}
              <span className="text-violet-600 dark:font-semibold">
                Frontend Developer!
              </span>
            </p>
            <p className="font-poppins py-4">
              I focus on developing user-friendly web applications that meet the
              client's requirements, with attention to detail, scalability, and
              performance.
            </p>
            <motion.button
              className="btn-solid w-fit flex items-center gap-x-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="Right-div"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative flex justify-center pt-10 px-10">
            <div className="w-56 md:w-80">
              <img
                src={HeroImage}
                alt="hero-img"
                className="object-cover rounded-full"
              />
            </div>
            <motion.div
              className="absolute top-3 -left-0 w-14 h-14 rounded-full flex justify-center items-center bg-white dark:bg-gray-700/50 shadow-lg dark:shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <TailwindFloat className="" />
            </motion.div>
            <motion.div
              className="absolute top-8 right-8 w-10 h-10 rounded-full flex justify-center items-center bg-white dark:bg-gray-700/50 shadow-xl dark:shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <ReduxJsFloat />
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-2 w-11 h-11 rounded-full flex justify-center items-center bg-white dark:bg-gray-700/50 shadow-lg dark:shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <VSCodeFloat />
            </motion.div>
            <motion.div
              className="absolute bottom-0 md:bottom-10 right-2 md:-right-1 w-14 h-14 rounded-full flex justify-center items-center bg-white dark:bg-gray-700/50 shadow-lg dark:shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <ReactJsFloat />
            </motion.div>
            <motion.div
              className="absolute top-28 md:top-36 -right-3 w-12 h-12 rounded-full flex justify-center items-center bg-white dark:bg-gray-700/50 shadow-lg dark:shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <HTMLFloat />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectList } from "../Constants";

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="px-5 pb-5 md:pb-10 lg:px-40 duration-1000">
      <h1 className="font-montserrat font-medium text-4xl text-center p-5">
        Projects
      </h1>
      <div className="bg-white dark:bg-gray-700/50 shadow-xl flex flex-row flex-wrap sm:flex-nowrap gap-x-1 gap-y-1 sm:gap-x-4 sm:gap-y-2 justify-center items-center py-2 sm:px-28 mx-auto w-full md:w-fit rounded-lg ">
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          All
        </button>
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          Full Stack
        </button>
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          Web UI
        </button>
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          Others
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center py-8 md:py-10 gap-x-6 gap-y-5 md:gap-y-6">
        {ProjectList.map((item) => (
          <ProjectCard key={item.no} item={item} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="relative bg-white h-fit dark:bg-gray-700/50 p-3 rounded-xl shadow-lg hover:-translate-y-4 md:hover:-translate-y-5 hover:duration-300"
    >
      <div className="absolute top-2 left-2 flex gap-x-2">
        <div className="h-3 w-3 rounded-full bg-red-600"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-600"></div>
      </div>
      <div className="w-full h-44 md:h-48 mt-4">
        <img
          src={item.Img}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex gap-x-2 my-1">
        {item.Tags.map((tag) => (
          <p
            key={tag}
            className="px-3 py-1 ring-0 text-xs font-medium font-poppins outline-none bg-violet-50 dark:bg-violet-800/50 text-violet-900 dark:text-white hover:duration-300 rounded-lg"
          >
            #{tag}
          </p>
        ))}
      </div>
      <h1 className="mt-2 text-xl font-poppins font-medium text-violet-800 dark:text-white">
        {item.ProjectTitle}
      </h1>
      <p className="font-poppins text-gray-500 dark:text-gray-400 text-sm my-2">
        {item.ProjectDescrp}
      </p>
      <div className="flex justify-around gap-x-4 my-1">
        <button className="text-violet-900 dark:text-white px-4 py-1 font-poppins rounded-md font-medium ring-0 bg-violet-200/50 dark:bg-violet-600 focus:duration-300 focus:bg-violet-100/50 border dark:border-none dark:focus:bg-violet-500 border-violet-100 focus:border-violet-800">
          Live link
        </button>
        <button className="text-violet-900 dark:text-white px-4 py-1 font-poppins rounded-md font-medium ring-0 bg-violet-200/50 dark:bg-violet-600 focus:duration-300 focus:bg-violet-100/50 border dark:border-none dark:focus:bg-violet-500 border-violet-100 focus:border-violet-800">
          Code
        </button>
      </div>
    </motion.div>
  );
};

export default Projects;

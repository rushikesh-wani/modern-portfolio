import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SkillList } from "../Constants";

const Skills = () => {
  return (
    <section className="px-5 md:pt-10 lg:px-40 duration-1000">
      <h1 className="font-montserrat font-medium text-4xl text-center p-5">
        Skills
      </h1>
      <div className="bg-white dark:bg-gray-700/50 shadow-xl flex flex-row flex-wrap sm:flex-nowrap gap-x-[2px] gap-y-1 sm:gap-x-4 sm:gap-y-2 justify-center items-center py-2 sm:px-28 mx-auto w-full sm:w-fit rounded-lg ">
        <button className="font-poppins font-medium text-base focus:bg-violet-200/50 dark:focus:bg-violet-900/50 rounded-lg text-violet-900 dark:text-white w-fit py-1 px-3">
          All
        </button>
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

      <div className="grid grid-cols-3 sm:grid-cols-6 place-items-center py-4 md:py-10 gap-x-4 gap-y-4">
        {SkillList.map(({ id, component, label, bgClass }) => (
          <SkillCard
            key={id}
            component={component}
            label={label}
            bgClass={bgClass}
          />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ component, label, bgClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeTop = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeTop}
      className="text-center"
    >
      <div className={`skill-circle ${bgClass}`}>{component}</div>
      <p className="font-poppins">{label}</p>
    </motion.div>
  );
};

export default Skills;

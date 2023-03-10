import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center `}>My Skills</p>
          <h2 className={`${styles.sectionHeadText} text-center `}>Technologies.</h2>
        </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-5'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            {technology.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
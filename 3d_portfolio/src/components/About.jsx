import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='sm:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      
      <div className={`flex xl:flex-row flex-col-reverse overflow-hidden items-center justify-around`}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-5 text-secondary text-[17px] max-w-2xl leading-[30px] flex-[0.75]'
        >
          Hi there,
          <br></br>
          I'm a skilled software developer knowledgeable in JavaScript, Java, and Python, and a passion for frontend development and UI design. 
          I'm a quick learner and enjoy collaborating closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. 
          I have expertise with React.js framework and I am committed to staying up-to-date with the latest technologies and best practices in the field.
          <br></br>
          <br></br>
          I am a bilingual individual fluent in both English and Vietnamese. 
          I have a background in the medical field, but have transitioned into tech industry so that I can express my creativity through programming. 
          I have a passion for coding and climbing, and enjoy pursuing activities that challenge both mentally and physically. 
          With my diverse skill set and interests, I can contribute to a wide range of projects and teams.
        </motion.p>
        
        <div className="sm:w-[285px] w-full mt-5">
          <Tilt>
            <motion.div
              variants={fadeIn("", "", 0.1, 1)}
              className='w-full green-pink-gradient p-[3px] rounded-[20px] shadow-card'
            >
              <img
              src='src\assets\profilePic.jpg'
              alt='profile-pic'
              className='object-contain rounded-[20px]'
            />
            </motion.div>
          </Tilt>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
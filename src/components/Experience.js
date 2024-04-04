import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {

const ref=useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] ">

<LiIcon reference={ref}/>

      <motion.div
      
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring "}}
      
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });


  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 width-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark
          origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend-developer"
            company="GoPerch"
            companyLink="https://www.linkedin.com/company/goperch-in/?originalSubdomain=in"
            time="2024-Present"
            address="Manipal, Karnataka"
            work="As a current Frontend Developer at GoPerch, a startup located in Manipal, I am actively involved in the development of responsive websites from the ground up. My role revolves around creating seamless user experiences across both mobile and desktop platforms. By translating design concepts into functional code, I play a vital part in driving the success of our web development projects."
          />

          <Details
            position="Frontend-developer"
            company="Glitch"
            companyLink="https://www.instagram.com/glitch_manipal/"
            time="Freelancing"
            address="Manipal, Karnataka"
            work="
            I've developed a dynamic webpage for Glitch, a gaming house in Manipal. It tracks customer playtime, manages food orders, and automates bill generation. This streamlined platform enhances operational efficiency and ensures a seamless experience for both customers and staff.
            "
          />

          <Details
            position="Frontend-Intern"
            company="IIT Kharagpur's Space Technology Student Society"
            companyLink="https://www.linkedin.com/in/prasanna-bhat-b259ba285/overlay/1709010184275/single-media-viewer/?profileId=ACoAAEVhwM0B43V2joC7qgq8el7Bz96kmalpYKg"
            time="3-Weeks"
            address="Online"
            work="
            I completed a 3-week web development course by IIT Kharagpur's Space Technology Student Society. I built three websites: a portfolio, a restaurant site, and a to-do task platform.These projects allowed me to refine my skills in frontend and backend development while creating practical and user-friendly web solutions.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

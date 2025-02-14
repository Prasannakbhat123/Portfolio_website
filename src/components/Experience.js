import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring " }}
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
    <div className="my-64 md:my-16">
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
  position="Samsung Prism Intern"
  company="Samsung R&D, Bangalore"
  companyLink="https://www.linkedin.com/company/samsungrndindiabangalore/posts/?feedView=all"
  time="November-2024-Present"
  address="Remote"
  work="As a Web Developer Intern at Samsung R&D, I am part of a dynamic team responsible for creating and optimizing a web-based platform that facilitates multi-view image segmentation and correction. I collaborate with cross-functional teams to develop software tools that streamline complex image data processing, ensuring seamless integration and user-friendly experiences. My role involves working with modern web technologies to build a responsive and efficient website for research and development purposes."
/>

<Details
  position="Fullstack Developer Intern"
  company="Eventory"
  companyLink="https://www.eventory.in/"
  time="Internship"
  address="Remote"
  work="
  Working with the development team to build and enhance various pages in the dashboard and user profiles. Utilizing Next.js, Tailwind CSS, and MongoDB to develop dynamic, responsive web pages. Implemented features for improved user interaction and efficient data handling in the platform. Ensured seamless user experience and optimized performance across the application."
/>

          <Details
            position="Frontend-developer"
            company="GoPerch"
            companyLink="https://www.linkedin.com/company/goperch-in/?originalSubdomain=in"
            time="January-2024-Present"
            address="Manipal, Karnataka"
            work="As a current Frontend Developer at GoPerch, a startup located in Manipal, I am actively involved in the development of responsive websites from the ground up. My role revolves around creating seamless user experiences across both mobile and desktop platforms. By translating design concepts into functional code, I play a vital part in driving the success of our web development projects."
          />

          <Details
            position="Web-Developer Intern"
            company="Thapy"
            companyLink="https://www.thapy.in/"
            time="june-october-2024"
            address="Remote"
            work="As a Frontend Developer intern at Thapy, I contributed to building the website using React.js and Tailwind CSS. I collaborated closely with backend developers to ensure seamless integration and designed the complete user interface to provide an intuitive user experience."
          />

          <Details
            position="Frontend Developer"
            company="Zodiactech Software IT Services Pvt. Ltd."
            companyLink="https://zodiac-tech-website.vercel.app"
            time="2024"
            address="Freelancing"
            work="Commissioned to develop the official website for Zodiactech, a prominent software and IT services company. The website was built using React.js and showcases their key projects, services, and expertise in IT solutions, providing an engaging and comprehensive user experience."
          />

          <Details
            position="Frontend-developer"
            company="Glitch"
            companyLink="https://www.instagram.com/glitch_manipal/"
            time="2024"
            address="Freelancing"
            work="
            I've developed a dynamic webpage for Glitch, a gaming house in Manipal. It tracks customer playtime, manages food orders, and automates bill generation. This streamlined platform enhances operational efficiency and ensures a seamless experience for both customers and staff.
            "
          />

<Details
  position="Web Developer"
  company="MIT Manipal Student Council"
  companyLink="https://www.manipal.edu/mit/mit-experience/student-welfare/student-council---mit--manipal-academy-of-higher-education.html"
  time="Current"
  address="Remote"
  work="
  Working as a Web Developer with the MIT Manipal Student Council, collaborating on projects aimed at solving various challenges faced by the college community. Developing and maintaining web solutions that address student needs and improve campus life, while ensuring smooth user experiences and functionality."
/>


<Details
  position="Web Developer & Management Member"
  company="Thrust MIT"
  companyLink="https://www.thrustmit.in" 
  time="October-2024-Present"
  address="Manipal, India"
  work="Serving as a Web Developer and Management Member at Thrust MIT, India's leading student-led rocket team and a top team in Asia. I am currently redesigning the team’s website using React, with the goal of enhancing user experience and showcasing the team’s achievements and projects effectively."
/>


          <Details
            position="Frontend Developer"
            company="Nara Constructions"
            companyLink="https://www.naraconstructions.in/"
            time="2024"
            address="Freelancing"
            work="As a Frontend Developer at Nara Constructions, I developed the website using WordPress and Elementor, focusing on showcasing the company’s tunneling projects across the nation. The site highlights their expertise and includes detailed team profiles to provide visitors with in-depth insights into the company’s capabilities."
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

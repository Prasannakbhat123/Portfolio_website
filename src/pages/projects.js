import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/portfolio.png";
import project2 from "../../public/images/projects/login.png";
import project3 from "../../public/images/projects/glitch.png";
import project4 from "../../public/images/projects/goperch.png";
import project5 from "../../public/images/projects/nirvana.png";
import project6 from "../../public/images/projects/cosmic.png";
import project7 from "../../public/images/projects/iPhone.png";
import project8 from "../../public/images/projects/zodiactech.png";
import project9 from "../../public/images/projects/nara.png";
import TransitionEffect from "@/components/TransitionEffect";

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4">

<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank>"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto border border-solid border-dark rounded-xl dark:border-light" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark
        lg:text-lg md:text-base ">{type}</span>
        <Link
          href={link}
          target="_blank>"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

       
        <div className="w-full mt-2 flex items-center justify-between">

        <Link
            href={link}
            target="_blank>"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank>" className="w-8 md:w-6">
            {" "}
            <GithubIcon />
          </Link>

        </div>
      </div>
    </article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank>"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto border border-solid border-dark rounded-xl dark:border-light" 
        priority
        sizes="(max-width:768px) 100vw,
        (max-width:1200px) 50vw,
        50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full
      lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark
        xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank>"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold
          dark:text-light sm:text-sm">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank>" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank>"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Prasanna | Projects Page</title>
        <meta name="description" content="Discover a captivating collection of frontend projects by Prasanna, an engineering student from MIT Manipal, showcasing expertise in HTML, CSS, JavaScript, and frontend frameworks. From dynamic web applications to stunning UI/UX designs, each project demonstrates creativity, technical skills, and a commitment to excellence in frontend development. Elevate your digital presence with compelling solutions that leave a lasting impression."></meta>
      </Head>
      <TransitionEffect/>

      <main className="w-full mb-16 flex flex-col items-center justify-center
      dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps knowledge!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Portfolio Website"
                img={project1}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="/"
                type="Featured Project"
                github="https://github.com/Prasannakbhat123/Portfolio_website"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
            <Project
                title="GoPerch Home Page"
                img={project4}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="https://goperch-home.netlify.app/"
                type="Project"
                github="https://github.com/Prasannakbhat123/GoPerch-Home"
              />
            </div>

            <div className="col-span-6 sm:col-span-12"><Project
                title="Login / Register Page"
                img={project2}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="https://goperch-login.netlify.app"
                type="Project"
                github="https://github.com/Prasannakbhat123/GoPerch_login"
              /></div>

<div className="col-span-12">
  <FeaturedProject
    title="Zodiactech Website"
    img={project8}
    summary="Commissioned to develop the official website for Zodiactech Software IT Services Pvt. Ltd., a prominent software and IT company. The website, built with React.js, highlights their key projects, offered services, and industry expertise, providing a comprehensive overview for potential clients and partners."
    link="https://zodiac-tech-website.vercel.app/"
    type="Featured Project"
    github="https://github.com/Prasannakbhat123/zodiac_tech_website"
  />
</div>


           

            <div className="col-span-6 sm:col-span-12"><Project
                title="Hotel Nirvana"
                img={project5}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="https://hotel-nirvana-react.netlify.app"
                type="Project"
                github="https://github.com/Prasannakbhat123/Hotel-Nirvana/tree/main"
              /></div>

            <div className="col-span-6 sm:col-span-12"><Project
                title="Cosmicbytes"
                img={project6}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="https://cosmicbytes.netlify.app"
                type="Project"
                github="https://github.com/Prasannakbhat123/Cosmicbytes-website"
              /></div>

<div className="col-span-12">
  <FeaturedProject
    title="Nara Constructions Website"
    img={project9}
    summary="Developed with WordPress and Elementor to showcase the company’s expertise in tunneling projects nationwide. Integrated comprehensive team profiles to provide visitors with in-depth insights into Nara Constructions' capabilities and team."
    link="https://www.naraconstructions.in"
    type="Featured Project"
    github="/"
  />
</div>


<div className="col-span-6 sm:col-span-12"><Project
                title="Glitch Website"
                img={project3}
                summary="Designed a website for Glitch, a gaming house in Manipal. It enables the management team to track entry/exit times, handle food orders, and create invoices for customers, streamlining operations and improving the customer experience."
                link="https://glitch-entrypage.netlify.app/"
                type="Project"
                github="https://github.com/Prasannakbhat123/Portfolio_website"
              /></div>

<div className="col-span-6 sm:col-span-12"><Project
                title="iPhone Clone Website"
                img={project7}
                summary="Created a clone of the iPhone 15 Pro website using React, Three.js, and GSAP. The site features an interactive 3D model of the iPhone 15 Pro with smooth animations and responsive design, closely mirroring the official website for an engaging user experience."
                link="https://iphone-website-clone-six.vercel.app/"
                type="Project"
                github="https://github.com/Prasannakbhat123/iPhone_website-clone"
              /></div>

            {/* <div className="col-span-12"> <FeaturedProject
                title="iPhone Clone Website"
                img={project7}
                summary="Created a clone of the iPhone 15 Pro website using React, Three.js, and GSAP. The site features an interactive 3D model of the iPhone 15 Pro with smooth animations and responsive design, closely mirroring the official website for an engaging user experience."
                link="https://iphone-website-clone-six.vercel.app/"
                type="Featured Project"
                github="https://github.com/Prasannakbhat123/iPhone_website-clone"
              /></div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

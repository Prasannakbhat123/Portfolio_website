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

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">

<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank>"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto border border-solid border-dark rounded-xl" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank>"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

       
        <div className="w-full mt-2 flex items-center justify-between">

        <Link
            href={link}
            target="_blank>"
            className=" text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank>" className="w-8">
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
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">

<div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank>"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto border border-solid border-dark rounded-xl" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank>"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank>" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank>"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
        <meta name="description" content="showcasing All my projects"></meta>
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
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

            <div className="col-span-6">
            <Project
                title="GoPerch Home Page"
                img={project4}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="/"
                type="Featured Project"
                github="https://github.com/Prasannakbhat123/GoPerch-Home"
              />
            </div>

            <div className="col-span-6"><Project
                title="Login / Register Page"
                img={project2}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="/"
                type="Featured Project"
                github="https://github.com/Prasannakbhat123/GoPerch_login"
              /></div>

            <div className="col-span-12"> <FeaturedProject
                title="Glitch Website"
                img={project3}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="/"
                type="Featured Project"
                github="https://github.com/Prasannakbhat123/Portfolio_website"
              /></div>

            <div className="col-span-6"><Project
                title="Hotel Nirvana"
                img={project5}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="https://hotel-nirvana-react.netlify.app"
                type="Featured Project"
                github="https://github.com/Prasannakbhat123/Hotel-Nirvana/tree/main"
              /></div>

            <div className="col-span-6"><Project
                title="Cosmicbytes"
                img={project6}
                summary="Crafted with Next.js and Tailwind CSS, my responsive portfolio website succinctly introduces my skills, projects, and professional journey. Designed for optimal user experience, it showcases my expertise in frontend development while highlighting my commitment to modern design principles."
                link="https://cosmicbytes.netlify.app"
                type="Featured Project"
                github="https://github.com/Prasannakbhat123/Cosmicbytes-website"
              /></div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

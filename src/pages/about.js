import Head from "next/head";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/about.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Prasanna | About Page</title>
        <meta name="description" content="Explore the creative journey of Prasanna, a passionate frontend developer from MIT Manipal, dedicated to crafting immersive digital experiences. Delve into innovative web designs, responsive layouts, and seamless user interactions showcasing expertise in HTML, CSS, JavaScript, and modern frontend frameworks. Elevate your digital presence with compelling projects that reflect creativity, technical prowess, and a commitment to excellence in frontend development"></meta>
      </Head>
      <TransitionEffect/>
      <main
        className="flex  w-full flex-col items-center justify-center
      dark:text-light"
      >
        <Layout className="pt-16 px-16 ">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-[5rem] mb-16 lg:!text:7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2
                className="mb-4 text-lg font-bold uppercase text-dark/75
              dark:text-light/75"
              >
                About Me
              </h2>

              <p className="font-medium">
                Hey there, I&apos;m Prasanna – exploring the digital frontiers at
                GoPerch as a frontend developer.With a passion for blending
                aesthetics and functionality, I&apos;m on a mission to craft
                experiences that leave a lasting impression.For me, design is a
                symphony of problem-solving and creativity, where each pixel
                tells a story of innovation and user-centricity.
              </p>

              <p className="my-4 font-medium">
                When I&apos;m not coding, you&apos;ll find me immersed in the world of
                art, painting vibrant landscapes that mirror the colors of my
                imagination. And when the mood strikes, I&apos;m a strategic thinker
                on the chessboard, plotting my next move with finesse.
              </p>

              <p className="font-medium">
                Life&apos;s a canvas, and I&apos;m here to paint it with passion and
                purpose, one pixel at a time!{" "}
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-7 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="Prasanna"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75
                dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75
                dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75
                dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;

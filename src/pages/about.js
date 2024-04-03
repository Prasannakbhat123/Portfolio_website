import Head from "next/head";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/pkb-abt.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

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
        <meta name="description" content="About-myself"></meta>
      </Head>
      <main className="flex  w-full flex-col items-center justify-center">
        <Layout className="pt-16 px-16 ">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-[5rem] mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About&nbsp;Me
              </h2>

              <p className="font-medium">
                Hey there, I'm Prasanna – exploring the digital frontiers at
                GoPerch as a frontend developer.With a passion for blending
                aesthetics and functionality, I'm on a mission to craft
                experiences that leave a lasting impression.For me, design is a
                symphony of problem-solving and creativity, where each pixel
                tells a story of innovation and user-centricity.
              </p>

              <p className="my-4 font-medium">
                When I'm not coding, you'll find me immersed in the world of
                art, painting vibrant landscapes that mirror the colors of my
                imagination. And when the mood strikes, I'm a strategic thinker
                on the chessboard, plotting my next move with finesse.
              </p>

              <p className="font-medium">
                Life's a canvas, and I'm here to paint it with passion and
                purpose, one pixel at a time!{" "}
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-7">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Prasanna"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />

          <Experience />
          <Education/>
        </Layout>
      </main>
    </>
  );
};

export default About;

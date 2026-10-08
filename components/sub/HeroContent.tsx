"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      id="about-me"
      initial="hidden"
      animate="visible"
      className="relative z-[20] mt-28 flex w-full scroll-mt-24 flex-col items-center justify-center gap-10 px-6 md:mt-40 md:flex-row md:px-12 lg:px-20"
    >
      <div className="flex w-full min-w-0 flex-col justify-center gap-5 text-start md:w-1/2">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex w-fit items-center rounded-lg border border-[#000000] px-3 py-2 opacity-[0.9]"
        >
          <SparklesIcon
            aria-hidden="true"
            className="mr-2 h-5 w-5 shrink-0 text-white"
          />
          <p className="Welcome-text text-sm font-bold text-white sm:text-base">
            Welcome To My Portfolio
          </p>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="mt-6 max-w-[600px] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Hi! I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Orator Murambiwa
          </span>
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          I&apos;m a Software Engineer with experience in 
          full-stack development, AI/Machine Learning, distributed computing, Data Analytics and 
          software for scientific research.
        </motion.p>

        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          className="button-primary inline-flex w-fit items-center justify-center rounded-lg border border-purple-500/50 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          Explore My Projects
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full items-center justify-center md:w-1/2"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Illustration of development tools and technologies"
          height={650}
          width={650}
          sizes="(max-width: 767px) 100vw, 50vw"
          priority
          className="h-auto w-full max-w-[500px] lg:max-w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
     <h2 className="lg:text-2xl sm:text-xl  uppercase text-cyan">
       Full Stack Developer
     </h2>
     <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold font-special uppercase">
     Govind Singh  Shekhawat
      </h1>
      
    <p className="text-lg mt-4 text-white">
        A Passionate Full Stack Developer and AI researcher <br /> with 1.5 years of
        expertise in building scalable <br />web applications and AI-driven solutions
        </p>
    </div>
  );
};

export default HeroText;

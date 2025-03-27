import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { LiaSquareFullSolid } from "react-icons/lia";




import React from "react";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="/images/myname.png"
        alt="Govind Singh "
        className="max-h-[345px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
      <LiaSquareFullSolid
      className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;

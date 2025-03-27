
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

const experiences = [
  {
    job: "Assoc. Software Developer",
    company: "Innovex Automation",
    date: "2022 - 2023",
    responsibilities: [
      "Participating in industrial automation scale application.",
      "Developed software to automate industrial processes, using the SCADA and HMI.",
      "Working on the performance of energy web applications.",
      
    ],
  },
  {
    job: "Tech. Support Engineer",
    company: "Stegpearl",
    date: "2023 - 2024",
    responsibilities: [
      "Trained chatbots using Google Dialogflow to improve customer support responses.",
      "fixing bugs and enhancing functionality for better performance.",
      "Worked closely with developer and product teams.",
    ],
  },
  {
    job: "Frontend Developer",
    company: "Onekey Consultancy",
    date: "2024 - Present",
    responsibilities: [
      "Developed & maintained websites, fixing bugs and enhancing performance.",
      "Diagnosed frontend issues to improve functionality and user experience.",
      "Collaborate with backend teams for feature integration and data flow.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

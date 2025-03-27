import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Stegpearl Chatbot",
    year: "June 2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://stegback.com/en",
  },
  {
    name: "Spotify E-commerce",
    year: "October 2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://fullstack-ecommerce.netlify.app/",
  },
  {
    name: "TravelHawk",
    year: "April 2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Pluetech",
    year: "May 2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;

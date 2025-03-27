import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      👋 I’m Govind Singh Shekhawat, a Full-Stack Web Developer & AI Researcher passionate about coding, AI, and emerging technologies.📱 I stay updated with the latest AI & tech trends and focus on building real-world projects while mastering modern web & AI technologies.

🚀 I also run an AI-focused Instagram & YouTube channel, where I share updates on the latest advancements in AI and web technologies.

📚 Beyond coding, I am dedicated to continuous learning and knowledge-sharing, inspiring others to achieve their goals in tech.🎯
      </p>
      <button className="relative border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 
                   overflow-hidden transition-all duration-500 cursor-pointer md:self-start sm:self-center 
                   before:absolute before:inset-0 before:bg-orange before:translate-y-full 
                   before:transition-transform before:duration-500 hover:before:translate-y-0">
  
  <span className="relative z-10">
    <Link
      spy={true}
      smooth={true}
      duration={500}
      offset={-120}
      to="projects"
      className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
    >
      My Projects
    </Link>
  </span>

</button>
    </div>
  );
};

export default AboutMeText;

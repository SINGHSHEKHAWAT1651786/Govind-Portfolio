
import NavbarMain from "./components/navbar/NavbarMain"
import HeroMain from "./components/heroSection/HeroMain"; 
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import HelperSection from "./components/HelperSection";
import ProjectMain from "./components/projectsSection/ProjectsMain";
import FooterMain from "./components/footer/FooterMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain/>
      <HeroGradient/>
     <SubHeroSection/>
     <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <HelperSection/>
    <ProjectMain/>
    <ContactMeMain/>
    <FooterMain/>
    </main>
  );
}

export default App;

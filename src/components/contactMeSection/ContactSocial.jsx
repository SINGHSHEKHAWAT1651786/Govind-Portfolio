import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/singhshekhawat1651786/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/SINGHSHEKHAWAT1651786" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/WHite_HAwk007/" Icon={TbBrandLeetcode} />
    </div>
  );
};

export default ContactSocial;

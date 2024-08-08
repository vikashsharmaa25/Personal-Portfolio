import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/vikashsharmaa25" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/vikashsharmaa25/" },
  { icon: FaInstagram, href: "https://www.instagram.com/vikashsharmaa25" },
  {
    icon: FaTwitter,
    href: "https://x.com/VikashShar25127?t=cszD1ACDhY9z_eLcGm9gAQ&s=09",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 10 : -10 }}
          className="text-teal-300 hover:text-teal-400 transition-all duration-300"
        >
          <social.icon size={28} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;

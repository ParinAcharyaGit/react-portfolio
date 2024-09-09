import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="bg-black mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        {/* Image here */}
      </div>
      <div className="m-8 flex gap-3 text-2xl">
        <a href="https://www.linkedin.com/in/parinacharya" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="darkblue" />
        </a>
        <a href="https://github.com/ParinAcharyaGit" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="white" />
        </a>
        <a href="https://instagram.com/par1n.5" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color="violet" />
        </a>     
      </div>
    </nav>
  );
};

export default Navbar

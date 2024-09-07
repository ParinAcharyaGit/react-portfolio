import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="bg-black mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Image here */}
      </div>
      <div className="m-8 flex gap-3 text-2xl">
        <FaLinkedin color="darkblue"/>
        <FaGithub color = "white"/>
        <FaInstagram color = "violet"/>
        
      </div>
    </nav>
  );
};

export default Navbar

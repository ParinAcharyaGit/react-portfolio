import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: 0, opacity: 0 }, // Start slightly off-screen
    visible: {
      x: 100, // End at the original position
      opacity: 1,
      transition: { duration: 1.5, delay } // Dynamic delay
    }
  });
const Hero = () => {
  return (
    <div className="pb-5 lg:mb-30">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="pb-5 text-4xl font-thin tracking-tight lg:text-6xl">
              <motion.h1
                variants={container(1)}
                animate="visible"
                className="text-white"
              >
                Parin Acharya
              </motion.h1>
              <motion.span
              variants={container(0)}
              animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text font-bold text-4xl tracking-tight text-transparent"
              >
                AI/ML Enthusiast
              </motion.span>
            </div>
            <motion.p

              className="my-2 text-white max-w-xl py-4 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center lg:p-3">
          <motion.img

            src={profilePic}
            alt="Parin Acharya"
            className="object-contain w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

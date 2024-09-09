import { ABOUT_TEXT } from "../constants";
import profilePic from "../assets/me.jpeg";
import aboutPic from "../assets/aboutimg.jpeg";
import { motion } from "framer-motion";

const About = () => {
    return(
        <div>
            <h2 className="py-7 font-thick text-center text-white text-3xl">
                About <span className="font-thin">me</span>
            </h2>
            <div className = "flex flex-wrap">
                <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-center lg:p-3">
                    <img
                        src={aboutPic}
                        alt="About me"
                        className="rounded-xl object-contain w-1/2"
                    />
                </motion.div>
                <motion.div

                className="w-full lg:w-1/2 lg:p-8">
                    <div className="max-w-xl items-center justify-center text-white">
                        {ABOUT_TEXT}
                    </div>
                </motion.div>
            </div>
            
        </div>
    );
};

export default About;
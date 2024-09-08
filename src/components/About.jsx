import { ABOUT_TEXT } from "../constants";
import profilePic from "../assets/me.jpeg";
import aboutPic from "../assets/aboutimg.jpeg";

const About = () => {
    return(
        <div>
            <h1 className="py-10 text-center text-white text-3xl font-thin">About me</h1>
            <div className = "flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="items-center justify-center text-white">
                        {ABOUT_TEXT}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-center lg:p-3">
                            <img
                                src={aboutPic}
                                alt="Parin Acharya"
                                className="object-contain w-1/2"
                            />
                        </div>
            </div>
            
        </div>
    );
};

export default About;
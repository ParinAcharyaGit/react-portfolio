import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me.jpeg";

const Hero = () => {
  return (
    <div className = "pb-5 lg:mb-30">
        <div className="flex flex-wrap">
            <div className = "w-full lg:w-1/2">
                <div className = "flex flex-col items-center lg:items-start">
                    <div className="pb-5 text-4xl font-thin tracking-tight lg:text-6xl">
                        <h1 className = "text-white" >Parin Acharya</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text font-bold text-4xl tracking-tight text-transparent">
                            AI/ML Enthusiast
                        </span>
                    </div>
                    <p className="my-2 text-white max-w-xl py-4 font-light">{HERO_CONTENT}</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-center lg:p-3">
                <img
                    src={profilePic}
                    alt="Parin Acharya"
                    className="object-contain w-1/2"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero

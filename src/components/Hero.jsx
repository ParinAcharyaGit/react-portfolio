import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className = "pb-4 lg:mb-35">
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
                    <p className="my-2 text-white max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

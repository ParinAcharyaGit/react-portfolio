import { experiences } from "../constants"
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div>
      <h2 className="my-10 text-center text-4xl text-white font-bold">My experiences</h2>
      <div>
        {experiences.map((experience, index) => (
          <div key = {index} className="flex flex-wrap lg:justify-center">
            <motion.div 
            className="w-full lg:w-1/4">
              <p className="mb-4 text-sm text-white">{experience.year}</p>
            </motion.div>

            <div className="w-full max-w-xl lg:w-3/4 text-white">
              <div className="mb-4 font-semibold hover:opacity-50 transition-opacity duration-300 text-purple-900">
                {experience.role} - {" "}
                <span className="text-sm">
                  {experience.company}
                </span>
                <h6></h6>
                <div className="font-thin text-white">{experience.description}</div>
                  {experience.technologies.map((tech, index) => (
                    <span key = {index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-500">
                      {tech}
                    </span>
                  ))}

              </div>
            </div>

          </div>
        ))};
      </div>
    </div>
  )
}

export default Experience

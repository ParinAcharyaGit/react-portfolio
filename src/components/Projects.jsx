import {PROJECTS} from "../constants";

const Projects = () => {
    return (  
        <div>
            <h2 className="my-10 text-center text-4xl text-white font-bold">My Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key = {index} className = "mb-8 flex flex-wrap lg:justify-center hover:opacity-50 transition-opacity duration-300">
                        <div className = "w-full lg:w-1/4">
                            <img src = {project.image} width={150} height={150} alt = "{project.title}" className="mb-6 rounded"/>
                        </div>

                        <div className="w-full max-w-xl lg:w-3/4 text-white">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 font-thin">
                                {project.description}
                            </p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-500">
                                    {tech}
                                </span>

                            ))}
                        </div>

                    </div>
                ))};
            </div>
        </div>
    );
};

export default Projects;
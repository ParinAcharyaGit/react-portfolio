import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate computer scientist with a knack for crafting robust and scalable web applications. With 3+ years of hands-on experience, I have honed my skills in front-end and back-end technologies. My goal is to leverage my expertise to create innovative solutions using AI/ML.`;

export const ABOUT_TEXT = `I am an IB Diploma graduate from Kenya with an unwavering passion for technology. My dedication is fueled by the realization of the transformative power of algorithms and Artificial Intelligence.`;

export const experiences = [
  {
    year: "2024",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023",
    role: "Software Intern (High School)",
    company: "Diamond Trust Bank",
    description: `Interacted with professionals on the process workflows and proposed a software module for digital card processing.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2022 - Present",
    role: "Full Stack Developer",
    company: "Indepedent",
    description: `Developed and maintained web applications using  React.js. Designed and implemented RESTful APIs for data communication.`,
    technologies: ["Python", "Flask", "SQLite"],
  },
  {
    year: "2022 - Present",
    role: "Independent Researcher",
    company: "IBM Quantum Labs",
    description: `explored the vulnerabilities of contemporary cryptographic algorithms to Shor's quantum factoring algorithm, deepening my understanding of the future challenges in cybersecurity.`,
    technologies: ["Python", "Flask", "SQLite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Application",
    image: project1,
    description:
      "A fully functional app with inventory control, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "Java", "MySQL"],
  },
  {
    title: "NLP Sentiment Analysis Web Service",
    image: project2,
    description:
      "An AI application for analysing and scoring textual sentiment, build with IBM Watson NLP Library.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Eldoret, Kenya",
  phoneNo: "+12 4555 666 00 ",
  email: "acharyaparin05@gmail.com",
};

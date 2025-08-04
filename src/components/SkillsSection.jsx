import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiGit,
  SiVuedotjs,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const technicalLanguages = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Java", icon: <DiJava /> },
];

const toolsAndFrameworks = [
  { name: "React", icon: <SiReact /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Vercel", icon: <SiVercel /> },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Technical <span className="text-primary">Skills</span>
        </h2>

        {/* Technical Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold">Technical Languages</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {technicalLanguages.map((skill, index) => (
              <div
                key={index}
                className="w-27 h-27 bg-card shadow-md flex items-center justify-center text-5xl text-primary hover:scale-110 transition-transform"
                title={skill.name}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Frameworks */}
        <div>
          <h3 className="text-2xl font-semibold">Tools and Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {toolsAndFrameworks.map((skill, index) => (
              <div
                key={index}
                className="w-27 h-27 bg-card shadow-md flex items-center justify-center text-5xl text-primary hover:scale-110 transition-transform"
                title={skill.name}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

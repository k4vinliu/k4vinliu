import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "StudyPal",
    description: "An AI-powered web app that generates flashcards from study notes to help students learn more efficiently.",
    image: "/projects/project3.png",
    tags: ["TypeScript", "CSS", "JavaScript", "Tailwind CSS", "React", "Next.js"],
    githubUrl: "https://github.com/k4vinliu/StudyPal",
  },
  {
    id: 2,
    title: "Peas in a Pod",
    description:
      "An AI-powered teammate-matching app that intelligently connects hackathon participants into compatible teams based on their skills, interests, and personalities.",
    image: "/projects/project4.png",
    tags: ["TypeScript", "JavaScript", "React Native"],
    githubUrl: "https://github.com/ajalfonso/HackPods",
  },
  {
    id: 3,
    title: "Linkeducations",
    description:
      "An interactive online forum where students can ask math questions, get detailed answers, and engage in peer learning through over 500 discussion threads moderated by volunteer tutors.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    githubUrl: "https://github.com/k4vinliu/linkeducations",
  },
  {
    id: 4,
    title: "QuickCite",
    description:
      "A lightweight Chrome extension that instantly generates accurate MLA citations for any webpage with a single click, streamlining research for students and writers.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Vue.js"],
    githubUrl: "https://github.com/k4vinliu/QuickCite",
  },
  {
    id: 5,
    title: "Wall Punching Simulator",
    description:
      "A fun, incremental simulator game inspired by Cookie Clicker, where players click to earn power points and unlock upgrades that accelerate progress in an endlessly satisfying loop.",
    image: "/projects/project6.png",
    tags: ["Python"],
    githubUrl: "https://github.com/k4vinliu/ICS2O1-CPT-Punch-Wall-Simulator",
  },
  {
    id: 6,
    title: "FocusLinks",
    description:
      "A minimalist Chrome extension that helps you stay focused by letting you save, organize, and revisit important links without getting distracted by endless tabs.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Vue.js"],
    githubUrl: "https://github.com/k4vinliu/FocusLinks",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here’s a look at what I’ve been building—projects designed with care, creativity, and a focus on usability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:animate-[cardGlow_1.5s_infinite] transition-shadow duration-300 flex flex-col"

            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
  <span
    key={index}
    className="bg-muted text-xs text-foreground px-3 py-1 rounded-full font-medium border border-border shadow-sm"
  >
    {tag}
  </span>
))}

                  </div>
                </div>

                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/k4vinliu"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

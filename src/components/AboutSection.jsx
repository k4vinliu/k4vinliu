import { Briefcase, Code, Code2, CodeSquare, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Developer • Innovator • Collaborator
            </h3>

            <p className="text-muted-foreground">
              I'm a computer science student at the University of Toronto who enjoys building practical, user-focused tools. From AI-powered apps to Chrome extensions, I create full-stack projects that solve real problems through clean design and efficient code.
            </p>

            <p className="text-muted-foreground">
              I also value teamwork and community. I've led FBLA training sessions, built a math forum with 500+ threads, and collaborated at hackathons. I'm always looking for opportunities to grow, contribute, and work on meaningful challenges.


            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    I build full-stack applications that are fast, scalable, and user-friendly. I focus on writing clean, maintainable code and delivering smooth, reliable functionality across platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I care about user experience just as much as functionality. I focus on intuitive interfaces, clear interactions, and purposeful design that makes tools easy and enjoyable to use.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration & Leadership</h4>
                  <p className="text-muted-foreground">
                    I’ve led workshops, mentored students, and worked on diverse hackathon teams. I enjoy helping others succeed and creating environments where great ideas can thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
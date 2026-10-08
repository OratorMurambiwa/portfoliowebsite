import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 flex scroll-mt-24 flex-col items-center px-6 py-16 md:px-12 lg:px-20"
    >
      <h2
        id="projects-heading"
        className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-6 text-center text-3xl font-semibold text-transparent sm:text-4xl"
      >
        My Projects
      </h2>

      <div className="grid w-full max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          src="/portfoliob.png"
          title="Portfolio Website"
          description="My personal portfolio showcasing my projects, technical skills, and engineering experience through an animated space theme."
          githubUrl="https://github.com/OratorMurambiwa/portfoliowebsite"
          technologies={[
            "Next.js",
            "React",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Three.js",
          ]}
        />

        <ProjectCard
          src="/bookwyz.png"
          title="BookWyz"
          description="A Python book recommendation system that helps users discover books by author, title, or genre."
          technologies={["Python"]}
        />

        <ProjectCard
          src="/chat.png"
          title="Chatbot"
          description="A conversational chatbot built in Python to engage users in natural language conversations."
          technologies={["Python"]}
        />
      </div>
    </section>
  );
};

export default Projects;
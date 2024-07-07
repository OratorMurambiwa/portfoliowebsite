import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfoliob.png"
          title="Portfolio Website"
          description="A portfolio website built using JS, CSS and HTML designed to showcase my details, projects and skills "
        />
        <ProjectCard
          src="/bookwyz.png"
          title="BookWyz"
          description="Built a book recommendation system using Python which helps users discover books by inputing the author's name, title or genre."
        />
        <ProjectCard
          src="/chat.png"
          title="Chatbot"
          description="An easy to use conversational chatbot built in Python designed to engage in natural langauge conversations with users."
        />
      </div>
    </div>
  );
};

export default Projects;
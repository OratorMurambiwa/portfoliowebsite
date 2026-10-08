const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "C++",
      "Go",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Bash",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
    ],
  },
  {
    title: "AI & Data",
    skills: [
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "pandas",
      "Matplotlib",
      "SHAP",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "SQLite",
      "Redis",
      "Relational Database Design",
    ],
  },
  {
    title: "Systems & Scientific Computing",
    skills: [
      "Linux",
      "MPI",
      "OpenMP",
      "Slurm",
      "DistributedDataParallel",
      "MATLAB",
      "PyQt5",
      "PyVISA",
      "SCPI",
      "ctypes",
      "Hardware–Software Integration",
    ],
  },
  {
    title: "Cloud & Developer Tools",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Claude Code",
      "Cursor",
      "Codex",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative z-10 scroll-mt-24 px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="skills-heading"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-6 text-center text-3xl font-semibold text-transparent sm:text-4xl"
        >
          Technical Skills
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-gray-300">
          Languages, frameworks, and tools I use across software
          development, AI, and scientific computing.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-[#2A0E61] bg-[#030014]/70 p-6 transition-colors hover:border-purple-500/60"
            >
              <h3 className="mb-5 text-xl font-semibold text-white">
                {group.title}
              </h3>

              <ul
                aria-label={group.title}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
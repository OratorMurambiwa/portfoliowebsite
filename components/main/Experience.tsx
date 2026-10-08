interface ExperienceEntry {
  organization: string;
  role: string;
  dates: string;
  location?: string;
  description: string;
  tags: string[];
  tagsLabel?: string;
}

const experience: ExperienceEntry[] = [
  {
    organization: "Los Alamos National Laboratory",
    role: "Controls Software Engineering Intern",
    dates: "May – August 2026",
    location: "Los Alamos, New Mexico",
    description:
      "Worked on some cool stuff with super smart people",
    tags: [
      "Python",
      "PyQt5",
      "PyVISA",
      "SCPI",
      "ctypes",
      "C/C++ SDK Integration",
      "Matplotlib",
      "Bash",
      "Linux",
      "NI PXIe",
      "Hardware–Software Integration",
      "User Interface Design",
    ],
  },
  {
    organization: "SLAC (Stanford Linear Accelerator Center) National Accelerator Laboratory",
    role: "Software Engineering Intern",
    dates: "June – August 2025",
    location: "Stanford, California",
    description:
      "Built a unified web platform for tracking assembly status, coordinating workflows, and supporting team communication. Integrated role-based access, document task extraction, real-time messaging, room and equipment reservations, and Excel component retrieval.",
    tags: [
      "Python",
      "Django",
      "HTML",
      "JavaScript",
      "Tailwind CSS",
      "SQLite",
      "Redis",
      "WebSockets",
      "FullCalendar.js",
      "AJAX",
      "pandas",
      "openpyxl",
      "Regular Expressions",
      "Role-Based Access Control",
    ],
  },
  {
    organization: "Grambling State University",
    role: "Student Researcher — Social Impacts of AI",
    dates: "August – November 2024",
    location: "Grambling, Louisiana",
    description:
      "Researched the potential social impacts of artificial intelligence under Dr. Morsheda Hassan’s mentorship. Co-authored “AI’s Ripple Effects: The Potential Social Impacts of Artificial Intelligence” and presented the research at the International Academy of Business and Public Administration Disciplines conference in Las Vegas.",
    tags: [
      "AI Social Impact Research",
      "Academic Writing",
      "Research Collaboration",
      "Academic Presentation",
    ],
  },
];

const professionalDevelopment: ExperienceEntry[] = [
  {
    organization: "Argonne National Laboratory",
    role: "Introduction to HPC Bootcamp Participant",
    dates: "August 2026",
    description:
      "Trained a 10.8-million-parameter transformer on the Perlmutter supercomputer using distributed training across four GPUs. Explored job scheduling and performance monitoring, achieving approximately 183,000 tokens per second and a 68% reduction in training loss over 1,000 steps.",
    tags: [
      "Python",
      "PyTorch",
      "DistributedDataParallel",
      "ezpz",
      "ezpz.History",
      "Slurm",
      "Perlmutter",
      "Multi-GPU Training",
      "Performance Monitoring",
    ],
  },
  {
    organization: "Carnegie Young Leaders",
    role: "ClearVote",
    dates: "June 2026 – Present",
    description:
      "Helping develop ClearVote, a project aimed at helping college students recognize political misinformation, AI-generated content, and deepfakes while encouraging informed digital engagement. Currently planning a Chrome extension and backend to support the project.",
    tagsLabel: "Technologies",
    tags: [
      "JavaScript",
      "Chrome Extension APIs",
      "HTML",
      "CSS",
      "Python",
      "Django",
    ],
  },
  {
    organization: "Break Through Tech",
    role: "AI Fellow",
    dates: "March 2026 – Present",
    description:
      "Completed Cornell’s Machine Learning Foundations certification and am now collaborating on an online payment fraud detection project with Mastercard through the Fall AI Studio. Developing a pipeline using approximately 590,000 transactions, engineering behavioral and temporal features, and exploring SHAP-based explanations for fraud predictions.",
    tags: [
      "Python",
      "PyTorch",
      "SHAP",
      "Machine Learning",
      "Feature Engineering",
      "Fraud Detection",
      "AUPRC",
      "F1-Score",
    ],
  },
  {
    organization: "Grambling State University",
    role: "LS-LAMP Research Assistant",
    dates: "October 2025 – Present",
    location: "Grambling, Louisiana",
    description:
      "Support laboratory research by maintaining mouse liver cell cultures and preparing samples for storage. Perform media exchanges, cell splitting, centrifugation, and cryopreservation using standardized sterile handling and biosafety procedures.",
    tags: [
      "Cell Culture",
      "Aseptic Technique",
      "DMEM-FBS Media",
      "Centrifugation",
      "DMSO Cryopreservation",
      "Biosafety",
    ],
  },
  {
    organization: "SMART Hub Spectrum Sizzle — Baylor University",
    role: "Workshop Participant",
    dates: "June 2025",
    location: "Waco, Texas",
    description:
      "Participated in hands-on workshops exploring RF spectrum analysis, radar, wireless communication, spectrum policy, and microwave circuit design. Used MATLAB modeling and laboratory hardware to study signal characteristics, noise, and frequency response.",
    tags: [
      "MATLAB",
      "Digital Signal Processing",
      "RF Spectrum Analysis",
      "Microwave Circuits",
      "Circuit Design",
      "Wireless Communications",
    ],
  },
  {
    organization: "Extern",
    role: "PwC Consulting Extern",
    dates: "February – March 2025",
    location: "Remote",
    description:
      "Analyzed the Jaylen D. Berry Foundation’s stakeholder engagement and outreach strategy. Conducted market research and competitive benchmarking, then presented recommendations for program growth in a client slide deck and executive summary with prioritized implementation steps.",
    tags: [
      "Market Research",
      "Competitive Benchmarking",
      "Stakeholder Analysis",
      "Strategic Recommendations",
      "Presentation Development",
    ],
  },
];

const ExperienceCard = ({
  entry,
}: {
  entry: ExperienceEntry;
}) => {
  return (
    <article className="rounded-xl border border-[#2A0E61] bg-[#030014]/70 p-6 transition-colors hover:border-purple-500/60 sm:p-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row">
        <div>
          <h4 className="text-xl font-semibold text-white">
            {entry.role}
          </h4>

          <p className="mt-1 text-purple-300">
            {entry.organization}
          </p>
        </div>

        <div className="shrink-0 text-sm text-gray-400 sm:text-right">
          <p>{entry.dates}</p>

          {entry.location && (
            <p className="mt-1">{entry.location}</p>
          )}
        </div>
      </div>

      <p className="mt-5 leading-relaxed text-gray-300">
        {entry.description}
      </p>

      <p className="mb-3 mt-5 text-xs font-medium uppercase tracking-wider text-gray-400">
        {entry.tagsLabel ?? "Skills & tools"}
      </p>

      <ul
        aria-label={`${entry.role}: ${
          entry.tagsLabel ?? "skills and tools"
        }`}
        className="flex flex-wrap gap-2"
      >
        {entry.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-200"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative z-10 scroll-mt-24 px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="experience-heading"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-6 text-center text-3xl font-semibold text-transparent sm:text-4xl"
        >
          Experience &amp; Professional Development
        </h2>

        <div className="mt-8">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Experience
          </h3>

          <div className="space-y-6">
            {experience.map((entry) => (
              <ExperienceCard
                key={`${entry.organization}-${entry.role}`}
                entry={entry}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-semibold text-white">
            Professional Development
          </h3>

          <div className="space-y-6">
            {professionalDevelopment.map((entry) => (
              <ExperienceCard
                key={`${entry.organization}-${entry.role}`}
                entry={entry}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
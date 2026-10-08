export const projectCategories = [
  "All",
  "Web & Software",
  "AI & Data",
  "Systems & Hardware",
] as const;

export type ProjectCategory =
  (typeof projectCategories)[number];

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  technologies: string[];
  githubUrl: string;
  src?: string;
  status?: "Complete" | "In progress";
}

const github = (repository: string) =>
  `https://github.com/OratorMurambiwa/${repository}`;

export const projects: Project[] = [
  {
    title: "DineMatch",
    category: "Web & Software",
    description:
      "A restaurant matching platform where groups discover dining options, vote together, and receive live ranking updates. Integrates restaurant search through the Foursquare Places API.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
      "Tailwind CSS",
      "Vite",
      "Foursquare API",
    ],
    githubUrl: github("Dine-Match"),
  },
  {
    title: "FPGA Signal Processing",
    category: "Systems & Hardware",
    description:
      "A digital signal processing pipeline combining FIR filtering, FFT analysis, magnitude calculation, and peak detection. Includes an AXI-Lite control interface and Python-based verification.",
    technologies: [
      "SystemVerilog",
      "AMD Vivado",
      "FFT IP",
      "AXI-Lite",
      "Cocotb",
      "Python",
      "NumPy",
      "Matplotlib",
    ],
    githubUrl: github("fpga-signal-processing"),
  },
  {
    title: "AI-Powered Stroke System",
    category: "AI & Data",
    description:
      "An educational prototype for technician, doctor, and patient workflows. Combines scan classification, image annotation, visit tracking, ICD-10 lookup, and AI-assisted text generation.",
    technologies: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Ultralytics YOLO",
      "SQLAlchemy",
      "SQLite",
      "OpenAI API",
      "OpenCV",
    ],
    githubUrl: github("AI-Powered-Stroke-System"),
  },
  {
    title: "Hospital Booking System",
    category: "Web & Software",
    description:
      "An appointment booking backend with authentication, availability management, Redis caching, background job queues, rate limiting, and application logging.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "JWT",
      "Winston",
    ],
    githubUrl: github("Hospital-booking-system"),
  },
  {
    title: "Distributed Heat Diffusion",
    category: "Systems & Hardware",
    description:
      "A 3D thermal simulation exploring laser heating and heat diffusion. Uses MPI domain decomposition and halo exchanges, OpenMP parallel updates, and VTK output for visualization.",
    technologies: [
      "C++",
      "MPI",
      "OpenMP",
      "CMake",
      "VTK Output",
    ],
    githubUrl: github("Heat-Diffusion"),
    status: "In progress",
  },
  {
    title: "Predictive Maintenance",
    category: "AI & Data",
    description:
      "A remaining useful life prediction application for turbofan engines using NASA C-MAPSS data. Serves a PyTorch GRU model through a FastAPI backend and interactive React dashboard.",
    technologies: [
      "Python",
      "PyTorch",
      "GRU",
      "FastAPI",
      "React",
      "TypeScript",
      "Recharts",
      "pandas",
      "NumPy",
    ],
    githubUrl: github("Predictive-Maintenance-Model"),
  },
  {
    title: "RF Spectrum Analyzer",
    category: "AI & Data",
    description:
      "Classifies RF spectrogram images using a deep learning model. Displays prediction confidence, estimates normalized frequency-band parameters, and exports analysis results as JSON.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "Streamlit",
      "OpenCV",
      "NumPy",
    ],
    githubUrl: github("RF-Spectrum-Analyzer"),
  },
  {
    title: "Protein Structure Visualizer",
    category: "Web & Software",
    description:
      "An interactive molecular visualization application for exploring protein structures. Includes PDB file parsing, structure selection, file uploads, and adjustable 3D viewing controls.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
    ],
    githubUrl: github("Protein-Structure-Visualizer"),
  },
  {
    title: "Energy Demand Forecast",
    category: "AI & Data",
    description:
      "An electricity demand forecasting study comparing regression, tree-based, and neural network approaches, with exploratory analysis and prediction evaluation.",
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
    ],
    githubUrl: github("Energy-Demand-Forecast"),
  },
  {
    title: "RF 3D Visualizer",
    category: "Web & Software",
    description:
      "An interactive 3D viewer for RF power distributions, with surface rendering, color mapping, rotation, and zoom. Includes Python utilities for preparing visualization data.",
    technologies: [
      "TypeScript",
      "Three.js",
      "WebGL",
      "Vite",
      "lil-gui",
      "Python",
      "NumPy",
    ],
    githubUrl: github("rf-3d-visualiser"),
  },
  {
    title: "Pulsar Detection",
    category: "AI & Data",
    description:
      "A classification pipeline for pulsar candidates in the HTRU2 astronomy dataset. Compares logistic regression and random forest models using precision, recall, and ROC-AUC.",
    technologies: [
      "Python",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    githubUrl: github("pulsar-detection"),
  },
  {
    title: "Medical Information Retrieval",
    category: "AI & Data",
    description:
      "An educational symptom-based search demo that retrieves related medical information using sentence embeddings and FAISS vector similarity search through a Streamlit chat interface.",
    technologies: [
      "Python",
      "Streamlit",
      "FAISS",
      "Sentence Transformers",
      "pandas",
      "NumPy",
    ],
    githubUrl: github("Medical-RAG"),
  },
  {
    title: "Adverse Drug Reaction Detection",
    category: "AI & Data",
    description:
      "A Streamlit prototype for analyzing text for potential adverse drug reactions using a transformer sequence classifier, with text preprocessing and prediction displays.",
    technologies: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Hugging Face Transformers",
      "pandas",
    ],
    githubUrl: github("ADR-Detection-System"),
  },
  {
    title: "Restaurant Analytics",
    category: "AI & Data",
    description:
      "A restaurant sales analysis project combining data preparation, SQL-based KPIs, forecasting notebooks, and a Power BI dashboard to explore sales patterns and performance.",
    technologies: [
      "Python",
      "pandas",
      "SQL",
      "SQLAlchemy",
      "Power BI",
      "Excel",
      "scikit-learn",
      "statsmodels",
    ],
    githubUrl: github("Restaurant-Analytics"),
  },
  {
    title: "Coffee Shop Sales Dashboard",
    category: "AI & Data",
    description:
      "An interactive Excel dashboard exploring revenue trends, store performance, product sales, and peak earning hours using calculated fields, PivotTables, charts, and slicers.",
    technologies: [
      "Excel",
      "PivotTables",
      "PivotCharts",
      "Slicers",
      "Data Cleaning",
    ],
    githubUrl: github("Coffee-Shop"),
  },
  {
    title: "Medical Cost Analysis",
    category: "AI & Data",
    description:
      "An R Markdown analysis of a medical insurance cost dataset, combining statistical analysis and a reproducible report.",
    technologies: ["R", "R Markdown", "RStudio"],
    githubUrl: github("medical-cost-analysis"),
  },
  {
    title: "Two-Point Correlation",
    category: "Systems & Hardware",
    description:
      "Computes pair-distance histograms to explore spatial clustering in 2D point sets. Compares serial and parallel implementations with timing benchmarks and visualizations.",
    technologies: [
      "Python",
      "NumPy",
      "Numba",
      "ProcessPoolExecutor",
      "Matplotlib",
    ],
    githubUrl: github("Two-Point-Correlation"),
  },
  {
    title: "Weather Station Network Simulation",
    category: "Systems & Hardware",
    description:
      "An MPI simulation where weather station processes generate readings and communicate with a central coordinator. Includes data validation, rule-based forecasts, broadcasts, and file logging.",
    technologies: ["C++", "MPI", "Make"],
    githubUrl: github("Weather-Simulation"),
  },
  {
    title: "Robot Arm Controller",
    category: "Systems & Hardware",
    description:
      "An early-stage robot arm controller project. The current repository establishes a C++ ROS 2 node and build package as the foundation for future motion and hardware integration.",
    technologies: [
      "C++",
      "ROS 2",
      "rclcpp",
      "ament_cmake",
      "CMake",
    ],
    githubUrl: github("rt-robot-arm-controller"),
    status: "In progress",
  },
  {
    title: "News Digest",
    category: "Web & Software",
    description:
      "A news aggregation interface that retrieves RSS articles, identifies similar stories using TF-IDF and cosine similarity, and creates extractive summaries.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "RSS2JSON API",
      "TF-IDF",
      "Cosine Similarity",
    ],
    githubUrl: github("News-Digest"),
  },
  {
    title: "Quantum Mandala Generator",
    category: "Systems & Hardware",
    description:
      "Generates colorful mandala patterns from simulated quantum circuit measurements. Supports adjustable radial symmetry, color themes, animation, and image exports.",
    technologies: [
      "Python",
      "Qiskit",
      "Qiskit Aer",
      "NumPy",
      "Matplotlib",
      "Streamlit",
    ],
    githubUrl: github("Mandala-Pattern"),
  },
  {
    title: "Portfolio Website",
    category: "Web & Software",
    src: "/portfoliob.png",
    description:
      "My space-themed portfolio showcasing projects, experience, and technical skills, with an animated star background and responsive layouts.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
    githubUrl: github("portfoliowebsite"),
  },
  {
    title: "BookWyz",
    category: "Web & Software",
    src: "/bookwyz.png",
    description:
        "A desktop book discovery application that searches the Google Books API and displays book information and cover images through a Tkinter interface.",
    technologies: [
        "Python",
        "Tkinter",
        "Google Books API",
        "Requests",
        "Pillow",
    ],
    githubUrl: github("bookWyz"),
    },
];
export type ProjectPreview = {
  slug: "bioreactor" | "pathfindr" | "polen" | "discovery-project";
  title: string;
  subtitle: string;
  summary: string;
  tech: string[];
  status: "Complete" | "In Progress";
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
  steps: string[];
};

export const siteConfig = {
  name: "Nijat Taghizade",
  role: "Electrical Engineering Student at Georgia Tech",
  tagline:
    "Ambitious, globally minded, and hands-on engineer-in-training focused on embedded systems, hardware design, and semiconductor innovation.",
  description:
    "Official ePortfolio for Nijat Taghizade, a freshman studying Electrical Engineering at Georgia Tech. This portfolio documents technical projects, research, career goals, and professional development.",
  github: "https://github.com/TaghizadeNijat",
  linkedin: "https://www.linkedin.com/in/nijat-taghizade-1b56b82a1/",
  email: "ntaghizade3@gatech.edu",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/career-goals", label: "Career Goals" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
};

export const homeHighlights = [
  "Georgia Tech B.S. Electrical Engineering student (Expected May 2029)",
  "Current GPA: 4.00",
  "Research across biomedical systems, machine learning, and applied AI",
  "Hands-on builder with Arduino, FPGA, and hardware prototyping experience",
];

export const quickFacts = [
  { label: "From", value: "Baku, Azerbaijan" },
  { label: "Current Focus", value: "Embedded systems, semiconductors, hardware" },
  { label: "Interests", value: "Swimming, chess, engineering design" },
  { label: "Languages", value: "English, German, Russian, Turkish" },
];

export const featuredProjects: ProjectPreview[] = [
  {
    slug: "bioreactor",
    title: "Biomedical Bioreactor Mixing Mechanism",
    subtitle: "Biomedical Microsystems Laboratory, Georgia Tech",
    summary:
      "Designed a motor-driven mixing system to automate cell culture motion profiles, replacing manual tilt and rotation routines with programmable movement.",
    tech: ["Electromechanical Design", "Firmware Prototyping", "Biomedical Systems"],
    status: "In Progress",
  },
  {
    slug: "pathfindr",
    title: "PathFindr",
    subtitle: "AI ATL Hackathon Winner",
    summary:
      "Built an accessibility-focused iOS app for users with low or no vision, combining LiDAR sensing, multimodal AI agents, and adaptive spoken guidance.",
    tech: ["Swift", "Flask", "Google ADK", "Gemini", "ARKit"],
    status: "Complete",
  },
  {
    slug: "polen",
    title: "PolEn",
    subtitle: "Real-Time Macroeconomic Policy Engine",
    summary:
      "Developed a policy simulation platform using state-space modeling, Monte Carlo forecasting, and reinforcement learning to evaluate monetary actions.",
    tech: ["Python", "Kalman Filter", "Numba", "PPO", "Gymnasium"],
    status: "Complete",
  },
  {
    slug: "discovery-project",
    title: "Arduino-Based Laser Communication System",
    subtitle: "Discovery Project (ECE ePortfolio Requirement)",
    summary:
      "Built a two-device Morse-code laser communication system with reliable decoding, LCD output, and full end-to-end prototype validation.",
    tech: ["Arduino", "Embedded C/C++", "Signal Processing", "I2C Displays"],
    status: "Complete",
  },
];

export const careerTimeline: TimelineItem[] = [
  {
    period: "2025 - 2027 (Short Term)",
    title: "Build Core EE Foundations",
    description:
      "Focus on circuit analysis, embedded programming, and hardware-aware thinking.",
    steps: [
      "Master core ECE and math courses.",
      "Build small embedded hardware projects.",
      "Practice concise technical documentation.",
    ],
  },
  {
    period: "2027 - 2029 (Medium Term)",
    title: "Grow Through Research and Internships",
    description:
      "Gain practical exposure in hardware, embedded, and semiconductor-adjacent roles.",
    steps: [
      "Pursue internships in relevant engineering teams.",
      "Participate in the ECE ORS research program and collaborative build environments.",
      "Strengthen prototyping, testing, and debugging.",
    ],
  },
  {
    period: "2029 - 2032 (Postgraduate)",
    title: "Complete Graduate Study",
    description:
      "Earn a master's degree in Electrical Engineering and deepen technical specialization.",
    steps: [
      "Specialize in semiconductors and embedded systems.",
      "Contribute to applied, industry-relevant research.",
      "Build mentorship and industry connections.",
    ],
  },
  {
    period: "2032+ (Long Term)",
    title: "Lead Semiconductor Innovation",
    description:
      "Work full-time in semiconductor innovation and create real-world impact.",
    steps: [
      "Contribute to scalable and efficient embedded systems.",
      "Build strong operational and product judgment.",
      "Launch a company in about ten years.",
    ],
  },
];

export const additionalExperiences = [
  {
    title: "Machine Learning for Fault Detection in Transmission Systems",
    org: "Computer Science and Bioinformatics, Cambridge University",
    details:
      "Conducted research on machine learning models for fault detection in three-phase electrical transmission systems. Integrated transformer and line parameters as engineered features and reached 99% model accuracy with an ROC AUC of 0.99, with modeled annual savings near 500 megajoules.",
  },
  {
    title: "Crystallography Language Modeling Research",
    org: "University of North Georgia (Remote Researcher)",
    details:
      "Explored adaptation of autoregressive language models for crystal-structure representation using CIF-style token sequences from the CrystaLLM dataset. Fine-tuned LLaMA 3-8B with LoRA to reduce trainable parameters and improve experimentation efficiency.",
  },
  {
    title: "FIRST Robotics Team Leadership",
    org: "Captain of Electronics and Design",
    details:
      "Led power distribution and protection architecture for a 50 kg robot, including grounding strategy and cable management. Implemented CAN diagnostics and Java telemetry for live motor current monitoring, improving fault recovery from two minutes to around twenty seconds while maintaining over 99% event uptime.",
  },
];

export const resumeHighlights = {
  education: [
    "Georgia Institute of Technology, Atlanta, GA",
    "Bachelor of Science in Electrical Engineering, Freshman",
    "Expected Graduation: May 2029 | GPA: 4.00",
  ],
  skills: [
    "Programming: Python, C++, Java, SQL",
    "Hardware: Raspberry Pi, FPGAs (Verilog/SystemVerilog), PCB Design (Altium), Oscilloscope",
    "Software: MATLAB, Fusion 360, AutoCAD, React, VSCode, Jupyter",
    "Communication: design proposals, technical reports, instruction manuals, presentations, analytical research papers",
    "Languages: English (Fluent), German (Fluent), Russian (Conversational), Turkish (Conversational)",
  ],
};

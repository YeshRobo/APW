// EDIT THIS FILE for website text, links, section headings, skills, and non-project cards.
// EDIT data/projects.js for project cards and Perceive/Think/Act/Transform details.

export const siteContent = {
  // Browser tab title and search/share description.
  meta: {
    title: "Yeshwanth Reddy Gurredy | Agent Systems Portfolio",
    description:
      "Yeshwanth Reddy Gurredy's technical portfolio about robotics, embedded controls, human-machine systems, and agents that perceive, think, act, and transform.",
  },

  // Header brand shown at the top left.
  brand: {
    initials: "YR",
    shortName: "Yeshwanth Reddy",
    ariaLabel: "Yeshwanth Reddy Gurredy portfolio home",
  },

  // Header navigation. Add or remove links here if you add/remove sections.
  navigation: [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Framework", href: "#framework" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Spectrum", href: "#spectrum" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // HERO SECTION: first screen visitors see.
  hero: {
    kicker: "Yeshwanth Reddy Gurredy / Robotics & Embedded Controls",
    title: "Agents at Every Level of Intelligence",
    subtitle: "Perceive. Think. Act. Transform.",
    intro:
      "I study and build agents: systems that perceive information, process it through structure or intelligence, and act to transform matter, motion, or knowledge. My work connects UAV gimbals, embedded motor control, exoskeleton research, and information systems.",
    highlights: [
      "UAV gimbal controls",
      "Human-exoskeleton research",
      "Embedded C / Python / SQL",
    ],
    actions: [
      { label: "View Projects", href: "#projects", style: "primary" },
      { label: "View Experience", href: "#experience", style: "secondary" },
    ],
  },

  // CORE PHILOSOPHY SECTION.
  philosophy: {
    kicker: "Core Philosophy",
    title: "Agents are systems, not just chatbots.",
    paragraphs: [
      "An agent is any system that can perceive, think, and act. AI chatbots are one example, but the concept is broader and more useful when applied to engineering systems.",
      "Humans, robots, control systems, software systems, organizations, and civilizations can all be viewed as agents. The difference is the depth of perception, complexity of thinking, and range of action.",
    ],
    equation: {
      label: "Core equation",
      parts: ["Information", "+", "Energy", "+", "Organized Agents", "\\u2192"],
      result: "Matter Transformation",
    },
  },

  // AGENT FRAMEWORK SECTION.
  framework: {
    kicker: "Agent Framework",
    title: "A practical model for engineered agency.",
    intro:
      "Every agent can be understood through four linked capabilities. The same pattern appears in mechanical systems, software systems, human workflows, and large organizations.",
    cards: [
      {
        index: "01",
        title: "Perceive",
        description:
          "Sensors, documents, human senses, and data streams convert the outside world into usable signals.",
      },
      {
        index: "02",
        title: "Think",
        description:
          "Control logic, models, reasoning, planning, and learning turn signals into structured decisions.",
      },
      {
        index: "03",
        title: "Act",
        description:
          "Motors, code, tools, machines, and decisions apply force or instruction back into the world.",
      },
      {
        index: "04",
        title: "Transform",
        description:
          "Matter, movement, information, and systems change when action is coordinated with intent.",
      },
    ],
  },

  // PROJECTS SECTION HEADING. Project cards live in data/projects.js.
  projectsSection: {
    kicker: "Engineering Projects",
    title: "Projects as Agents",
    intro:
      "Each project explores a different level of agency: control, human-machine interaction, information organization, and adaptive decision-making.",
    noscript:
      "Project cards require JavaScript. Use a local server or GitHub Pages to preview the modular site.",
  },

  // EXPERIENCE EVIDENCE SECTION.
  experience: {
    kicker: "Experience Evidence",
    title: "Systems work behind the framework.",
    intro:
      "The agent idea is grounded in hardware bring-up, embedded firmware, experimental robotics, and deployed information systems.",
    cards: [
      {
        value: "2-axis",
        title: "Stabilized UAV EO gimbal",
        description:
          "Designed architecture, integration flow, motor control, safety behavior, and tuning workflow for a compact stabilized payload.",
      },
      {
        value: "10 subjects",
        title: "Shoulder exoskeleton study",
        description:
          "Ran human-subject sessions and logged synchronized kinematics, EMG, and interaction torque for model-vs-baseline analysis.",
      },
      {
        value: "~70 assets",
        title: "ThingWorx monitoring system",
        description:
          "Migrated a legacy retail monitoring application into reusable ThingWorx services, SQL queries, dashboards, and access controls.",
      },
      {
        value: "MS RAS",
        title: "Robotics research foundation",
        description:
          "Building depth across control, safe reinforcement learning, visual odometry, MuJoCo simulation, and ROS-based robotics workflows.",
      },
    ],
    skills: [
      "Embedded C",
      "Python",
      "SQL",
      "SVPWM / FOC",
      "ROS / ROS2",
      "MATLAB / Simulink",
      "MuJoCo",
      "Docker",
    ],
  },

  // SPECTRUM SECTION.
  spectrum: {
    kicker: "Spectrum of Agents",
    title: "Agency scales with perception, thought, and action.",
    items: [
      "Thermostat",
      "UAV Gimbal",
      "Robot",
      "AI Agent",
      "Human",
      "Organization",
      "Civilization",
    ],
  },

  // ABOUT SECTION.
  about: {
    kicker: "About",
    title: "Robotics, embedded control, AI systems, and information organization.",
    paragraphs: [
      "I am a robotics and embedded controls engineer pursuing an M.S. in Robotics and Autonomous Systems at Arizona State University. My work focuses on UAV gimbals, embedded motor control, human-exoskeleton interaction, safe control, and information organization.",
      "I am interested in how agents can be designed, connected, and organized to solve real-world problems across hardware, software, and human-machine systems.",
    ],
  },

  // CONTACT SECTION. Replace placeholder LinkedIn/resume links here.
  contact: {
    kicker: "Contact",
    title: "Connect and review my work.",
    intro:
      "GitHub and email are ready. Add your LinkedIn URL and resume PDF when you want those links to go live.",
    links: [
      { label: "GitHub", href: "https://github.com/YeshRobo", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile", external: true },
      { label: "Resume", href: "assets/resume.pdf", external: false },
      { label: "Email", href: "mailto:yeshwanth.rg060694@gmail.com", external: false },
    ],
  },

  // FOOTER SECTION.
  footer: {
    owner: "Yeshwanth Reddy Gurredy",
    backToTopLabel: "Back to top",
  },
};
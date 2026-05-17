// EDIT THIS FILE for website text, links, section headings, skills, and non-project cards.
// EDIT data/projects.js for project cards and Agent Core / matter-state transformation details.

export const siteContent = {
  // Browser tab title and search/share description.
  meta: {
    title: "Yeshwanth Reddy Gurredy | Agent Systems Portfolio",
    description:
      "Yeshwanth Reddy Gurredy's technical portfolio about robotics, embedded controls, human-machine systems, and agents that transform the state of matter.",
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
    subtitle: "Perceive. Process. Act. Transform.",
    intro:
      "An agent perceives the current state of matter, processes it inside an Agent Core, and acts to create a new state of matter.",
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
      "Agents are not only AI systems. Humans, robots, control systems, software systems, organizations, and civilizations can all be viewed as agents.",
      "An agent perceives the current state of matter, processes that perception inside an Agent Core, and acts to create a new state of matter.",
      "The difference between agents is the depth of perception, complexity of the Agent Core, and range of action.",
      "Agents transform matter by changing its state or arrangement. Documents, machines, bodies, vehicles, tools, and cities are all matter in different states and arrangements.",
      "The Agent Core can take different forms: a human mind, a control algorithm, a learned policy, a retrieval and reasoning system, or an organization's people, rules, plans, communication, and decision structure.",
    ],
    equation: {
      label: "Core equation",
      parts: ["Matter State", "+", "Perception", "+", "Agent Core", "+", "Action", "\\u2192"],
      result: "New Matter State",
    },
  },

  // AGENT FRAMEWORK SECTION.
  framework: {
    kicker: "Agent Framework",
    title: "Current State of Matter to New State of Matter.",
    intro:
      "The Agent Core is the internal space where perception becomes representation, representation becomes thinking, and thinking becomes action.",
    cards: [
      {
        index: "01",
        title: "Matter State",
        description:
          "The current physical or symbolic arrangement the agent must understand or change.",
      },
      {
        index: "02",
        title: "Perception",
        description:
          "The process of sensing, reading, measuring, or receiving signals from the current state.",
      },
      {
        index: "03",
        title: "Agent Core",
        description:
          "The internal system where perception becomes representation, representation becomes thinking, and thinking becomes action.",
      },
      {
        index: "04",
        title: "Action",
        description:
          "The output that changes the state of matter through force, control, code, organization, or structured behavior.",
      },
    ],
  },

  // PROJECTS SECTION HEADING. Project cards live in data/projects.js.
  projectsSection: {
    kicker: "Engineering Projects",
    title: "Projects as Agents",
    intro:
      "Each project shows how an agent perceives a matter state, processes it through an Agent Core, and acts to create a new matter state.",
    noscript:
      "Project cards require JavaScript. Use a local server or GitHub Pages to preview the modular site.",
  },

  // EXPERIENCE EVIDENCE SECTION.
  experience: {
    kicker: "Experience Evidence",
    title: "Systems work behind the framework.",
    intro:
      "The framework is grounded in hardware bring-up, embedded firmware, experimental robotics, and deployed information systems.",
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
    title: "Agency scales with perception, Agent Core complexity, and action range.",
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
      "I am interested in how agents can be designed, connected, and organized to transform matter states across hardware, software, and human-machine systems.",
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
// EDIT THIS FILE for website text, links, section headings, skills, and non-project cards.
// EDIT data/projects.js for project cards and agent-loop details.

export const siteContent = {
  // Browser tab title and search/share description.
  meta: {
    title: "Yeshwanth Reddy Gurredy | Agent Systems Portfolio",
    description:
      "Yeshwanth Reddy Gurredy's technical portfolio about robotics, embedded controls, human-machine systems, and agents that change systems from one state to another.",
  },

  // Header brand shown at the top left.
  brand: {
    initials: "YR",
    shortName: "Yeshwanth Reddy",
    ariaLabel: "Yeshwanth Reddy Gurredy portfolio home",
  },

  // Header navigation. Add or remove links here if you add/remove sections.
  navigation: [
    { label: "Home", href: "#top" },
    { label: "Philosophy", href: "philosophy.html" },
    { label: "Spectrum", href: "#spectrum" },
    { label: "Framework", href: "#framework" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // HERO SECTION: first screen visitors see.
  hero: {
    kicker: "Yeshwanth Reddy Gurredy / Robotics, Embedded Controls & Agent Systems",
    title: "Agency at Every Level of Intelligence",
    subtitle: "Perceive. Process. Act. Transform.",
    intro:
      "An agent perceives its environment, processes that information through an Agent Core, and acts through a controlled system to create a changed state.",
    highlights: [
      "UAV gimbal",
      "Human-exoskeleton",
      "Safe Robot Navigation",
    ],
    actions: [
      { label: "View Portfolio", href: "#portfolio", style: "primary" },
      { label: "View Framework", href: "#framework", style: "secondary" },
    ],
  },

  // CORE PHILOSOPHY SECTION.
  philosophy: {
    kicker: "CORE PHILOSOPHY",
    title: "Agency is a continuous loop: perceive, process, act.",
    paragraphs: [
      "These days, agents are often associated with AI. I define an agent more broadly: something that perceives, processes, and acts. The important part is that this is a continuous loop: an agent perceives its environment, processes that information through an Agent Core, and acts through a controlled system to create a changed state.",
      "A thermostat reads room temperature and controls heating or cooling. A gimbal senses disturbance and commands motors to counter it. At the current high end, an AI agent can interpret a user goal, retrieve context, reason through an LLM and tool stack, and act through software tools. The intelligence level is different, but the loop is the same.",
      "The difference between agents is how deeply they perceive, how much context they carry, how complex their Agent Core is, and how much they can affect through action.",
      "In this framework, every agent operates through the same loop:",
    ],
    equation: {
      label: "Core framework",
      parts: ["Environment State", "\\u2192", "Perception", "\\u2192", "Agent Core", "\\u2192", "Controlled Action", "\\u2192"],
      result: "Changed State",
    },
    deeperLink: {
      label: "Read the deeper philosophy",
      href: "philosophy.html",
    },
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
    ],
  },

  // AGENT FRAMEWORK SECTION.
  framework: {
    kicker: "Agent Loop",
    title: "Agent Framework",
    subtitle:
      "Current System State → Perception → Agent Core → Action → Changed System State",
    intro:
      "This framework describes how an agent changes a system from one state to another. The agent first perceives the current system state, processes that perception inside an Agent Core, and then acts to create a changed system state.",
    cards: [
      {
        index: "01",
        title: "Current System State",
        description:
          "The condition, position, structure, or arrangement of the system before the agent acts.",
      },
      {
        index: "02",
        title: "Perception",
        description:
          "The process of sensing, reading, measuring, or receiving signals from the current system state.",
      },
      {
        index: "03",
        title: "Agent Core",
        description:
          "The decision-making center of the agent. It turns perception into representation, evaluates what action is needed, and selects or produces the next action.",
      },
      {
        index: "04",
        title: "Action",
        description:
          "The output that changes the system state through force, control, code, organization, or structured behavior.",
      },
      {
        index: "05",
        title: "Changed System State",
        description:
          "The new condition, position, structure, or arrangement created after the agent acts.",
      },
    ],
  },

  // AGENT SYSTEMS PORTFOLIO SECTION. Project cards live in data/projects.js.
  portfolio: {
    kicker: "Engineering Work",
    title: "Agent Systems Portfolio",
    intro:
      "Each project is explained through the agent loop: Perception, Agent Core, Action, Safety / Constraints, and System State Change.",
    guide: {
      title: "How to Read These Projects",
      body:
        "Each homepage card gives a short recruiter-friendly summary, key technologies, and honest links. Use Details to open the full project page with the current system state, agent loop, phase-level contributions, evidence, limitations, and next steps.",
      flow: [
        "Current System State",
        "Perception",
        "Agent Core",
        "Action",
        "Changed System State",
      ],
    },
    noscript:
      "Project cards require JavaScript. Use a local server or GitHub Pages to preview the modular site.",
    skills: [
      "Embedded C",
      "Python",
      "SQL",
      "PTC ThingWorx",
      "SVPWM / FOC",
      "ROS / ROS2",
      "MATLAB / Simulink",
      "MuJoCo",
      "Docker",
    ],
  },

  // ABOUT SECTION.
  about: {
    kicker: "About",
    title: "Robotics, embedded control, AI systems, and information organization.",
    paragraphs: [
      "I am a robotics and embedded controls engineer pursuing an M.S. in Robotics and Autonomous Systems at Arizona State University. My work focuses on UAV gimbals, embedded motor control, human-exoskeleton interaction, safe control, and information organization.",
      "I am interested in how agents can be designed, connected, and organized to change system states across hardware, software, and human-machine systems.",
    ],
  },

  // CONTACT SECTION.
  contact: {
    kicker: "Contact",
    title: "Connect and review my work.",
    intro:
      "I am open to robotics, embedded controls, and agent systems conversations.",
    links: [
      { label: "GitHub", href: "https://github.com/YeshRobo", external: true },
      { label: "Email", href: "mailto:yeshwanth.rg060694@gmail.com", external: false },
    ],
  },

  // FOOTER SECTION.
  footer: {
    owner: "Yeshwanth Reddy Gurredy",
    backToTopLabel: "Back to top",
  },
};

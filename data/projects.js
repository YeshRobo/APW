// Add, remove, or edit projects here. The HTML renderer reads this array and builds the cards automatically.
export const projects = [
  {
    id: "uav-gimbal",
    title: "UAV Gimbal",
    agentType: "Control Agent",
    problem:
      "How can a camera remain stable and maintain orientation while the UAV body is moving, vibrating, or rotating?",
    builtSystem:
      "I worked on a UAV gimbal system that stabilizes camera motion using sensor feedback and control logic. The system reacts to motion disturbances and adjusts the gimbal to maintain a stable camera view.",
    technologies: [
      "Embedded systems",
      "Sensors",
      "IMU feedback",
      "Motor control",
      "Control logic",
      "Mechanical stabilization",
    ],
    agentInterpretation:
      "The gimbal perceives motion through sensors, thinks through a control algorithm, and acts by driving motors to correct camera orientation. It is a limited but real agent because it closes the loop between perception and action.",
    links: {
      code: "#",
      details: "#",
      demo: "#",
    },
  },
  {
    id: "exoskeleton",
    title: "Exoskeleton",
    agentType: "Human-Machine Agent",
    problem:
      "How can a wearable machine support or augment human movement while staying connected to the user's body and intention?",
    builtSystem:
      "I worked on an exoskeleton concept/system where the human and machine operate together. The human provides intention and direction, while the machine provides structure, support, and mechanical assistance.",
    technologies: [
      "Mechanical design",
      "Human-machine interaction",
      "Sensors",
      "Actuation concepts",
      "Control logic",
      "Wearable robotics",
    ],
    agentInterpretation:
      "The exoskeleton is a shared agent system. The human perceives and decides at a high level, while the machine senses, supports, and acts at the physical level. Together, they form a human-machine agent that transforms intention into assisted movement.",
    links: {
      code: "#",
      details: "#",
      demo: "#",
    },
  },
  {
    id: "library-agent",
    title: "Library Agent",
    agentType: "Information Agent",
    problem:
      "How can scattered documents be converted into useful, organized information instead of remaining disconnected files?",
    builtSystem:
      "I am building a library agent that processes scattered documents and turns them into structured, searchable, and useful knowledge. The system reads documents, organizes information, retrieves relevant content, and helps the user understand what is inside the library.",
    technologies: [
      "Python",
      "Document parsing",
      "Markdown files",
      "Text processing",
      "Search",
      "Retrieval",
      "Summarization",
      "Information organization",
    ],
    agentInterpretation:
      "The library agent perceives text, thinks by organizing and retrieving information, and acts by producing useful knowledge for the user. Unlike a physical agent, it transforms information instead of matter directly.",
    links: {
      code: "#",
      details: "#",
      demo: "#",
    },
  },
  {
    id: "rl-car-navigation",
    title: "RL Car Navigation",
    agentType: "Adaptive Decision Agent",
    problem:
      "How can a car-like agent reach a target while avoiding obstacles without manually programming every movement?",
    builtSystem:
      "I built a reinforcement learning environment where a car agent improves its navigation behavior through reward feedback.",
    technologies: [
      "Python",
      "Reinforcement learning",
      "Q-learning",
      "Reward design",
      "Exploration vs. exploitation",
      "Simulation",
    ],
    agentInterpretation:
      "The agent perceives its state, thinks through a learned policy, and acts by selecting movements. In this project, learning is part of thinking because the agent updates its internal decision structure through experience.",
    links: {
      code: "#",
      details: "#",
      demo: "#",
    },
  },
];
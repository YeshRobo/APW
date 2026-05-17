// EDIT THIS FILE to add, remove, or modify projects.
// Each project is rendered automatically by js/renderProjects.js.

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
    agentCore:
      "The Agent Core is the control algorithm that converts sensor feedback into motor correction.",
    matterStateTransformation:
      "The system changes the state of camera orientation from unstable motion to stabilized alignment.",
    agentInterpretation:
      "The gimbal perceives motion through sensors, processes orientation error inside its control core, and acts by driving motors. It is a limited but real agent because it closes the loop between perception and action.",
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
    agentCore:
      "The Agent Core is shared between the human mind and the machine control system.",
    matterStateTransformation:
      "The system changes the state of human-machine movement by converting human intention and machine assistance into supported physical motion.",
    agentInterpretation:
      "The exoskeleton is a shared agent system. The human perceives and decides at a high level, while the machine senses, supports, and acts at the physical level.",
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
      "How can scattered documents be converted into a useful, organized document system?",
    builtSystem:
      "I am building a library agent that processes scattered documents and turns them into structured, searchable, and useful information. The system reads documents, organizes content, retrieves relevant material, and helps the user understand what is inside the library.",
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
    agentCore:
      "The Agent Core is the retrieval, organization, and reasoning system that converts raw document content into structured representations.",
    matterStateTransformation:
      "The system changes the state of documents from scattered files into an organized, searchable document system.",
    agentInterpretation:
      "The library agent perceives text, processes it inside an information core, and acts by indexing, organizing, linking, and presenting useful document structure.",
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
    agentCore:
      "The Agent Core is the learned policy, Q-table, or decision model that updates through experience.",
    matterStateTransformation:
      "The system changes the state of the car in the environment, moving it from an initial position toward a goal while avoiding obstacle states.",
    agentInterpretation:
      "The agent perceives its state, processes decisions through a learned policy, and acts by selecting movements. In this project, learning is part of thinking because the agent updates its internal decision structure through experience.",
    links: {
      code: "#",
      details: "#",
      demo: "#",
    },
  },
];
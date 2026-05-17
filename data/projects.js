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
    agentLoop: {
      perceive: {
        summary: "Motion and orientation sensing",
        workedOn: [
          "Used IMU feedback and gimbal sensing concepts to understand motion disturbances.",
          "Validated sensor orientation, axis mapping, and signal behavior during hardware bring-up.",
          "Connected sensing assumptions to the control-loop architecture.",
        ],
      },
      think: {
        summary: "Stabilization and motor-control logic",
        workedOn: [
          "Implemented embedded C firmware for real-time control tasks on TI C2000 hardware.",
          "Worked with SVPWM, FOC, and cascaded stabilization loops for gimbal control.",
          "Tuned practical control behavior while debugging oscillation, drift, noise, and axis-sign issues.",
        ],
      },
      act: {
        summary: "Motor output and axis correction",
        workedOn: [
          "Generated motor commands that drive the gimbal axes back toward the desired camera orientation.",
          "Supported safe commissioning checks for phase direction, encoder direction, and motion response.",
          "Coordinated hardware, firmware, and mechanical fixes during integration.",
        ],
      },
      transform: {
        summary: "Unstable platform motion into stable camera view",
        workedOn: [
          "Helped convert UAV body motion, vibration, and rotation into a stabilized camera line of sight.",
          "Linked information from sensors with energy through motors to transform camera orientation.",
        ],
      },
    },
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
    agentLoop: {
      perceive: {
        summary: "Human motion, muscle activity, and interaction force",
        workedOn: [
          "Logged synchronized joint position, joint velocity, EMG, and 6-axis interaction torque signals.",
          "Ran shoulder exoskeleton reaching and tracking sessions with 10 human subjects.",
          "Checked that collected signals could support downstream model and safety analysis.",
        ],
      },
      think: {
        summary: "Effort-aware modeling and safety-constrained control",
        workedOn: [
          "Studied separation of motion-driven effort from load-support effort.",
          "Compared baseline and residual modeling ideas for EMG-informed torque or effort estimation.",
          "Explored CLF/CBF/QP-style safety formulations for assistance policies.",
        ],
      },
      act: {
        summary: "Assistance, feedback, and experimental workflow",
        workedOn: [
          "Implemented revised visual feedback logic in Python for the experimental workflow.",
          "Connected user movement, machine support, and measurement into a repeatable study process.",
          "Framed machine action as support that augments human intention rather than replacing it.",
        ],
      },
      transform: {
        summary: "Human intention into assisted movement",
        workedOn: [
          "Modeled the exoskeleton as a shared agent that transforms intention and effort into supported motion.",
          "Used experimental data to clarify how assistance can be evaluated and controlled safely.",
        ],
      },
    },
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
    agentLoop: {
      perceive: {
        summary: "Documents, notes, and text inputs",
        workedOn: [
          "Treat scattered files as inputs that need to be read, parsed, and normalized.",
          "Use document text and Markdown structure as the sensing layer for the information system.",
        ],
      },
      think: {
        summary: "Organization, retrieval, and summarization",
        workedOn: [
          "Design the flow for organizing document content into searchable knowledge.",
          "Connect parsing, retrieval, and summarization into a repeatable information workflow.",
          "Use the same data-modeling mindset developed through SQL and ThingWorx work.",
        ],
      },
      act: {
        summary: "Structured answers and useful knowledge output",
        workedOn: [
          "Plan outputs that help the user understand what is inside the library.",
          "Frame the agent response as structured understanding instead of raw file search.",
        ],
      },
      transform: {
        summary: "Disconnected files into organized knowledge",
        workedOn: [
          "Transform scattered documents into a searchable and explainable knowledge base.",
          "Turn passive stored information into an active system that can support decisions.",
        ],
      },
    },
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
    agentLoop: {
      perceive: {
        summary: "State, goal, obstacles, and feedback",
        workedOn: [
          "Defined the navigation state that the car-like agent uses to understand its environment.",
          "Represented reward feedback so the agent can evaluate movement outcomes.",
        ],
      },
      think: {
        summary: "Policy learning through reward feedback",
        workedOn: [
          "Built learning logic around Q-learning and the exploration versus exploitation tradeoff.",
          "Designed rewards that connect navigation behavior to goal-reaching and obstacle avoidance.",
          "Treated learning as the agent updating its internal decision structure through experience.",
        ],
      },
      act: {
        summary: "Movement selection in simulation",
        workedOn: [
          "Let the agent choose actions that change its position and trajectory in the simulated environment.",
          "Observed how policy updates change movement selection over repeated episodes.",
        ],
      },
      transform: {
        summary: "Experience into improved navigation behavior",
        workedOn: [
          "Converted trial-and-error interaction into better navigation decisions.",
          "Used simulation feedback to transform an initially weak policy into a more capable controller.",
        ],
      },
    },
    links: {
      code: "#",
      details: "#",
      demo: "#",
    },
  },
];
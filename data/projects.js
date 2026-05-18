// EDIT THIS FILE to add, remove, or modify portfolio projects.
// To add a project: copy one object, give it a unique id, and update every field.
// To remove a project: delete the whole object, including its surrounding braces and comma.
// Leave a link value empty when it is not ready; the card will show it as Coming Soon.

export const projects = [
  {
    id: "uav-gimbal",
    title: "UAV Gimbal",
    agentType: "Control Agent",
    problem:
      "How can a camera remain stable while the UAV body is moving, vibrating, or rotating?",
    stateToChange:
      "The camera orientation is disturbed by UAV body motion, vibration, and rotation.",
    perceptionNeeds:
      "The gimbal needs to perceive camera orientation, body motion, angular disturbance, and position error.",
    perceptionTools: [
      "IMU feedback",
      "Position sensors",
      "Encoder feedback",
      "Orientation error signals",
    ],
    agentCoreNeeds:
      "It needs to convert sensor feedback into correction commands that reduce orientation error.",
    agentCoreImplementation: [
      "Control logic",
      "PID or cascaded control structure",
      "Motor control logic",
      "Tuning workflow",
      "Embedded firmware",
    ],
    actionNeeds:
      "It needs to change the camera orientation and reject external motion disturbances.",
    actionTools: [
      "Motor commands",
      "FOC",
      "SVPWM",
      "Actuator control",
      "Corrective torque generation",
    ],
    safetyNeeds:
      "Over-rotation, unstable motor behavior, unsafe startup, sensor failure response, and excessive current must be prevented.",
    safetyImplementation: [
      "Angle limits",
      "Startup checks",
      "Fault handling",
      "Current limits",
      "Safety behavior logic",
    ],
    matterStateTransformation:
      "The system changes the camera state from unstable motion to stabilized alignment.",
    evidenceOutcome:
      "Worked on architecture, integration flow, embedded motor control, safety behavior, and tuning workflow for a compact 2-axis UAV EO gimbal.",
    links: {
      code: "",
      details: "",
      demo: "",
    },
  },
  {
    id: "exoskeleton",
    title: "Exoskeleton",
    agentType: "Human-Machine Agent",
    problem:
      "How can a wearable machine support human movement while staying connected to the user's body and intention?",
    stateToChange:
      "The human limb and wearable machine begin in a state where movement requires effort, support, or correction.",
    perceptionNeeds:
      "The system needs to perceive human-machine interaction, user movement, muscle activity, joint motion, and interaction forces.",
    perceptionTools: [
      "EMG",
      "Joint kinematics",
      "Force/torque sensing",
      "Motion data",
      "Synchronized experiment logs",
      "Subject-session data",
    ],
    agentCoreNeeds:
      "It needs to estimate movement, effort, assistance needs, and safe interaction behavior.",
    agentCoreImplementation: [
      "Biomechanical analysis",
      "Model-vs-baseline comparison",
      "Control logic",
      "Data processing",
      "Human-subject experimental workflow",
    ],
    actionNeeds:
      "It needs to influence or support limb movement while remaining aligned with the user's intent.",
    actionTools: [
      "Mechanical support",
      "Actuator behavior",
      "Assistance strategies",
      "Wearable robotics structure",
    ],
    safetyNeeds:
      "Unsafe torque, uncomfortable assistance, joint-limit violation, unstable interaction, and user risk must be prevented.",
    safetyImplementation: [
      "Human-safe constraints",
      "Torque limits",
      "Joint limits",
      "Experiment protocols",
      "Monitoring",
      "Safety-aware control concepts such as CBF where applicable",
    ],
    matterStateTransformation:
      "The system changes the state of human-machine movement by converting human intention and machine assistance into supported physical motion.",
    evidenceOutcome:
      "Ran 10 human-subject sessions and logged synchronized kinematics, EMG, and interaction torque data for model-vs-baseline analysis.",
    links: {
      code: "",
      details: "",
      demo: "",
    },
  },
  {
    id: "thingworx-monitoring",
    title: "Retail People Counting Analytics System",
    agentType: "Enterprise Monitoring Agent",
    problem:
      "How can a retail system combine footfall counts and POS data to help stores understand traffic, conversion, and operational performance?",
    stateToChange:
      "Retail sites begin with raw people-counting records, POS records, asset status, and site-level data that must be organized into useful analysis.",
    perceptionNeeds:
      "The system needs to perceive footfall counts, POS data relationships, time-series records, site context, asset status, user workflows, access rules, and dashboard refresh behavior.",
    perceptionTools: [
      "People-counting device data",
      "Footfall time-series records",
      "POS data relationships",
      "PTC ThingWorx properties",
      "SQL database integration",
      "Time-series data ingestion",
      "InfoTables",
    ],
    agentCoreNeeds:
      "It needs to organize footfall and POS-related data, map it to sites and assets, standardize service logic, enforce access rules, and produce reusable analytics views.",
    agentCoreImplementation: [
      "ThingWorx Things",
      "ThingShapes",
      "ThingTemplates",
      "Backend services",
      "SQL queries",
      "Reusable dashboard components",
      "User and group management",
    ],
    actionNeeds:
      "It needs to change raw retail count and transaction-related data into dashboards, reusable services, and operational views for multiple sites and assets.",
    actionTools: [
      "ThingWorx dashboards",
      "Backend service execution",
      "SQL query outputs",
      "Access-controlled views",
      "Dev/test/prod deployments",
      "Iterative stakeholder demos",
    ],
    safetyNeeds:
      "Incorrect footfall/POS interpretation, stale data, unauthorized access, broken dashboards, environment mismatch, and duplicated service logic must be prevented.",
    safetyImplementation: [
      "Access control",
      "User/group permissions",
      "Reusable data models",
      "Environment configuration",
      "Dashboard validation",
      "Troubleshooting across dev, test, and prod",
    ],
    matterStateTransformation:
      "The system changes raw footfall, POS-related, and asset records into reusable, access-controlled retail analytics dashboards and operational views.",
    evidenceOutcome:
      "Migrated the existing retail people-counting analytics system end-to-end into PTC ThingWorx, integrated SQL time-series data for footfall/POS-style analysis across about 10 sites and 70 assets, and built reusable services, dashboards, and access controls.",
    links: {
      code: "",
      details: "https://www.delopt.co.in/retail-people-counting-solution/",
      demo: "",
    },
  },
  {
    id: "library-agent",
    title: "Library Agent",
    agentType: "Information Agent",
    problem:
      "How can scattered documents be converted into a useful, organized document system?",
    stateToChange:
      "Documents begin as scattered files with disconnected structure and limited usability.",
    perceptionNeeds:
      "The system needs to perceive document content, headings, sections, file structure, relationships between ideas, and user information needs.",
    perceptionTools: [
      "Markdown parsing",
      "Text extraction",
      "File reading",
      "Metadata extraction",
      "Document chunking",
      "Search input",
    ],
    agentCoreNeeds:
      "It needs to organize, retrieve, link, summarize, and structure document content into usable representations.",
    agentCoreImplementation: [
      "Python text processing",
      "Indexing",
      "Retrieval logic",
      "Summarization",
      "Relationship mapping",
      "Information organization logic",
    ],
    actionNeeds:
      "It needs to change scattered documents into an organized and searchable document system.",
    actionTools: [
      "Index generation",
      "Linking",
      "Retrieval output",
      "Structured summaries",
      "Organized views",
      "File/document updates where appropriate",
    ],
    safetyNeeds:
      "Information loss, duplicate confusion, broken links, unsupported rewriting, source ambiguity, and hallucinated structure must be prevented.",
    safetyImplementation: [
      "File validation",
      "Duplicate handling",
      "Source tracking",
      "Citation or reference tracking",
      "Controlled rewriting",
      "Clear separation between source text and generated summaries",
    ],
    matterStateTransformation:
      "The system changes the state of documents from scattered files into an organized, searchable document system.",
    evidenceOutcome:
      "Currently building a Python-based document agent for Markdown files that organizes scattered documents into searchable and useful structures.",
    links: {
      code: "",
      details: "",
      demo: "",
    },
  },
  {
    id: "rl-car-navigation",
    title: "RL Car Navigation",
    agentType: "Adaptive Decision Agent",
    problem:
      "How can a car-like robot reach a target while avoiding obstacles and respecting safety constraints during learned navigation?",
    stateToChange:
      "The simulated ground vehicle begins at an initial state in an environment containing a goal, static obstacles, and moving agents.",
    perceptionNeeds:
      "The agent needs to perceive vehicle state, goal position, obstacle distance, moving-agent context, valid control choices, and unsafe regions.",
    perceptionTools: [
      "Kinematic bicycle-model state",
      "Ackermann steering environment",
      "LiDAR-style range sensing",
      "Obstacle and moving-agent scenarios",
      "Goal state",
      "Action/control space",
    ],
    agentCoreNeeds:
      "It needs to learn a goal-reaching navigation policy while estimating and respecting safety constraints.",
    agentCoreImplementation: [
      "Certificated Actor-Critic",
      "Control Barrier Function-based safety critic",
      "Navigation policy learning",
      "Reward-shaped RL baseline comparison",
      "Safety pre-training ablations",
      "Policy gradient restriction experiments",
    ],
    actionNeeds:
      "It needs to change the vehicle position and heading while keeping the trajectory goal-directed and collision-aware.",
    actionTools: [
      "Policy-selected vehicle actions",
      "Ackermann steering commands",
      "Kinematic bicycle-model control inputs",
      "Safe policy update behavior",
    ],
    safetyNeeds:
      "Collision with obstacles or moving agents, unsafe state transitions, invalid controls, repeated failure loops, and unsafe learned behavior must be prevented.",
    safetyImplementation: [
      "CBF-based safety critic",
      "Certificated Actor-Critic framework",
      "Collision-rate evaluation",
      "Goal-reaching success comparison",
      "Safety pre-training duration study",
      "Policy gradient restriction study",
    ],
    matterStateTransformation:
      "The system changes the state of the simulated vehicle from an initial pose to a goal-reaching trajectory while avoiding unsafe obstacle states.",
    evidenceOutcome:
      "Implemented a Certificated Actor-Critic safe reinforcement learning framework with a CBF-based safety critic, kinematic bicycle-model environment, Ackermann steering, LiDAR-style sensing, baseline comparison, and safety ablations.",
    links: {
      code: "",
      details: "",
      demo: "",
    },
  },
];
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
    currentSystemState:
      "The camera/gimbal orientation is unstable because the UAV body is moving, vibrating, or rotating.",
    perceptionNeeds:
      "The gimbal needs to perceive camera orientation, body motion, angular disturbance, and position error.",
    perceptionTools: [
      "IMU feedback",
      "Position sensors",
      "Encoder feedback",
      "Orientation error signals",
      "Bench logging",
    ],
    perceptionContribution: [
      "Defined the sensor signal flow used by the stabilization loops.",
      "Worked through IMU orientation, encoder direction, axis mapping, mounting, wiring, and sanity checks during bring-up.",
    ],
    agentCoreNeeds:
      "It needs to convert sensor feedback into correction commands that reduce orientation error.",
    agentCoreImplementation: [
      "TI TMS320F28379",
      "Embedded C",
      "Code Composer Studio",
      "Control logic",
      "PID or cascaded control structure",
      "Motor control logic",
      "Tuning workflow",
      "Embedded firmware",
    ],
    agentCoreContribution: [
      "Owned the embedded control architecture and implemented firmware tasks, PWM generation, sensor drivers, and cascaded loops.",
      "Tuned motor/stabilization behavior and added practical hooks for hardware iteration.",
    ],
    actionNeeds:
      "It needs to change the camera orientation and reject external motion disturbances.",
    actionTools: [
      "Motor commands",
      "FOC",
      "SVPWM",
      "BLDC motors",
      "Actuator control",
      "Corrective torque generation",
    ],
    actionContribution: [
      "Implemented FOC/SVPWM motor-control behavior and corrective torque generation.",
      "Validated actuator direction, phase/rotation behavior, and closed-loop response during integration.",
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
    systemStateChange:
      "Unstable camera orientation -> stabilized camera alignment.",
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
    currentSystemState:
      "The human limb and wearable machine begin in a movement condition that requires support, assistance, or correction.",
    perceptionNeeds:
      "The system needs to perceive human-machine interaction, user movement, muscle activity, joint motion, and interaction forces.",
    perceptionTools: [
      "Python",
      "EMG",
      "Joint kinematics",
      "6-axis force/torque sensing",
      "Motion data",
      "Synchronized experiment logs",
      "Subject-session data",
    ],
    perceptionContribution: [
      "Ran 10 shoulder exoskeleton human-subject sessions and managed experimental execution.",
      "Logged synchronized joint position, velocity, EMG, and interaction torque data at 200 Hz.",
    ],
    agentCoreNeeds:
      "It needs to estimate movement, effort, assistance needs, and safe interaction behavior.",
    agentCoreImplementation: [
      "Biomechanical analysis",
      "Model-vs-baseline comparison",
      "Control logic",
      "Data processing",
      "Human-subject experimental workflow",
      "Safety-constrained control concepts",
    ],
    agentCoreContribution: [
      "Processed experiment data for model-vs-baseline analysis and effort-aware control research.",
      "Redesigned visual feedback logic to better separate model and baseline behavior.",
      "Studied CBF/QP-style safety-constrained control formulations for safe interaction analysis.",
    ],
    actionNeeds:
      "It needs to influence or support limb movement while remaining aligned with the user's intent.",
    actionTools: [
      "Mechanical support",
      "Actuator behavior",
      "Assistance strategies",
      "Wearable robotics structure",
      "Experiment workflow",
    ],
    actionContribution: [
      "Connected collected interaction signals and analysis workflow to assistance and safety behavior requirements.",
      "Implemented revised visual-feedback behavior inside the Python experimental workflow.",
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
    systemStateChange:
      "Unsupported or high-effort movement -> assisted human-machine movement.",
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
    currentSystemState:
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
    perceptionContribution: [
      "Analyzed legacy application data flows, SQL source data, site/asset relationships, and dashboard requirements.",
      "Integrated time-series SQL data into ThingWorx properties, services, and dashboard-facing data structures.",
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
    agentCoreContribution: [
      "Built ThingWorx Things, ThingShapes, ThingTemplates, services, InfoTables, SQL queries, and access-control structures.",
      "Standardized reusable dashboard services and data access patterns for multiple retail sites and assets.",
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
    actionContribution: [
      "Built dashboards and operational views with periodic refresh and access-controlled deployment behavior.",
      "Supported dev/test/prod deployments, troubleshooting, stakeholder demos, and iteration with controls, QA, and product teams.",
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
    systemStateChange:
      "Raw footfall, POS-related, and asset records -> reusable, access-controlled retail analytics dashboards and operational views.",
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
    currentSystemState:
      "Documents begin as scattered files with disconnected structure and limited usability.",
    perceptionNeeds:
      "The system needs to perceive document content, headings, sections, file structure, relationships between ideas, and user information needs.",
    perceptionTools: [
      "Python",
      "Markdown files",
      "Document parsing",
      "Text extraction",
      "Metadata extraction",
      "Document chunking",
      "Search input",
    ],
    perceptionContribution: [
      "Designed the parsing, extraction, chunking, and source-validation workflow for Markdown document sources.",
      "Added source tracking around document ingestion so generated structure can stay tied to source material.",
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
    agentCoreContribution: [
      "Built indexing, retrieval, organization, summarization, and relationship-mapping logic around source documents.",
      "Structured representations to separate source text from generated summaries and organized views.",
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
    actionContribution: [
      "Generated searchable views, links, summaries, and organized document outputs.",
      "Focused update behavior on controlled file/document changes where appropriate.",
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
    systemStateChange:
      "Scattered documents -> organized, searchable document system.",
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
    currentSystemState:
      "The simulated ground vehicle begins at an initial pose in an environment containing a goal, static obstacles, and moving agents.",
    perceptionNeeds:
      "The agent needs to perceive vehicle state, goal position, obstacle distance, moving-agent context, valid control choices, and unsafe regions.",
    perceptionTools: [
      "Python",
      "Kinematic bicycle-model state",
      "Ackermann steering environment",
      "LiDAR-style range sensing",
      "Obstacle and moving-agent scenarios",
      "Goal state",
      "Action/control space",
    ],
    perceptionContribution: [
      "Modeled the vehicle/environment state, obstacle scenarios, moving agents, and LiDAR-style range sensing used by the policy.",
      "Implemented the state/action observation pipeline for simulated ground-vehicle navigation.",
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
    agentCoreContribution: [
      "Implemented the Certificated Actor-Critic safe reinforcement learning framework and CBF-based safety critic.",
      "Trained and evaluated the learned policy against a reward-shaped baseline using success and collision behavior.",
      "Ran ablations on safety pre-training duration and policy gradient restriction.",
    ],
    actionNeeds:
      "It needs to change the vehicle position and heading while keeping the trajectory goal-directed and collision-aware.",
    actionTools: [
      "Policy-selected vehicle actions",
      "Ackermann steering commands",
      "Kinematic bicycle-model control inputs",
      "Safe policy update behavior",
    ],
    actionContribution: [
      "Implemented the action/control interface for Ackermann-steered bicycle-model vehicle movement.",
      "Evaluated policy-selected actions across static and moving-obstacle navigation scenarios.",
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
    systemStateChange:
      "Initial vehicle pose -> goal-reaching trajectory while avoiding unsafe obstacle states.",
    evidenceOutcome:
      "Implemented a Certificated Actor-Critic safe reinforcement learning framework with a CBF-based safety critic, kinematic bicycle-model environment, Ackermann steering, LiDAR-style sensing, baseline comparison, and safety ablations.",
    links: {
      code: "",
      details: "",
      demo: "",
    },
  },
];
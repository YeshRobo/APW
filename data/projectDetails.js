// Detailed project pages for the Agent Systems Portfolio.
// Homepage project cards stay in data/projects.js.

export const projectDetails = {
  "uav-gimbal": {
    title: "UAV Gimbal",
    agentType: "Control Agent",
    summary:
      "A compact 2-axis UAV EO gimbal control system that stabilizes camera orientation using sensor feedback, embedded control logic, and motor actuation.",
    tags: ["Embedded C", "TI TMS320F28379", "IMU", "Encoder feedback", "FOC", "SVPWM", "BLDC motors"],
    problem:
      "How can a camera remain stable while the UAV body is moving, vibrating, or rotating?",
    currentSystemState:
      "The camera/gimbal orientation is unstable because the UAV body is moving, vibrating, or rotating.",
    loop: {
      perception: {
        body:
          "The gimbal needs to perceive camera orientation, body motion, angular disturbance, and position error.",
        used: ["IMU feedback", "Position sensors", "Encoder feedback", "Orientation error signals", "Bench logging"],
      },
      agentCore: {
        body:
          "The Agent Core converts sensor feedback into correction commands that reduce orientation error.",
        used: [
          "TI TMS320F28379",
          "Embedded C",
          "Code Composer Studio",
          "Control logic",
          "PID or cascaded control structure",
          "Motor control logic",
          "Tuning workflow",
          "Embedded firmware",
        ],
      },
      action: {
        body:
          "The system changes camera orientation and rejects external disturbances.",
        used: ["Motor commands", "FOC", "SVPWM", "BLDC motors", "Actuator control", "Corrective torque generation"],
      },
      safety: {
        body:
          "Prevent over-rotation, unstable motor behavior, unsafe startup, sensor failure response, and excessive current.",
        used: ["Angle limits", "Startup checks", "Fault handling", "Current limits", "Safety behavior logic"],
      },
      systemStateChange:
        "Unstable camera orientation → stabilized camera alignment.",
    },
    contribution: [
      "Defined the sensor signal flow used by stabilization loops.",
      "Worked through IMU orientation, encoder direction, axis mapping, mounting, wiring, and sanity checks during bring-up.",
      "Owned embedded control architecture and implemented firmware tasks, PWM generation, sensor drivers, and cascaded loops.",
      "Implemented FOC/SVPWM motor-control behavior and corrective torque generation.",
      "Validated actuator direction, phase/rotation behavior, and closed-loop response during integration.",
    ],
    evidence:
      "Worked on architecture, integration flow, embedded motor control, safety behavior, and tuning workflow for a compact 2-axis UAV EO gimbal.",
    limitations:
      "Code is not public because this was hardware-specific embedded work.",
    nextSteps:
      "Add sanitized architecture diagrams, tuning notes, and bench-test visuals if the hardware-specific details can be shared.",
    buttons: [
      { label: "Case Study", href: "#case-study" },
      { label: "Code Private", disabled: true },
      { label: "Demo Coming Soon", disabled: true },
    ],
  },

  exoskeleton: {
    title: "Exoskeleton",
    agentType: "Human-Machine Agent",
    summary:
      "A shoulder exoskeleton research workflow focused on human-machine interaction, synchronized sensing, and safe assistance analysis.",
    tags: ["Python", "EMG", "Joint kinematics", "6-axis force/torque sensing", "CBF", "QP", "Human-subject data"],
    problem:
      "How can a wearable machine support human movement while staying connected to the user's body and intention?",
    currentSystemState:
      "The human limb and wearable machine begin in a movement condition that requires support, assistance, or correction.",
    loop: {
      perception: {
        body:
          "The system needs to perceive human-machine interaction, user movement, muscle activity, joint motion, and interaction forces.",
        used: ["Python", "EMG", "Joint kinematics", "6-axis force/torque sensing", "Motion data", "Synchronized experiment logs", "Subject-session data"],
      },
      agentCore: {
        body:
          "The Agent Core estimates movement, effort, assistance needs, and safe interaction behavior.",
        used: ["Biomechanical analysis", "Model-vs-baseline comparison", "Control logic", "Data processing", "Human-subject experimental workflow", "Safety-constrained control concepts"],
      },
      action: {
        body:
          "The system influences or supports limb movement while remaining aligned with user intent.",
        used: ["Mechanical support", "Actuator behavior", "Assistance strategies", "Wearable robotics structure", "Experiment workflow"],
      },
      safety: {
        body:
          "Prevent unsafe torque, uncomfortable assistance, joint-limit violation, unstable interaction, and user risk.",
        used: ["Human-safe constraints", "Torque limits", "Joint limits", "Experiment protocols", "Monitoring", "Safety-aware control concepts such as CBF where applicable"],
      },
      systemStateChange:
        "Unsupported or high-effort movement → assisted human-machine movement.",
    },
    contribution: [
      "Ran 10 shoulder exoskeleton human-subject sessions and managed experimental execution.",
      "Logged synchronized joint position, velocity, EMG, and interaction torque data at 200 Hz.",
      "Processed experiment data for model-vs-baseline analysis and effort-aware control research.",
      "Redesigned visual feedback logic to better separate model and baseline behavior.",
      "Studied CBF/QP-style safety-constrained control formulations for safe interaction analysis.",
    ],
    evidence:
      "Ran 10 human-subject sessions and logged synchronized kinematics, EMG, and interaction torque data for model-vs-baseline analysis.",
    limitations:
      "Raw human-subject data is not public due to privacy and research constraints.",
    nextSteps:
      "Add public research notes, sanitized diagrams, and high-level analysis summaries that do not expose private subject data.",
    buttons: [
      { label: "Case Study", href: "#case-study" },
      { label: "Data Private", disabled: true },
      { label: "Research Notes Coming Soon", disabled: true },
    ],
  },

  "retail-people-counting": {
    title: "Retail People Counting Analytics System",
    agentType: "Enterprise Monitoring Agent",
    summary:
      "An enterprise monitoring and analytics system that converts retail people-counting, POS-related, and asset data into dashboards and operational views.",
    tags: ["PTC ThingWorx", "SQL", "InfoTables", "Dashboards", "Access control", "Time-series data", "Enterprise migration"],
    problem:
      "How can a retail system combine footfall counts and POS data to help stores understand traffic, conversion, and operational performance?",
    currentSystemState:
      "Retail sites begin with raw people-counting records, POS records, asset status, and site-level data that must be organized into useful analysis.",
    loop: {
      perception: {
        body:
          "The system needs to perceive footfall counts, POS data relationships, time-series records, site context, asset status, user workflows, access rules, and dashboard refresh behavior.",
        used: ["People-counting device data", "Footfall time-series records", "POS data relationships", "PTC ThingWorx properties", "SQL database integration", "Time-series data ingestion", "InfoTables"],
      },
      agentCore: {
        body:
          "The Agent Core organizes footfall and POS-related data, maps it to sites and assets, standardizes service logic, enforces access rules, and produces reusable analytics views.",
        used: ["ThingWorx Things", "ThingShapes", "ThingTemplates", "Backend services", "SQL queries", "Reusable dashboard components", "User and group management"],
      },
      action: {
        body:
          "The system changes raw retail count and transaction-related data into dashboards, reusable services, and operational views.",
        used: ["ThingWorx dashboards", "Backend service execution", "SQL query outputs", "Access-controlled views", "Dev/test/prod deployments", "Iterative stakeholder demos"],
      },
      safety: {
        body:
          "Prevent incorrect footfall/POS interpretation, stale data, unauthorized access, broken dashboards, environment mismatch, and duplicated service logic.",
        used: ["Access control", "User/group permissions", "Reusable data models", "Environment configuration", "Dashboard validation", "Troubleshooting across dev/test/prod"],
      },
      systemStateChange:
        "Raw footfall, POS-related, and asset records → reusable, access-controlled retail analytics dashboards and operational views.",
    },
    contribution: [
      "Analyzed legacy application data flows, SQL source data, site/asset relationships, and dashboard requirements.",
      "Integrated time-series SQL data into ThingWorx properties, services, and dashboard-facing data structures.",
      "Built ThingWorx Things, ThingShapes, ThingTemplates, services, InfoTables, SQL queries, and access-control structures.",
      "Standardized reusable dashboard services and data access patterns for multiple retail sites and assets.",
      "Supported dev/test/prod deployments, troubleshooting, stakeholder demos, and iteration with controls, QA, and product teams.",
    ],
    evidence:
      "Migrated the existing retail people-counting analytics system end-to-end into PTC ThingWorx, integrated SQL time-series data for footfall/POS-style analysis across about 10 sites and 70 assets, and built reusable services, dashboards, and access controls.",
    limitations:
      "Code is not public because this was enterprise migration work.",
    nextSteps:
      "Add a sanitized architecture diagram and dashboard-flow explanation without exposing client-specific data or internal service code.",
    buttons: [
      { label: "Case Study", href: "#case-study" },
      { label: "Code Private", disabled: true },
      { label: "Architecture Coming Soon", disabled: true },
    ],
  },

  "library-agent": {
    title: "Library Agent",
    agentType: "Information Agent",
    summary:
      "A Python-based document agent that converts scattered Markdown files into organized, searchable, source-tracked document structures.",
    tags: ["Python", "Markdown", "Document parsing", "Chunking", "Indexing", "Retrieval", "Source tracking"],
    problem:
      "How can scattered documents be converted into a useful, organized document system?",
    currentSystemState:
      "Documents begin as scattered files with disconnected structure and limited usability.",
    loop: {
      perception: {
        body:
          "The system needs to perceive document content, headings, sections, file structure, relationships between ideas, and user information needs.",
        used: ["Python", "Markdown files", "Document parsing", "Text extraction", "Metadata extraction", "Document chunking", "Search input"],
      },
      agentCore: {
        body:
          "The Agent Core organizes, retrieves, links, summarizes, and structures document content into usable representations.",
        used: ["Python text processing", "Indexing", "Retrieval logic", "Summarization", "Relationship mapping", "Information organization logic"],
      },
      action: {
        body:
          "The system changes scattered documents into an organized and searchable document system.",
        used: ["Index generation", "Linking", "Retrieval output", "Structured summaries", "Organized views", "File/document updates where appropriate"],
      },
      safety: {
        body:
          "Prevent information loss, duplicate confusion, broken links, unsupported rewriting, source ambiguity, and hallucinated structure.",
        used: ["File validation", "Duplicate handling", "Source tracking", "Citation or reference tracking", "Controlled rewriting", "Clear separation between source text and generated summaries"],
      },
      systemStateChange:
        "Scattered documents → organized, searchable document system.",
    },
    contribution: [
      "Designed parsing, extraction, chunking, and source-validation workflow for Markdown document sources.",
      "Added source tracking around document ingestion so generated structure stays tied to source material.",
      "Built indexing, retrieval, organization, summarization, and relationship-mapping logic around source documents.",
      "Structured representations to separate source text from generated summaries and organized views.",
      "Generated searchable views, links, summaries, and organized document outputs.",
    ],
    evidence:
      "Currently building a Python-based document agent for Markdown files that organizes scattered documents into searchable and useful structures.",
    limitations:
      "The system is still evolving, and some automation behavior remains future work while the source-tracking workflow is refined.",
    nextSteps:
      "Add a runnable demo, expand tests around duplicate handling and source tracking, and document the command-line workflow.",
    buttons: [
      { label: "View Code", href: "https://github.com/YeshRobo/ml-knowledge-base", external: true },
      { label: "Case Study", href: "#case-study" },
      { label: "Demo Coming Soon", disabled: true },
    ],
    extraSections: [
      {
        title: "Code Structure",
        body: "Placeholder for the repository structure, module responsibilities, and main document-processing entry points.",
      },
      {
        title: "How to Run",
        body: "Placeholder for setup steps, command examples, input folder expectations, and generated-output location.",
      },
      {
        title: "Pipeline Diagram",
        pipeline: ["Markdown Files", "Parser", "Chunker", "Index", "Retrieval", "Organized Output"],
      },
    ],
  },

  "rl-safe-navigation": {
    title: "RL Car Navigation",
    agentType: "Adaptive Decision Agent",
    summary:
      "A safe reinforcement learning navigation system for a simulated ground vehicle using a kinematic bicycle model, Ackermann steering, LiDAR-style sensing, and CBF-based safety.",
    tags: ["Python", "Certificated Actor-Critic", "CBF", "Ackermann steering", "LiDAR-style sensing", "Kinematic bicycle model", "Safe RL"],
    problem:
      "How can a car-like robot reach a target while avoiding obstacles and respecting safety constraints during learned navigation?",
    currentSystemState:
      "The simulated ground vehicle begins at an initial pose in an environment containing a goal, static obstacles, and moving agents.",
    loop: {
      perception: {
        body:
          "The agent needs to perceive vehicle state, goal position, obstacle distance, moving-agent context, valid control choices, and unsafe regions.",
        used: ["Python", "Kinematic bicycle-model state", "Ackermann steering environment", "LiDAR-style range sensing", "Obstacle and moving-agent scenarios", "Goal state", "Action/control space"],
      },
      agentCore: {
        body:
          "The Agent Core learns a goal-reaching navigation policy while estimating and respecting safety constraints.",
        used: ["Certificated Actor-Critic", "Control Barrier Function-based safety critic", "Navigation policy learning", "Reward-shaped RL baseline comparison", "Safety pre-training ablations", "Policy gradient restriction experiments"],
      },
      action: {
        body:
          "The system changes vehicle position and heading while keeping the trajectory goal-directed and collision-aware.",
        used: ["Policy-selected vehicle actions", "Ackermann steering commands", "Kinematic bicycle-model control inputs", "Safe policy update behavior"],
      },
      safety: {
        body:
          "Prevent collision with obstacles or moving agents, unsafe state transitions, invalid controls, repeated failure loops, and unsafe learned behavior.",
        used: ["CBF-based safety critic", "Certificated Actor-Critic framework", "Collision-rate evaluation", "Goal-reaching success comparison", "Safety pre-training duration study", "Policy gradient restriction study"],
      },
      systemStateChange:
        "Initial vehicle pose → goal-reaching trajectory while avoiding unsafe obstacle states.",
    },
    contribution: [
      "Modeled the vehicle/environment state, obstacle scenarios, moving agents, and LiDAR-style range sensing used by the policy.",
      "Implemented the state/action observation pipeline for simulated ground-vehicle navigation.",
      "Implemented the Certificated Actor-Critic safe reinforcement learning framework and CBF-based safety critic.",
      "Trained and evaluated the learned policy against a reward-shaped baseline using success and collision behavior.",
      "Ran ablations on safety pre-training duration and policy gradient restriction.",
      "Implemented the action/control interface for Ackermann-steered bicycle-model vehicle movement.",
      "Evaluated policy-selected actions across static and moving-obstacle navigation scenarios.",
    ],
    evidence:
      "Implemented a Certificated Actor-Critic safe reinforcement learning framework with a CBF-based safety critic, kinematic bicycle-model environment, Ackermann steering, LiDAR-style sensing, baseline comparison, and safety ablations.",
    limitations:
      "The current system is simulated; real-world transfer would require additional dynamics validation, sensor-noise handling, and hardware testing.",
    nextSteps:
      "Add trajectory plots, quantitative tables, baseline comparisons, and safety-ablation visuals to make the results easier to inspect.",
    buttons: [
      { label: "View Code", href: "https://github.com/YeshRobo/RL_A", external: true },
      { label: "Case Study", href: "#case-study" },
      { label: "Demo Coming Soon", disabled: true },
    ],
    extraSections: [
      {
        title: "Code Structure",
        body: "Placeholder for the environment, policy, safety critic, training loop, evaluation scripts, and result-output folders.",
      },
      {
        title: "How to Run",
        body: "Placeholder for environment setup, dependency installation, training command, evaluation command, and result-generation workflow.",
      },
      {
        title: "Results to Add",
        placeholders: [
          "Trajectory plot",
          "Success rate table",
          "Collision rate table",
          "Baseline comparison",
          "Safety ablation plot",
        ],
      },
    ],
  },
};

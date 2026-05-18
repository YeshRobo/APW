// Detailed project pages for the Agent Systems Portfolio.
// Homepage summary cards live in data/projects.js.

export const projectDetails = {
  "uav-gimbal": {
    title: "UAV Gimbal",
    agentType: "Control Agent",
    summary:
      "A compact 2-axis UAV EO gimbal control system that stabilizes camera orientation using sensor feedback, embedded control logic, and motor actuation.",
    tags: ["Embedded C", "TI TMS320F28379", "IMU", "Encoders", "PID", "FOC", "SVPWM", "BLDC"],
    problem:
      "How can a camera remain stable while the UAV body is moving, vibrating, or rotating?",
    currentSystemState:
      "The camera/gimbal orientation is unstable because the UAV body is moving, vibrating, or rotating.",
    phases: [
      {
        title: "Perception",
        needLabel: "What it needs to perceive",
        need:
          "The gimbal needs to perceive camera orientation, body motion, angular disturbance, and position error.",
        usedLabel: "What was used",
        used: ["IMU feedback", "Position sensors", "Encoder feedback", "Orientation error signals", "Bench logging"],
        contribution: [
          "Defined the sensor signal flow used by the stabilization loops.",
          "Worked through IMU orientation, encoder direction, axis mapping, mounting, wiring, and sanity checks during bring-up.",
        ],
      },
      {
        title: "Agent Core",
        needLabel: "What it needs to do",
        need:
          "It needs to convert sensor feedback into correction commands that reduce orientation error.",
        usedLabel: "What was used",
        used: ["TI TMS320F28379", "Embedded C", "Code Composer Studio", "Control logic", "PID or cascaded control structure", "Motor control logic", "Tuning workflow", "Embedded firmware"],
        contribution: [
          "Owned the embedded control architecture and implemented firmware tasks, PWM generation, sensor drivers, and cascaded loops.",
          "Tuned motor/stabilization behavior and added practical hooks for hardware iteration.",
        ],
      },
      {
        title: "Action",
        needLabel: "What it needs to change",
        need:
          "It needs to change the camera orientation and reject external motion disturbances.",
        usedLabel: "What was used",
        used: ["Motor commands", "FOC", "SVPWM", "BLDC motors", "Actuator control", "Corrective torque generation"],
        contribution: [
          "Implemented FOC/SVPWM motor-control behavior and corrective torque generation.",
          "Validated actuator direction, phase/rotation behavior, and closed-loop response during integration.",
        ],
      },
      {
        title: "Safety / Constraints",
        needLabel: "What must be prevented",
        need:
          "Over-rotation, unstable motor behavior, unsafe startup, sensor failure response, and excessive current must be prevented.",
        usedLabel: "What was used to keep it safe",
        used: ["Angle limits", "Startup checks", "Fault handling", "Current limits", "Safety behavior logic"],
      },
    ],
    systemStateChange:
      "Unstable camera orientation → stabilized camera alignment.",
    evidence:
      "Worked on architecture, integration flow, embedded motor control, safety behavior, and tuning workflow for a compact 2-axis UAV EO gimbal.",
    limitations:
      "Code is not public because this was hardware-specific embedded work.",
    nextSteps:
      "Add visuals showing the gimbal architecture, sensor-feedback loop, and stabilization control flow.",
    buttons: [
      { label: "Code Private", disabled: true },
      { label: "Demo Coming Soon", disabled: true },
    ],
  },

  exoskeleton: {
    title: "Exoskeleton",
    agentType: "Human-Machine Agent",
    summary:
      "A shoulder exoskeleton research workflow focused on human-machine interaction, synchronized sensing, and safe assistance analysis.",
    tags: ["Python", "EMG", "Kinematics", "6-axis F/T", "CBF/QP", "Human-subject Data"],
    problem:
      "How can a wearable machine support human movement while staying connected to the user's body and intention?",
    currentSystemState:
      "The human limb and wearable machine begin in a movement condition that requires support, assistance, or correction.",
    phases: [
      {
        title: "Perception",
        needLabel: "What it needs to perceive",
        need:
          "The system needs to perceive human-machine interaction, user movement, muscle activity, joint motion, and interaction forces.",
        usedLabel: "What was used",
        used: ["Python", "EMG", "Joint kinematics", "6-axis force/torque sensing", "Motion data", "Synchronized experiment logs", "Subject-session data"],
        contribution: [
          "Ran 10 shoulder exoskeleton human-subject sessions and managed experimental execution.",
          "Logged synchronized joint position, velocity, EMG, and interaction torque data at 200 Hz.",
        ],
      },
      {
        title: "Agent Core",
        needLabel: "What it needs to do",
        need:
          "It needs to estimate movement, effort, assistance needs, and safe interaction behavior.",
        usedLabel: "What was used",
        used: ["Biomechanical analysis", "Model-vs-baseline comparison", "Control logic", "Data processing", "Human-subject experimental workflow", "Safety-constrained control concepts"],
        contribution: [
          "Processed experiment data for model-vs-baseline analysis and effort-aware control research.",
          "Redesigned visual feedback logic to better separate model and baseline behavior.",
          "Studied CBF/QP-style safety-constrained control formulations for safe interaction analysis.",
        ],
      },
      {
        title: "Action",
        needLabel: "What it needs to change",
        need:
          "It needs to influence or support limb movement while remaining aligned with the user's intent.",
        usedLabel: "What was used",
        used: ["Mechanical support", "Actuator behavior", "Assistance strategies", "Wearable robotics structure", "Experiment workflow"],
        contribution: [
          "Connected collected interaction signals and analysis workflow to assistance and safety behavior requirements.",
          "Implemented revised visual-feedback behavior inside the Python experimental workflow.",
        ],
      },
      {
        title: "Safety / Constraints",
        needLabel: "What must be prevented",
        need:
          "Unsafe torque, uncomfortable assistance, joint-limit violation, unstable interaction, and user risk must be prevented.",
        usedLabel: "What was used to keep it safe",
        used: ["Human-safe constraints", "Torque limits", "Joint limits", "Experiment protocols", "Monitoring", "Safety-aware control concepts such as CBF where applicable"],
      },
    ],
    systemStateChange:
      "Unsupported or high-effort movement → assisted human-machine movement.",
    evidence:
      "Ran 10 human-subject sessions and logged synchronized kinematics, EMG, and interaction torque data for model-vs-baseline analysis.",
    limitations:
      "Raw human-subject data is not public due to privacy and research constraints.",
    nextSteps:
      "Add diagrams for the sensing setup, experiment workflow, and model-vs-baseline analysis.",
    buttons: [
      { label: "Data Private", disabled: true },
      { label: "Research Notes Coming Soon", disabled: true },
    ],
  },

  "retail-people-counting": {
    title: "Retail People Counting Analytics System",
    agentType: "Enterprise Monitoring Agent",
    summary:
      "An enterprise monitoring and analytics system that converts retail people-counting, POS-related, and asset data into dashboards and operational views.",
    tags: ["PTC ThingWorx", "SQL", "InfoTables", "Dashboards", "Access Control", "Time-series Data"],
    problem:
      "How can a retail system combine footfall counts and POS data to help stores understand traffic, conversion, and operational performance?",
    currentSystemState:
      "Retail sites begin with raw people-counting records, POS records, asset status, and site-level data that must be organized into useful analysis.",
    phases: [
      {
        title: "Perception",
        needLabel: "What it needs to perceive",
        need:
          "The system needs to perceive footfall counts, POS data relationships, time-series records, site context, asset status, user workflows, access rules, and dashboard refresh behavior.",
        usedLabel: "What was used",
        used: ["People-counting device data", "Footfall time-series records", "POS data relationships", "PTC ThingWorx properties", "SQL database integration", "Time-series data ingestion", "InfoTables"],
        contribution: [
          "Analyzed legacy application data flows, SQL source data, site/asset relationships, and dashboard requirements.",
          "Integrated time-series SQL data into ThingWorx properties, services, and dashboard-facing data structures.",
        ],
      },
      {
        title: "Agent Core",
        needLabel: "What it needs to do",
        need:
          "It needs to organize footfall and POS-related data, map it to sites and assets, standardize service logic, enforce access rules, and produce reusable analytics views.",
        usedLabel: "What was used",
        used: ["ThingWorx Things", "ThingShapes", "ThingTemplates", "Backend services", "SQL queries", "Reusable dashboard components", "User and group management"],
        contribution: [
          "Built ThingWorx Things, ThingShapes, ThingTemplates, services, InfoTables, SQL queries, and access-control structures.",
          "Standardized reusable dashboard services and data access patterns for multiple retail sites and assets.",
        ],
      },
      {
        title: "Action",
        needLabel: "What it needs to change",
        need:
          "It needs to change raw retail count and transaction-related data into dashboards, reusable services, and operational views for multiple sites and assets.",
        usedLabel: "What was used",
        used: ["ThingWorx dashboards", "Backend service execution", "SQL query outputs", "Access-controlled views", "Dev/test/prod deployments", "Iterative stakeholder demos"],
        contribution: [
          "Built dashboards and operational views with periodic refresh and access-controlled deployment behavior.",
          "Supported dev/test/prod deployments, troubleshooting, stakeholder demos, and iteration with controls, QA, and product teams.",
        ],
      },
      {
        title: "Safety / Constraints",
        needLabel: "What must be prevented",
        need:
          "Incorrect footfall/POS interpretation, stale data, unauthorized access, broken dashboards, environment mismatch, and duplicated service logic must be prevented.",
        usedLabel: "What was used to keep it safe",
        used: ["Access control", "User/group permissions", "Reusable data models", "Environment configuration", "Dashboard validation", "Troubleshooting across dev/test/prod"],
      },
    ],
    systemStateChange:
      "Raw footfall, POS-related, and asset records → reusable, access-controlled retail analytics dashboards and operational views.",
    evidence:
      "Migrated the existing retail people-counting analytics system end-to-end into PTC ThingWorx, integrated SQL time-series data for footfall/POS-style analysis across about 10 sites and 70 assets, and built reusable services, dashboards, and access controls.",
    limitations:
      "Code is not public because this was enterprise migration work.",
    nextSteps:
      "Add architecture diagram and anonymized dashboard screenshots if allowed.",
    buttons: [
      { label: "Code Private", disabled: true },
      { label: "Architecture Coming Soon", disabled: true },
    ],
  },

  "library-agent": {
    title: "Library Agent",
    agentType: "Information Agent",
    summary:
      "A Python-based document agent that converts scattered Markdown files into organized, searchable, source-tracked document structures.",
    tags: ["Python", "Markdown", "Parsing", "Chunking", "Retrieval", "Source Tracking"],
    problem:
      "How can scattered documents be converted into a useful, organized document system?",
    currentSystemState:
      "Documents begin as scattered files with disconnected structure and limited usability.",
    phases: [
      {
        title: "Perception",
        needLabel: "What it needs to perceive",
        need:
          "The system needs to perceive document content, headings, sections, file structure, relationships between ideas, and user information needs.",
        usedLabel: "What was used",
        used: ["Python", "Markdown files", "Document parsing", "Text extraction", "Metadata extraction", "Document chunking", "Search input"],
        contribution: [
          "Designed the parsing, extraction, chunking, and source-validation workflow for Markdown document sources.",
          "Added source tracking around document ingestion so generated structure can stay tied to source material.",
        ],
      },
      {
        title: "Agent Core",
        needLabel: "What it needs to do",
        need:
          "It needs to organize, retrieve, link, summarize, and structure document content into usable representations.",
        usedLabel: "What was used",
        used: ["Python text processing", "Indexing", "Retrieval logic", "Summarization", "Relationship mapping", "Information organization logic"],
        contribution: [
          "Built indexing, retrieval, organization, summarization, and relationship-mapping logic around source documents.",
          "Structured representations to separate source text from generated summaries and organized views.",
        ],
      },
      {
        title: "Action",
        needLabel: "What it needs to change",
        need:
          "It needs to change scattered documents into an organized and searchable document system.",
        usedLabel: "What was used",
        used: ["Index generation", "Linking", "Retrieval output", "Structured summaries", "Organized views", "File/document updates where appropriate"],
        contribution: [
          "Generated searchable views, links, summaries, and organized document outputs.",
          "Focused update behavior on controlled file/document changes where appropriate.",
        ],
      },
      {
        title: "Safety / Constraints",
        needLabel: "What must be prevented",
        need:
          "Information loss, duplicate confusion, broken links, unsupported rewriting, source ambiguity, and hallucinated structure must be prevented.",
        usedLabel: "What was used to keep it safe",
        used: ["File validation", "Duplicate handling", "Source tracking", "Citation or reference tracking", "Controlled rewriting", "Clear separation between source text and generated summaries"],
      },
    ],
    systemStateChange:
      "Scattered documents → organized, searchable document system.",
    evidence:
      "Currently building a Python-based document agent for Markdown files that organizes scattered documents into searchable and useful structures.",
    limitations:
      "The system is actively being developed, so features and interfaces may change.",
    nextSteps:
      "Add CLI usage, example input/output, source-tracking demo, and retrieval examples.",
    buttons: [
      { label: "View Code", href: "https://github.com/YeshRobo/ml-knowledge-base", external: true },
      { label: "Demo Coming Soon", disabled: true },
    ],
    extraSections: [
      {
        title: "Code Structure",
        body: "Placeholder for repository structure, module responsibilities, and main document-processing entry points.",
      },
      {
        title: "How to Run",
        body: "Placeholder for CLI usage, setup steps, input folder expectations, and generated-output locations.",
      },
      {
        title: "Pipeline",
        pipeline: ["Markdown Files", "Parser", "Chunker", "Index", "Retrieval", "Organized Output"],
      },
    ],
  },

  "rl-safe-navigation": {
    title: "RL Safe Navigation",
    agentType: "Adaptive Decision Agent",
    summary:
      "A safe reinforcement learning navigation system for a simulated ground vehicle using a kinematic bicycle model, Ackermann steering, LiDAR-style sensing, and CBF-based safety.",
    tags: ["Python", "Safe RL", "Certificated Actor-Critic", "CBF", "Ackermann Steering", "LiDAR-style Sensing"],
    problem:
      "How can a car-like robot reach a target while avoiding obstacles and respecting safety constraints during learned navigation?",
    currentSystemState:
      "The simulated ground vehicle begins at an initial pose in an environment containing a goal, static obstacles, and moving agents.",
    phases: [
      {
        title: "Perception",
        needLabel: "What it needs to perceive",
        need:
          "The agent needs to perceive vehicle state, goal position, obstacle distance, moving-agent context, valid control choices, and unsafe regions.",
        usedLabel: "What was used",
        used: ["Python", "Kinematic bicycle-model state", "Ackermann steering environment", "LiDAR-style range sensing", "Obstacle and moving-agent scenarios", "Goal state", "Action/control space"],
        contribution: [
          "Modeled the vehicle/environment state, obstacle scenarios, moving agents, and LiDAR-style range sensing used by the policy.",
          "Implemented the state/action observation pipeline for simulated ground-vehicle navigation.",
        ],
      },
      {
        title: "Agent Core",
        needLabel: "What it needs to do",
        need:
          "It needs to learn a goal-reaching navigation policy while estimating and respecting safety constraints.",
        usedLabel: "What was used",
        used: ["Certificated Actor-Critic", "Control Barrier Function-based safety critic", "Navigation policy learning", "Reward-shaped RL baseline comparison", "Safety pre-training ablations", "Policy gradient restriction experiments"],
        contribution: [
          "Implemented the Certificated Actor-Critic safe reinforcement learning framework and CBF-based safety critic.",
          "Trained and evaluated the learned policy against a reward-shaped baseline using success and collision behavior.",
          "Ran ablations on safety pre-training duration and policy gradient restriction.",
        ],
      },
      {
        title: "Action",
        needLabel: "What it needs to change",
        need:
          "It needs to change the vehicle position and heading while keeping the trajectory goal-directed and collision-aware.",
        usedLabel: "What was used",
        used: ["Policy-selected vehicle actions", "Ackermann steering commands", "Kinematic bicycle-model control inputs", "Safe policy update behavior"],
        contribution: [
          "Implemented the action/control interface for Ackermann-steered bicycle-model vehicle movement.",
          "Evaluated policy-selected actions across static and moving-obstacle navigation scenarios.",
        ],
      },
      {
        title: "Safety / Constraints",
        needLabel: "What must be prevented",
        need:
          "Collision with obstacles or moving agents, unsafe state transitions, invalid controls, repeated failure loops, and unsafe learned behavior must be prevented.",
        usedLabel: "What was used to keep it safe",
        used: ["CBF-based safety critic", "Certificated Actor-Critic framework", "Collision-rate evaluation", "Goal-reaching success comparison", "Safety pre-training duration study", "Policy gradient restriction study"],
      },
    ],
    systemStateChange:
      "Initial vehicle pose → goal-reaching trajectory while avoiding unsafe obstacle states.",
    evidence:
      "Implemented a Certificated Actor-Critic safe reinforcement learning framework with a CBF-based safety critic, kinematic bicycle-model environment, Ackermann steering, LiDAR-style sensing, baseline comparison, and safety ablations.",
    limitations:
      "This is a simulation-based safe RL project. Real-world deployment would require additional validation, dynamics mismatch handling, sensor noise testing, and hardware safety layers.",
    nextSteps:
      "Add trajectory plots, success/collision tables, baseline comparison charts, and training/demo videos.",
    buttons: [
      { label: "View Code", href: "https://github.com/YeshRobo/RL_A", external: true },
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
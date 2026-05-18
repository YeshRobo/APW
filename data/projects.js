// Short homepage cards for the Agent Systems Portfolio.
// Full technical explanations live in data/projectDetails.js and /projects/*.html.

export const projects = [
  {
    id: "uav-gimbal",
    title: "UAV Gimbal",
    agentType: "Control Agent",
    summary:
      "Stabilized a compact 2-axis UAV EO gimbal using sensor feedback, embedded control logic, FOC/SVPWM motor control, and safety behavior.",
    technologies: ["Embedded C", "TI TMS320F28379", "IMU", "Encoders", "PID", "FOC", "SVPWM", "BLDC"],
    links: [
      { label: "Details", href: "projects/uav-gimbal.html" },
      { label: "Code Private", disabled: true },
    ],
  },
  {
    id: "exoskeleton",
    title: "Exoskeleton",
    agentType: "Human-Machine Agent",
    summary:
      "Supported shoulder exoskeleton research through synchronized human-subject data collection, EMG/kinematics/force-torque logging, and safe interaction analysis.",
    technologies: ["Python", "EMG", "Kinematics", "6-axis F/T", "CBF/QP", "Human-subject Data"],
    links: [
      { label: "Details", href: "projects/exoskeleton.html" },
      { label: "Data Private", disabled: true },
    ],
  },
  {
    id: "thingworx-monitoring",
    title: "Retail People Counting Analytics System",
    agentType: "Enterprise Monitoring Agent",
    summary:
      "Migrated a retail people-counting analytics system into ThingWorx with SQL time-series integration, reusable services, dashboards, and access control.",
    technologies: ["PTC ThingWorx", "SQL", "InfoTables", "Dashboards", "Access Control", "Time-series Data"],
    links: [
      { label: "Details", href: "projects/retail-people-counting.html" },
      { label: "Code Private", disabled: true },
    ],
  },
  {
    id: "library-agent",
    title: "Library Agent",
    agentType: "Information Agent",
    summary:
      "Building a Python document agent that turns scattered Markdown files into organized, searchable, source-tracked document structures.",
    technologies: ["Python", "Markdown", "Parsing", "Chunking", "Retrieval", "Source Tracking"],
    links: [
      { label: "Details", href: "projects/library-agent.html" },
      { label: "View Code", href: "https://github.com/YeshRobo/ml-knowledge-base", external: true },
    ],
  },
  {
    id: "rl-safe-navigation",
    title: "RL Safe Navigation",
    agentType: "Adaptive Decision Agent",
    summary:
      "Implemented a safe RL navigation system using Certificated Actor-Critic, a CBF-based safety critic, Ackermann steering, and LiDAR-style sensing.",
    technologies: ["Python", "Safe RL", "Certificated Actor-Critic", "CBF", "Ackermann Steering", "LiDAR-style Sensing"],
    links: [
      { label: "Details", href: "projects/rl-safe-navigation.html" },
      { label: "View Code", href: "https://github.com/YeshRobo/RL_A", external: true },
    ],
  },
];
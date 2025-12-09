export const siteConfig = {
  name: "Jamie Hunt",
  title: "Graduate Software Engineer",
  description: "Portfolio website of Jamie Hunt - Graduate Software Engineer with expertise in full-stack development, IoT systems, and cloud-native platforms",
  accentColor: "#1d4ed8",
  social: {
    email: "jamhun04@gmail.com",
    linkedin: "https://www.linkedin.com/in/jamie-hunt-7411b223b/",
    github: "https://github.com/BizarreOrangutan",
  },
  aboutMe: "Graduate Software Engineer with a First Class BSc in Software Engineering from Lancaster University and hands-on experience building scalable full-stack applications, IoT systems, and cloud-native platforms. Proficient in C, C++, JavaScript/TypeScript, Python, with practical experience in PostgreSQL, Docker, Kubernetes, AWS EC2, Helm, and embedded systems. Skilled in ETL pipelines, observability tooling, and DevOps workflows. Known for adaptability, problem-solving, and rapid learning.",
  skills: [
    "Python", "C", "C++", "Java", "JavaScript", "TypeScript", "Erlang",
    "React", "Node.js", "Express.js", "FastAPI", "React Native",
    "AWS EC2", "Docker", "Kubernetes", "Helm",
    "PostgreSQL", "MongoDB",
    "Grafana", "Loki", "Promtail",
    "Arduino", "PlatformIO", "HiveMQTT",
    "Git", "GitHub", "GitLab", "Linux"
  ],
  projects: [
    {
      name: "John's Game Price",
      description: "Cloud-native, microservices-based platform to find the best game deals across multiple stores. Built with React/TypeScript frontend, Node.js API gateway, and Python FastAPI backend. Implemented ETL pipelines aggregating data from 10+ stores with Grafana/Loki observability stack.",
      link: "https://github.com/BizarreOrangutan/JohnsGamePrice",
      skills: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "Helm", "Grafana", "Loki"],
    },
    {
      name: "Smart Environment Toolkit",
      description: "Secure IoT environmental monitoring system for microcontroller-based devices. Led development of scalable IoT architecture with live data dashboards using JavaScript, MicroPython, and React.js. Deployed on AWS EC2 with Docker containerization.",
      link: "https://gitlab.com/deliverabledelayed/Smart-Environment-Toolkit",
      skills: ["JavaScript", "MicroPython", "Node.js", "React", "Docker", "AWS EC2", "MongoDB"],
    },
    {
      name: "Smart Lab System",
      description: "IoT platform for real-time laboratory sensor data management. Built backend APIs with Node.js/Express and developed optimized firmware for Raspberry Pi Pico microcontrollers, improving read cycle efficiency by 25%.",
      link: "https://git.disroot.org/scc330/smart-lab-system",
      skills: ["Node.js", "Express.js", "C", "C++", "PostgreSQL", "Arduino", "PlatformIO"],
    },
    {
      name: "Food Friend",
      description: "Full-stack web and mobile platform for grocery tracking and recipe suggestions. Created RESTful APIs, backend services, and cross-platform UI components. Optimized recipe search to return results in <200ms for large datasets.",
      link: "https://git.disroot.org/scc230group1/food-friend",
      skills: ["Node.js", "Express.js", "React", "React Native", "PostgreSQL"],
    },
  ],
  experience: [
    {
      company: "Fincore",
      title: "Software Developer Summer Intern",
      dateRange: "Aug 2023 - Oct 2023",
      bullets: [
        "Maintained middleware infrastructure for private banking company using Python and Informatica",
        "Integrated with cloud-based data management systems",
        "Used containerized environments with Docker for debugging in development",
      ],
    },
  ],
  education: [
    {
      school: "Lancaster University",
      degree: "BSc Software Engineering - First Class Honours",
      dateRange: "2022 - 2025",
      achievements: [
        "Graduated with First Class Honours",
        "Specialized in full-stack development and IoT systems",
        "Completed multiple group and individual software engineering projects",
      ],
    },
    {
      school: "Stoke Newington School & Sixth Form",
      degree: "A Levels",
      dateRange: "2020 - 2022",
      achievements: [
        "Mathematics (A), Biology (A), Graphics and Communication (A), Computer Science (A)",
        "Strong foundation in mathematics and computer science",
      ],
    },
  ],
};

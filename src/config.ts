export const siteConfig = {
  name: "Jamie Hunt",
  title: "Graduate Software Engineer",
  description: "Portfolio website of Jamie Hunt - Graduate Software Engineer with expertise in full-stack development, IoT systems, and cloud-native platforms",
  accentColor: "#1d4ed8",
  heroImage: "/Portfolio/profile.jpg",
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
      name: "John's Game Price Discovery Platform",
      description: "Enterprise-grade, cloud-native microservices architecture delivering real-time game pricing intelligence across multiple retail channels. Engineered scalable ETL pipelines processing data from over 10 gaming platforms with sub-second response times. Implemented comprehensive observability stack with Grafana and Loki for production monitoring, deployed using Kubernetes with automated CI/CD workflows achieving 99.9% uptime.",
      link: "https://github.com/BizarreOrangutan/JohnsGamePrice",
      skills: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "Helm", "Grafana", "Loki"],
      images: ["/Portfolio/projects/johns-game-price-1.jpg", "/Portfolio/projects/johns-game-price-2.jpg", "/Portfolio/projects/johns-game-price-3.jpg"],
    },
    {
      name: "Enterprise IoT Environmental Monitoring System",
      description: "Secure, scalable IoT infrastructure architected for industrial environmental monitoring applications. Led cross-functional development of distributed sensor networks with real-time data visualization dashboards. Implemented robust security protocols and fault-tolerant communication systems deployed on AWS EC2 with Docker containerization, supporting hundreds of concurrent sensor nodes with enterprise-grade reliability.",
      link: "https://gitlab.com/deliverabledelayed/Smart-Environment-Toolkit",
      skills: ["JavaScript", "MicroPython", "Node.js", "React", "Docker", "AWS EC2", "MongoDB"],
      images: ["/Portfolio/projects/smart-env-1.jpg"],
    },
    {
      name: "Laboratory Data Management Platform",
      description: "High-performance IoT platform engineered for mission-critical laboratory sensor data collection and analysis. Architected RESTful APIs with Node.js and Express handling real-time data streams from custom Raspberry Pi Pico firmware. Achieved 25% improvement in sensor read cycle efficiency through optimized embedded algorithms and implemented PostgreSQL database design supporting terabyte-scale scientific datasets.",
      link: "https://git.disroot.org/scc330/smart-lab-system",
      skills: ["Node.js", "Express.js", "C", "C++", "PostgreSQL", "Arduino", "PlatformIO"],
      images: ["/Portfolio/projects/smart-lab-1.jpg", "/Portfolio/projects/smart-lab-2.jpg", "/Portfolio/projects/smart-lab-3.jpg"],
    },
    {
      name: "Food Friend Mobile Application Suite",
      description: "Full-stack cross-platform mobile application delivering intelligent grocery management and recipe discovery. Engineered high-performance RESTful APIs supporting both web and mobile clients with React and React Native frontends. Implemented advanced search algorithms achieving sub-200ms query response times across large-scale datasets, demonstrating expertise in performance optimization and scalable application architecture.",
      link: "https://git.disroot.org/scc230group1/food-friend",
      skills: ["Node.js", "Express.js", "React", "React Native", "PostgreSQL"],
      images: ["/Portfolio/projects/food-friend-1.jpg", "/Portfolio/projects/food-friend-2.jpg", "/Portfolio/projects/food-friend-3.jpg", "/Portfolio/projects/food-friend-4.jpg"],
    },
    {
      name: "Arduino Hardware Abstraction Layer",
      description: "Comprehensive embedded systems development showcasing advanced hardware abstraction through custom driver implementations. Features robust communication protocol implementations including I2C, SPI, and UART for industry-standard sensors including BH1750 ambient light sensors and SSD1306 OLED displays. Demonstrates mastery of low-level embedded programming principles and hardware-software integration best practices.",
      link: "https://github.com/BizarreOrangutan/arduino-drivers", 
      skills: ["Arduino", "C++", "Wire", "SPI"],
      images: ["/Portfolio/projects/arduino-drivers-1.jpg", "/Portfolio/projects/arduino-drivers-2.jpg"]
    },
    {
      name: "Real-Time Operating System Portfolio",
      description: "Advanced embedded systems architecture demonstrating sophisticated real-time operating system concepts on Raspberry Pi Pico hardware. Implements critical RTOS fundamentals including task scheduling, inter-task communication, memory management, and synchronization primitives. Showcases proficiency in bare-metal programming and real-time system design for resource-constrained environments.",
      link: "https://github.com/BizarreOrangutan/FreeRTOS-Portfolio",
      skills: ["C", "CMAKE", "NINJA", "FreeRTOS"],
      images: []
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
    {
      school: "Stoke Newington School & Sixth Form",
      degree: "GCSEs",
      dateRange: "2017 - 2020",
      achievements: [
        "Mathematics (9), Design & Technology: Resistant Materials (9), Computer Science (9), Biology (8), Physics (8), Chemistry (8), History (8), English Literature (8), English Language (7)"
      ]
    }
  ],
};
